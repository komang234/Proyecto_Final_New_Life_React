import './index.css';
import './App.css';
import React from 'react';
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import profileImage from './perfil.png';
import logo from './logo.png';
//import { responsivePropType } from 'react-bootstrap/esm/createUtilityClasses';

function ListaTramites({cliente}) {
  console.log("111 lista de tramites") 
  let lista = JSON.parse(cliente.ListaTramites)
  console.log(lista) 
  return (
    lista.map((tramite) => {
      return (
        <div className='col-3'>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{tramite.Nombre}</h5>
              <p className="card-text">{tramite.Descripción}</p>
              <button className="btn btn-primary">Ver información</button> <button className="btn btn-primary">Editar</button>
            </div>
          </div>
        </div>
      )
    })
  )
}
function uploadFile() {
 
   const fileInput = document.getElementById('fileInput');
  
  
   const file = fileInput.files[0];

   if (file) {
      const formData = new FormData();
      formData.append('file', file);


      const xhr = new XMLHttpRequest();


      xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
              if (xhr.status === 200) {
              
                  document.getElementById('status').innerHTML = 'File uploaded successfully.';
              } else {
          
                  document.getElementById('status').innerHTML = 'Error: ' + xhr.statusText;
              }
          }
      };


      xhr.open('POST', '/your-upload-endpoint', true);

      xhr.send(formData);
  } else {

      document.getElementById('status').innerHTML = 'Please select a file to upload.';
   
  }
}
function ListaDeClientes({clientes}) {
  return (
    clientes.map((c) => {
      return (
        <div>
          <h4>{c.nombre}</h4>
          <hr className='separadorTramites'></hr>
          <div className='container'>
            <div className='row'>
              <ListaTramites cliente={c} />
            </div>
          </div>
        </div>
      )
    })
  )
}


function AdministradorDeDocumentos() {

  const [clientes, setClientes] = useState([])
  const [isLoading, setIsLoading] = useState(true);



  useEffect(() => {

    fetch("http://localhost:5000/gestores/clientes/1")
      .then((response) => response.json())
      .then((clienteJson) => {
        console.log("cliente", clienteJson)
        setClientes(clienteJson)
        setIsLoading(false)
      });
  }, []);
  return (
    <div className="Contenedor-Mayor">
      <nav className='navbar bg-body-tertiary border-header-top'>
        <div className='container-fluid Padre'>
          <img className='navbar-brand logo' src={logo} alt="New Life" width="30" height="24" />
          <ul className='arreglarbotones'>
            <li className="nav-item border izquierda">
              <a className='nav-link active' aria-current="page" href="sdfs.html">Iniciar sesión</a>
            </li>
            <li className="nav-item border izquierda">
              <a className='nav-link active' aria-current="page" href="sdfsdf.html" >Registrarse</a>
            </li>
          </ul>
          <div>
            <img src={profileImage} alt="Foto de perfil" className="profile-image" />
          </div>
        </div>
      </nav>

      <br className='separador'></br>
      <div className="tramites">
        <h2> Lista de Tramites </h2>
        <hr></hr>
        <button type="button" className='btn btn-light derecha border botonesDeAgregacion'> + Agregar Tramite </button>
        <button type="button" className='btn btn-light derecha border botonesDeAgregacion'> + Agregar Cliente </button> <br /><br />
      </div>

      <input type="file" id="fileInput"/>
    <button onclick="uploadFile()">Subir Archivo</button>
    <div id="status"></div>

      {

        (!isLoading && <ListaDeClientes clientes={clientes} />)
      }
    </div>


  );
}

export default AdministradorDeDocumentos;