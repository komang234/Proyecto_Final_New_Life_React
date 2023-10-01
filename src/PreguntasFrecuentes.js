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

function PreguntasFrecuentes() {
    const { contextState, setContextState } = useContextState();
    const [isLoading, setIsLoading] = useState(true);
    const [preguntas, setPreguntas] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/preguntasFrecuentes/1")
            .then((response) => response.json())
            .then((gestorJson) => {
                console.log("gestor", gestorJson)
                setPreguntas(gestorJson[0])
                setIsLoading(false)
            });
    }, []);

    function ListaDePreguntas({ preguntas }) {
        return (
            preguntas.map((p) => {
                return(
                <div className='item'>
                    <h3>{p.titulo}</h3>
                    <hr />
                    <p>{p.descripcion}</p>
                </div>
                )
            }
            )
        )

    };

    return (
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

                    (!isLoading && <ListaDePreguntas preguntas={preguntas} />)
                }
            </div>
            <br />
        </div>
    );

}
export default PreguntasFrecuentes;