import './index.css';
import './App.css';
import React from 'react';
import { useEffect, useState, useContext } from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import profileImage from './perfil.png';
import logo from './logo.png';
import edificio from './building.svg'
import pregunta from './question-square-fill.svg'
import reseñas from './pencil-square.svg'
import { ActionTypes, useContextState } from "./contextState";

function HubSuperior() {
  const { contextState, setContextState } = useContextState();
  const [gestor, setGestor] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [cliente, setCliente] = useState([])
  useEffect(() => {
    fetch("http://localhost:1433/gestores/1")
      .then((response) => response.json())
      .then((gestorJson) => {
        console.log("gestor", gestorJson)
        setGestor(gestorJson[0])
        setIsLoading(false)
      });
  }, []);
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setCliente(user)
    }
  }, []);
  return (
    <div className="Contenedor-Mayor">
      <nav className='navbar bg-body-tertiary border-header-top'>
        <div className='container-fluid Padre'>
          <img className='navbar-brand logo' src={logo} alt="New Life" width="30" height="24" />
          <div>
            {!isLoading && !contextState.login === undefined  &&
            <>
            <ul className='arreglarbotones'>
            <Link to="/crearCuenta"><li className="nav-item border">
                <a className='nav-link active' aria-current="page" href="sdfs.html">Iniciar sesión</a>
              </li></Link>
            <Link to="/inicioSesion">
              <li className="nav-item border">
                <a className='nav-link active' aria-current="page" href="sdfsdf.html">Registrarse</a>
              </li></Link>
            </ul>
            <div>
            <img src={profileImage} alt="Foto de perfil" className="profile-image" />
            </div>
            </>
            }
            {!isLoading && contextState.login &&
              <>
              <div>
              <img src={contextState.login.FotoPerfil} alt="Imagen de gestor" className="gestor-image" />
              </div>
              </>
            }
          </div>
        </div>
      </nav>



      <div className="gestor">
        {!isLoading &&
          <img src={gestor.FotoPerfil} alt="Imagen de gestor" className="gestor-image" />
        }
      </div>
      <h1 className='center-name'> <u>{gestor.Nombre}</u></h1>
      <div className="center-buttons">
        <a className="reviews-button" href="sdfsdf.html"><img className="faq-button logos-botones" src={reseñas} alt="Reseñas" /></a>
        <a className="faq-button" href="sdfsdf.html"><img className="faq-button logos-botones" src={pregunta} alt="Preguntas Frecuentes" /></a>
        <a className="citizenships-button" href="sdfsdf.html"><img className="faq-button logos-botones" src={edificio} alt="Ciudadanias" /></a>

      </div>
      <div className="Padre">
        <span className='border border-dark description'>
          {gestor.Descripción}
        </span>
      </div>
      <br />
      <h3 className='center-name'><u>Peticion:</u></h3>
      <div className='Padre mb-3'>
        <form> <br />
          <input className='centrarElementos formularioTexto form-text' type='text' id='peticion' name='peticion' /> <br /><br />
          <input className='centrarElementos btn btn-light border border-dark' type='submit' value='Submit' />
        </form>
      </div>
      <br />
    </div>
  );

}
export default HubSuperior;