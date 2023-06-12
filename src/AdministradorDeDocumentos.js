import './index.css';
import './App.css';
import React from 'react';
//import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import profileImage from './perfil.png';
import logo from './logo.png';


function AdministradorDeDocumentos(){
 /*
  const [gestor, setGestor] =  useState([])
  const [documento, setDocumento] =  useState([])
  const [isLoading, setIsLoading] = useState(true);



  useEffect(() => {

      fetch("http://localhost:5000/gestores/1")

        .then((response) => response.json())

        .then((gestorJson) => {

          console.log("gestor",gestorJson)

          setGestor(gestorJson[0])

          setIsLoading(false)

        });

    }, []);

    useEffect(() => {

        fetch("http://localhost:5000/documentos/1")
  
          .then((response) => response.json())
  
          .then((documentoJson) => {
  
            console.log("documento",documentoJson)
  
            setDocumento(documentoJson[0])
  
            setIsLoading(false)
  
          });
  
      }, []);
      */
    return(
        <div className="documents-page">
        <nav className='navbar bg-body-tertiary border-header-top'>
        <div className='container-fluid'>
        <img className='navbar-brand logo' src={logo} alt="New Life" width="30" height="24"/>
        <ul className='arreglarbotones'>
        <li className="nav-item border">
        <a className='nav-link active' aria-current="page" href="sdfs.html">Iniciar sesión</a>
          </li>
        <li className="nav-item border">
          <a className='nav-link active' aria-current="page" href="sdfsdf.html">Registrarse</a>
        </li>
        </ul>
        <div>
        
        <img src={profileImage} alt="Foto de perfil" className="profile-image" />
        </div>
        </div>
        </nav>
        
        <br className='separador'></br>
        <div className="documentos"> 
        <h2> Lista de Tramites </h2>
        <hr></hr>
        <button type="button" className='btn btn-light derecha border botonesDeAgregacion'> + Agregar Tramite </button>
        <button type="button" className='btn btn-light derecha border botonesDeAgregacion'> + Agregar Cliente </button>
        </div>


        </div>
    );
}

export default AdministradorDeDocumentos;