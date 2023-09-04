import './index.css';
import './App.css';
import React from 'react';
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import logo from './logo.png';
import { Link } from "react-router-dom";

function CrearCuenta() {
    
    const [userInfo, setUserInfo] =  useState([])
    const [cliente, setCliente] = useState([])
    
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre: (userInfo.nombre) , dni: (userInfo.dni), email: userInfo.email, psw: userInfo.contraseña, foto: userInfo.foto})
    };

     const handleSubmit = (e) => {
        e.preventDefault();
        const datos = new FormData(e.target)
        const nuevoCliente = {
            nombre: datos.get("Nombre"),
            email: datos.get("Email"),
            contraseña: datos.get("Contraseña"),
            dni: datos.get("DNI"),
            fotoPerfil: datos.get("Link Foto"),
        }
        setUserInfo(nuevoCliente)
        if(userInfo !== undefined){
            window.localStorage.setItem(
              'loggedNoteAppUser', JSON.stringify(userInfo)
            )
          }
    }
    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
        if(loggedUserJSON) {
          const user = JSON.parse(loggedUserJSON)
          setCliente(user)
        } 
      })
    
    useEffect(()=>{
        fetch('http://localhost:5000/clientes', requestOptions)
               .then(response => response.json())
               .then(result => setUserInfo(result));
   },[requestOptions])

   
    
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
    <h2 className='center-name'>Crea tu cuenta</h2>
    <div className="center-buttons">

    <form  onSubmit={handleSubmit()}> 
            Escribe tu nombre y tu apellido: <input className='' type='text'name='Nombre' required/> <br/><br/>
            Escribe tu email: <input className='' type='text'name='Email' required/> <br/><br/>
            Escribe tu contraseña: <input className='' type='text'name='Contraseña' required/> <br/><br/>
            Escribe tu DNI: <input className='' type='text'name='DNI' required/> <br/><br/>
            Agregar Foto de Perfil: <input className='' type='link'name='Link Foto'/> <br/><br/>

            <h6 className='center-name'>¿Ya tienes un cuenta hecha?</h6><h6 className='center-name'> <Link to="/inicioSesion"><font color="lightblue">Inicia Sesion</font></Link> </h6>
             <br/>
             <div className='Padre mb-3'>
             <br/>
               <input className='centrarElementos btn btn-light border border-dark' type='submit' value='Enviar'/> 
              
             </div>
             
          </form>
 
          
    
    </div>
    
      <br/>
    </div>
    );
    
    

}

export default CrearCuenta;