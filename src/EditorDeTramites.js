import './index.css';
import './App.css';
import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import profileImage from './perfil.png';
import logo from './logo.png';

function EditorDeTramites() {
  const [etiqueta, setEtiqueta] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [tramiteData, setTramiteData] = useState({
    nombre: "",
    descripcion: "",
    estadoTramites: "",
    archivos: [],
  });

  useEffect(() => {
    fetch("http://localhost:5000/etiquetas")
      .then((response) => response.json())
      .then((etiquetaJson) => {
        console.log("etiqueta", etiquetaJson);
        setEtiqueta(etiquetaJson);
        setIsLoading(false);
      });
  }, []);

  function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (file) {
      const nuevosArchivos = [...tramiteData.archivos, file];
      setTramiteData({ ...tramiteData, archivos: nuevosArchivos });

      document.getElementById('status').innerHTML = 'File uploaded successfully.';
    } else {
      document.getElementById('status').innerHTML = 'Please select a file to upload.';
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTramiteData({ ...tramiteData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del trámite:", tramiteData);
  };

  return (
    <div className="Contenedor-Mayor">
      <nav className='navbar bg-body-tertiary border-header-top'>
        <div className='container-fluid Padre'>
          <img className='navbar-brand logo' src={logo} alt="New Life" width="30" height="24" />
          <ul className='arreglarbotones'>
          </ul>
          <div>
            <img src={profileImage} alt="Foto de perfil" className="profile-image" />
          </div>
        </div>
      </nav>

      <h3 className='center-name'>Editor de Trámite</h3>
      <div className="center-buttons">
        <form onSubmit={handleSubmit}>
          <br />
          Nombre del trámite:
          <input
            className=''
            type='text'
            name='nombre'
            value={tramiteData.nombre}
            onChange={handleInputChange}
          />
          <br /><br />
          Descripción del trámite:
          <input
            className=''
            type='text'
            name='descripcion'
            value={tramiteData.descripcion}
            onChange={handleInputChange}
          />
          <br /><br />
          Agregar nuevo estado del trámite:
          <input
            className=''
            type='text'
            name='estadoTramites'
            value={tramiteData.estadoTramites}
            onChange={handleInputChange}
          />
          <br /><br />
          <input type="file" id="fileInput" />
          <button type="button" onClick={uploadFile}>Subir Archivo</button>
          <div id="status"></div>

          {!isLoading && (
            <a href="AdministradorDeDocumentos.js"><input className='centrarElementos btn btn-light border border-dark' type='submit' value='Lista de Trámites' /></a>
          )}
          <br /><br />
          <input className='centrarElementos btn btn-light border border-dark' type='submit' value='Guardar cambios' />
          <br className='separador' />
          <div className="tramites">
            <hr />
          </div>

          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Estados de trámite ya existentes
            </button>
            <ul className="dropdown-menu">
              <li><button className="dropdown-item" type="button">Action</button></li>
              <li><button className="dropdown-item" type="button">Another action</button></li>
              <li><button className="dropdown-item" type="button">Something else here</button></li>
            </ul>
          </div>
          <br /><br />
          <div>
            <h3>Archivos Subidos:</h3>
            <ul>
              {tramiteData.archivos.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          </div>
        </form>
      </div>
      <br />
    </div>
  );
}

export default EditorDeTramites;
