import './index.css';
import './App.css';
import React from 'react';
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import logo from './logo.png';
import { Link } from 'react-router-dom';
import axios from 'axios';

function InicioSesion() {

  const [cliente, setCliente] = useState([])
  const [inicio, setLogin] = useState([])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setCliente(user)
    }
  }, [])

  const login = async (cliente) => {
    console.log(cliente)
    axios.get(`http://localhost:5000/clientes?email=${cliente.email}&psw=${cliente.psw}`
    ).then(response => response.data[0])
      .then(res => {
        console.log("res", res)
      })
      .catch(err => console.error("error", err))
    console.log("Finasyncconsulta-axios")
  ();
  console.log("Finconsulta-axios")
  // 
  /// El error esta aca, falta cerrar y ver porque no devuelven bien los datos
  // 
  //console.log(inicio)
}

const handleSubmit = event => {
  console.log('Se guardan los datos')
  event.preventDefault();

  const datos = new FormData(event.target)
  const nuevoCliente = {
    email: datos.get("Email"),
    psw: datos.get("Contrasena"),
  }
  console.log(nuevoCliente)
  setCliente(nuevoCliente)
  console.log(cliente)
  let data = login(cliente)
  console.log(data)
  setLogin(data)
  console.log(inicio)
  if (inicio !== undefined) {
    window.localStorage.setItem(
      'loggedNoteAppUser', JSON.stringify(inicio)
    )
  }
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
