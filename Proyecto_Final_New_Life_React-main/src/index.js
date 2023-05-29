import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import profileImage from './profile.jpg';
import gestorImage from './gestor-image.jpg';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const MainScreen = () => {
  return (
    <div className="main-screen">
        <div className="top-left-buttons">
        <button className="login-button">Iniciar sesión</button>
        <button className="register-button">Registrarse</button>
        </div>
        
        <div className="top-right-profile">
        <img src={profileImage} alt="Foto de perfil" className="profile-image" />
        </div>

        <div className="gestor">
        <img src={headerImage} alt="Imagen de gestor" className="gestor-image" />
        </div>

        <div className="center-buttons">
        <button className="reviews-button">Reseñas</button>
        <button className="faq-button">Preguntas frecuentes</button>
        <button className="citizenships-button">Ciudadanías</button>
        </div>

        <div className="description">
        <p>
          Sergio Pomaroli
          
          Gestor con 30 años de experiencia en el ambiente laboral. Especialista en las ciudadanías portuguesa, italiana,
          polaca, y española. Poseo contactos en las embajadas y consulados de estos países. Aviso todos los detalles del
          trámite.
        </p>
      </div>
      
    </div>
  );
};

export default MainScreen;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
 /*
console.log("Hago consulta-axios"); 
(async()=>{ 
  console.log("Hago async consulta-axios")
  await axios({ 
  method:'get',
  url:'http://localhost:5000/', 
}) 
.then(res=>{ console.log("res",res) 
valores=document.getElementById("valores"); 
res.data.forEach(actual=>{ 

}) }) 
.catch(err=>console.error("error",err)) 
console.log("Fin async consulta-axios") })(); 
console.log("Fin consulta-axios") */