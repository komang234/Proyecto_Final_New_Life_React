import './index.css';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import profileImage from './perfil.png';
import logo from './logo.png';

function EditorDeTramites(){

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
        
        
        
        <h3 className='center-name'>Editor de Tramite</h3>
        <div className="center-buttons">
        <form> <br/>
            Nombre del tramite: <input className='' type='text'name='Nombre'/> <br/><br/>
            Descripción del tramite: <input className='' type='text'name='Descripción'/> <br/><br/>
             
          </form>
        
        
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

export default EditorDeTramites;
