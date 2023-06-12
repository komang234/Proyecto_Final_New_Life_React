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



  useEffect(() => {

      fetch("http://localhost:5000/gestores/1")

        .then((response) => response.json())

        .then((gestorJson) => {

          console.log("gestor",gestorJson)

          setGestor(gestorJson[0])

          setIsLoading(false)

        });

    }, []);
  

return (
<div className="Contenedor-Mayor">
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
        
        
        
        <div className="gestor">
        {!isLoading &&
        <img src={gestor.FotoPerfil} alt="Imagen de gestor" className="gestor-image" />
        }
        </div>
        <h1 className='center-name'> <u>{gestor.Nombre}</u></h1>
        <div className="center-buttons">
        <a className="reviews-button" href="sdfsdf.html"><img className="faq-button logos-botones" src={reseñas} alt="Reseñas"/></a>
        <a className="faq-button" href="sdfsdf.html"><img className="faq-button logos-botones" src={pregunta} alt="Preguntas Frecuentes"/></a>
        <a className="citizenships-button" href="sdfsdf.html"><img className="faq-button logos-botones" src={edificio} alt="Ciudadanias"/></a>
        
        </div>

        <div className="description">
        <span className='border border-dark'>
          {gestor.Descripción}
        </span>
      </div>
      <br></br>
    </div>
);


}

export default HubSuperior;