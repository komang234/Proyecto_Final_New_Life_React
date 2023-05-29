import './index.css';
import './App.css';
import logo from './logo.svg';
import perfil from './perfil.png'

function HubSuperior(){
return (
<header>
    <nav className="navbar navbar-light bg-light">
    <img src={logo} className='izquierda' width="30" height="30" alt="" />
    <img src={perfil} className='derecha izquierda' width="30" height="30" alt="" />
    <button type="button" className='btn btn-outline-primary derecha'>Primary</button>
    <button type="button" className='btn btn-outline-primary derecha'>Primary</button>

</nav>
</header>
);


}

export default HubSuperior;