import './index.css';
import './App.css';
import React from 'react';
import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import logo from './logo.png';
import { Link } from 'react-router-dom';
import { ActionTypes, useContextState } from './contextState';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function InicioSesion() {
  const navigate = useNavigate();

  const { contextState, setContextState } = useContextState();

  const [cliente, setCliente] = useState([])

  /*useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setCliente(user)
    }
  }, [])*/

  function verificacion() {
    axios.get(`http://localhost:1433/clientes?email=${cliente.email}&psw=${cliente.psw}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // Conviertes la respuesta a formato JSON
    })
      .then(async (response) => {
        console.log(response.status)
        if(response.status > 300){
          alert(JSON.stringify("error"));
          console.error("error");
          alert("Los datos no son correctos, vuelva a intentarlo");
          setContextState({ newValue: false, type: "SET_LOADING" });
          return;
        }
        const token = await response.json();
        console.log(token);
        setContextState({
          newValue: token,
          type: ActionTypes.setLogin,
        });
        setContextState({ newValue: false, type: "SET_LOADING" });
        navigate('/gestor')
      })
  }

  const handleSubmit = async (event) => {
    console.log('Se guardan los datos')
    event.preventDefault();

    const datos = new FormData(event.target)
    const nuevoCliente = {
      email: datos.get("Email"),
      psw: datos.get("Contrasena"),
    }
    console.log(nuevoCliente)
    setCliente(nuevoCliente)
    setContextState({ newValue: true, type: "SET_LOADING" });
    verificacion()
    /*if (inicio !== undefined) {
      window.localStorage.setItem(
        'loggedNoteAppUser', JSON.stringify(inicio)
      )
    }*/
  }

  return (


    <div className="Contenedor-Mayor">
      <nav className='navbar bg-body-tertiary border-header-top'>
        <div className='container-fluid Padre'>
          <img className='navbar-brand logo' src={logo} alt="New Life" width="30" height="24" />
          <ul className='arreglarbotones'>
          </ul>
        </div>
      </nav>

      {console.log(cliente)}
      <div className="centro">

      </div>
      <h2 className='center-name'>Iniciar Sesión</h2>
      <div className="center-buttons">

        <form onSubmit={handleSubmit}>
          <div>
            Escribe tu email: <input className='' type='text' name='Email' required /> <br /><br />
          </div>
          <div>
            Escribe tu contraseña: <input className='' type='text' name='Contrasena' required /> <br /><br />
          </div>
          <input className='centrarElementos btn btn-light border border-dark' type='submit' value='Enviar' />
        </form>



      </div>
      <h6 className='center-name'>Todavia no tienes una cuenta hecha?</h6><h6 className='center-name'><Link to="/crearCuenta"><font color="lightblue">Crea una.</font> </Link></h6>
      <br />
    </div>
  );



}

export default InicioSesion;
