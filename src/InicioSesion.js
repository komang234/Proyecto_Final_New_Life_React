import './index.css';
import './App.css';
import React from 'react';
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import profileImage from './perfil.png';
import logo from './logo.png';
import { Link } from 'react-router-dom';

function InicioSesion() {

    const [clientes, setClientes] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    return (

        
        <div className="Contenedor-Mayor">
        <nav className='navbar bg-body-tertiary border-header-top'>
        <div className='container-fluid Padre'>
        <img className='navbar-brand logo' src={logo} alt="New Life" width="30" height="24"/>
        <ul className='arreglarbotones'>
        </ul>
        </div>
        </nav>
    
    
    <div className="centro">
   
    </div>
    <h2 className='center-name'>Iniciar Sesión</h2>
    <div className="center-buttons">

    <form> 
            Escribe tu email: <input className='' type='text'name='Email'/> <br/><br/>
            Escribe tu contraseña: <input className='' type='text'name='Contraseña'/> <br/><br/>
             
          </form>
 
          
    
    </div>
    <h6 className='center-name'>Todavia no tienes una cuenta hecha?</h6><h6 className='center-name'><Link to="/crearCuenta"><font color="lightblue">Crea una.</font> </Link></h6>
    <br/>
    <h3 className='center-name'></h3>
      <div className='Padre mb-3'>
        <form> <br/>
          <input className='centrarElementos btn btn-light border border-dark' type='submit' value='Enviar'/> 
        </form>
      </div>
      <br/>
    </div>
    );
    
    

}

export default InicioSesion;
