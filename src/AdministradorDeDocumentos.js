import './index.css';
import './App.css';
import React from 'react';
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import profileImage from './perfil.png';
import logo from './logo.png';

function AdministradorDeDocumentos(){
/* 
  const [gestor, setGestor] =  useState([])*/
  const [tramites, setTramite] =  useState([])
  const [isLoading, setIsLoading] = useState(true);



  useEffect(() => {
      /*
      fetch("http://localhost:5000/gestores/1")

        .then((response) => response.json())

        .then((gestorJson) => {

          console.log("gestor",gestorJson)

          setGestor(gestorJson[0])

          setIsLoading(false)

        });*/
        console.log("XXXXXXXXXXXXXXXXXXX")
        fetch("http://localhost:5000/tramites/1")
  
          .then((response) => response.json())
  
          .then((tramiteJson) => {
  
            console.log("tramites",tramiteJson)
  
            setTramite(tramiteJson[0])
  
            setIsLoading(false)
  
          });
          
    }, []);
      
    return(
        <div className="Contenedor-Mayor">
        <nav className='navbar bg-body-tertiary border-header-top'>
        <div className='container-fluid Padre'>
        <img className='navbar-brand logo' src={logo} alt="New Life" width="30" height="24"/>
        <ul className='arreglarbotones'>
        <nav>
            <ul>
              <li class="nav-item border izquierda">
                <a class='nav-link active' aria-current="page" href="sdfs.html">Iniciar sesión</a> 
              </li>
              <li className="nav-item border izquierda">
                     <a className='nav-link active' aria-current="page" href="sdfsdf.html" >Registrarse</a>
                 </li>
            </ul>
          </nav>
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
        <button type="button" className='btn btn-light derecha border botonesDeAgregacion'> + Agregar Cliente </button> <br/><br/>
        { 
          (!isLoading && tramites.forEach( () => {
           <div>
            <h4>Jose Augusto Fernandez</h4>
            <hr className='separadorTramites'></hr>
            </div>
          }))
        }
        <div> 
          <h4>Jose Augusto Fernandez</h4>
          <hr className='separadorTramites'></hr>
          <div className='container'>
            <div className='row'>
                <div className='col-3'>
                  <div className='card'>
                   <img src={profileImage} className='card-img-top imagenTarjeta' alt="..."/>
                    <div className='card-body'>
                      <h5 className='card-title'>Card title</h5>
                      <button className='btn btn-light'>Editar</button>
                    </div>
                  </div>
                </div>
                <div className='col-3'>
                  <div className='card'>
                   <img src={profileImage} className='card-img-top imagenTarjeta' alt="..."/>
                    <div className='card-body'>
                      <h5 className='card-title'>Card title</h5>
                      <button className='btn btn-light'>Editar</button>
                    </div>
                  </div>
                </div>
                <div className='col-3'>
                  <div className='card'>
                   <img src={profileImage} className='card-img-top imagenTarjeta' alt="..."/>
                    <div className='card-body'>
                      <h5 className='card-title'>Card title</h5>
                      <button className='btn btn-light'>Editar</button>
                    </div>
                  </div>
                </div>
                <div className='col-3'>
                  <div className='card'>
                   <img src={profileImage} className='card-img-top imagenTarjeta' alt="..."/>
                    <div className='card-body'>
                      <h5 className='card-title'>Card title</h5>
                      <button href="#" className='btn btn-light'>Editar</button>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          

        </div>
        </div>
        
        </div>
    );
}

export default AdministradorDeDocumentos;