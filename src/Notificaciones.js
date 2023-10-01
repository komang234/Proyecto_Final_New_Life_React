import './index.css';
import './App.css';
import React from 'react';
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import logo from './logo.png';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import profileImage from './perfil.png';
import { ActionTypes, useContextState } from "./contextState";

function Notificaciones() {
    const { contextState, setContextState } = useContextState();
    const [isLoading, setIsLoading] = useState(true);
    const [notificaciones, setNotificaciones] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/notificaciones/${contextState.login.id}`)
            .then((response) => response.json())
            .then((gestorJson) => {
                console.log("gestor", gestorJson)
                setPreguntas(gestorJson)
                setContextState({ newValue: false, type: "SET_LOADING" });
            });
    }, []);

    function ListaDeNotificaciones({ notificaciones }) {
        return (
            notificaciones.map((n) => {
                return(
                <div className='item'>
                    <p>{n.descripcion}</p>
                </div>
                )
            }
            )
        )

    };

    return contextState.login ? (
        <div className="Contenedor-Mayor">
            <nav className='navbar bg-body-tertiary border-header-top'>
                <div className='container-fluid Padre'>
                    <img className='navbar-brand logo' src={logo} alt="New Life" width="30" height="24" />
                    <div>
                        {!isLoading && !contextState.login === undefined &&
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
                {

                    (!isLoading && <ListaDeNotificaciones notificaciones={notificaciones} />)
                }
            </div>
            <br />
        </div>
    ) : (
        <div className="Contenedor-Mayor">
            <div className='contenedorAlerta'>
                <p className='alerta'>  Atención! No se le permite usar la pagina debido a que no ha iniciado sesión. Vaya a la página principal para hacerlo.</p>
            </div>
        </div>  
    );

}
export default Notificaciones;