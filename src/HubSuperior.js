import './index.css';
import './App.css';
import React from 'react';
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import profileImage from './perfil.png';
import logo from './logo.png';
import edificio from './building.svg'
import pregunta from './question-square-fill.svg'
import reseñas from './pencil-square.svg'

function HubSuperior(){
  const [gestor, setGestor] =  useState([])

  const [isLoading, setIsLoading] = useState(true);



  /*useEffect(() => {

      fetch("http://localhost:5000/gestores/1")

        .then((response) => response.json())

        .then((gestorJson) => {

          console.log("gestor",gestorJson)

          setGestor(gestorJson[0])

          setIsLoading(false)

        });

    }, []);*/
  

return (
<div className="Contenedor-Mayor">
        <nav className='navbar bg-body-tertiary border-header-top'>
        <div className='container-fluid Padre'>
        <img className='navbar-brand logo' src={logo} alt="New Life" width="30" height="24"/>
        <ul className='arreglarbotones'>
        </ul>
        <div>
        
        <img src={profileImage} alt="Foto de perfil" className="profile-image" />
        </div>
        </div>
        </nav>
        
        
        
        <div className="gestor">
        {!isLoading &&
        <img src={gestor.FotoPerfil} alt="Imagen de gestor" className="gestor-image" />
        }
        </div>
        <h1 className='center-name'> <u>{gestor.Nombre}</u></h1>
        <h3 className='center-name'>Editor de Tramite</h3>
        <div className="center-buttons">
        <form> <br/>
            Nombre del tramite: <input className='' type='text'name='Nombre'/> <br/><br/>
            Descripción del tramite: <input className='' type='text'name='Descripción'/> <br/><br/>
             
          </form>
        
        
        </div>

        <div className="Padre">
        <span className='border border-dark description'>
          {gestor.Descripción}
        </span>
      </div>
      <br/>
      <h3 className='center-name'><u>Documentos:</u></h3>
        <div className='Padre mb-3'>
          <form> <br/>
            <input className='centrarElementos formularioTexto form-text' type='text' id='peticion' name='peticion'/> <br/><br/>
            Agregar estado del tramite: <input className='' type='text'name='Estado Tramites'/> <br/><br/>
            <a href="AdministradorDeDocumentos.js"><input className='centrarElementos btn btn-light border border-dark' type='submit' value='Lista de Tramites' /></a> <br/><br/>
            <input className='centrarElementos btn btn-light border border-dark' type='submit' value='Guardar cambios' /> 
          </form>
        </div>
        <br/>
    </div>
);


}

export default HubSuperior;
