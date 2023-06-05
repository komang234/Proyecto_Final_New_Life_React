import './index.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import profileImage from './perfil.png';
import gestorImage from './gestor-image.jpg';
import logo from './logo.png';
import edificio from './building.svg'


function HubSuperior(){
return (
<div className="main-screen">
        <nav className='navbar bg-body-tertiary'>
        <div className='container-fluid'>
        <img className='navbar-brand logo' src={logo} alt="New Life" width="30" height="24"/>
        <ul class="navbar-nav">
        <button className="login-button nav-item">Iniciar sesión</button>
        <button className="register-button nav-item">Registrarse</button>
        </ul>
        <div>
        <img src={profileImage} alt="Foto de perfil" className="profile-image" />
        </div>
        </div>
        </nav>
        
        
        
        <div className="gestor">
        <img src={gestorImage} alt="Imagen de gestor" className="gestor-image" />
        </div>
        <h1 className='center-name'> <u>Sergio Pomaroli</u></h1>
        <div className="center-buttons">
        <button className="reviews-button">Reseñas</button>
        <button className="faq-button">Preguntas frecuentes</button>
        <button className="citizenships-button"> Ciudadanias</button>
        <img className="faq-button" src={edificio} alt="Ciudadanias"/>
        </div>

        <div className="description">
        <span className='border border-dark'>
          Gestor con 30 años de experiencia en el ambiente laboral. Especialista en las ciudadanías portuguesa, italiana,
          polaca, y española. Poseo contactos en las embajadas y consulados de estos países. Aviso todos los detalles del
          trámite.
        </span>
      </div>
      
    </div>
);


}

export default HubSuperior;