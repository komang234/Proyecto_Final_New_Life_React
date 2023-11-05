import './index.css';
import './App.css';
import React from 'react';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import profileImage from './perfil.png';
import logo from './logo.png';
import { useContextState } from "./contextState";
//import { responsivePropType } from 'react-bootstrap/esm/createUtilityClasses';




function AdministradorDeDocumentos() {

  const { contextState, setContextState } = useContextState();
  const [clientes, setClientes] = useState([])
  const [isLoading, setIsLoading] = useState(true);



  useEffect(() => {

    fetch("http://localhost:5000/gestores/clientes/1")
      .then((response) => response.json())
      .then((clienteJson) => {
        console.log("cliente", clienteJson)
        setClientes(clienteJson)
        setContextState({ newValue: false, type: "SET_LOADING" });
      });
  }, []);

  function ListaTramites(cliente) {


    if (cliente !== undefined) {
      let lista = JSON.parse(cliente.cliente)
      console.log(lista)
      return (
        lista.map((tramite) => {
          return (
            <div className='col-3'>
              <div className="card">
                <img class="card-img-top" src={tramite.Imagen} alt="Imagen del tramite" />
                <div className="card-body">
                  <h5 className="card-title">{tramite.Nombre}</h5>
                  <p className="card-text">{tramite.Descripción}</p>
                  <Link to={`/detalleTramite/${tramite.Id}`}><button className="btn btn-primary">Ver información</button></Link> <Link to="/editorTramites"><button className="btn btn-primary">Editar trámite</button></Link>
                </div>
              </div>
            </div>
          )
        })
      )
    }
  }


  function ListaDeClientes2(login){
    console.log(login.login.Id)
    return (
      clientes.map((c) => {
        if (c.ListaTramites !== null && c.id === login.login.Id) {
          (console.log("Entro"))
          return (
            <div>
                  <div className='row'>
                  {console.log("listaaaaaaa", c.ListaTramites)}
                  <ListaTramites cliente={c.ListaTramites} />
                  </div>
            </div>
          )
        }
      })

    )
  }

  const ListaDeClientes = () => {
    console.log("Lista Clientes")
    return (
      clientes.map((c) => {
        if (c.ListaTramites !== null) {
          return (
            <div>
              <h4>{c.nombre}</h4>
              <hr className='separadorTramites'></hr>
              <div className='container'>
                <div className='row'>
                  {console.log("listaaaaaaa", c.ListaTramites)}
                  <ListaTramites cliente={c.ListaTramites} />
                </div>
              </div>
            </div>
          )
        }
      })

    )
  }


  return contextState.login ? (

    <div className="Contenedor-Mayor">

      <nav className='navbar bg-body-tertiary border-header-top'>
        <div className='container-fluid Padre'>
          <img className='navbar-brand logo' src={logo} alt="New Life" width="30" height="24" />
          <div>
            <img src={contextState.login.FotoPerfil} alt="Foto de perfil" className="profile-image" />
          </div>
        </div>
      </nav>
      {contextState.login.Descripción &&
        <>
          <br className='separador'></br>
          <div className="tramites">
            <h2> Lista de Tramites </h2>
            <hr></hr>
            <button type="button" className='btn btn-light derecha border botonesDeAgregacion'> + Agregar Tramite </button>
            <button type="button" className='btn btn-light derecha border botonesDeAgregacion'> + Agregar Cliente </button> <br /><br />
          </div>

          {
            (isLoading !== undefined && clientes !== undefined && <ListaDeClientes />)
          }
        </>
      }
      {!contextState.login.Descripción &&
        <>
          <br className='separador'></br>
          <div className="tramites">
            <h2> Lista de Tramites </h2>
            <hr></hr>
          </div>
          <div>
              <h4>Tus Tramites</h4>
              <hr className='separadorTramites'></hr>
              <div className='container'>
                  <ListaDeClientes2 login={contextState.login} />
              </div>
            </div>
        </>
      }
    </div>


  ) : (
    <div className="Contenedor-Mayor">
      <div className='contenedorAlerta'>
        <p className='alerta'>  Atención! No se le permite usar la pagina debido a que no ha iniciado sesión. Vaya a la página principal para hacerlo.</p>
      </div>
    </div>
  );
}

export default AdministradorDeDocumentos;