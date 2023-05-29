import logo from './logo.svg';
import './App.css';
import './HubSuperior.js'
import HubSuperior from './HubSuperior.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    <HubSuperior />
    </div>
  );
}

export default App;
 /*
console.log("Hagoconsulta-axios"); 
(async()=>{ 
  console.log("Hagoasyncconsulta-axios")
  await axios({ 
  method:'get',
  url:'http://localhost:5000/', 
}) 
.then(res=>{ console.log("res",res) 
valores=document.getElementById("valores"); 
res.data.forEach(actual=>{ 
  if(actual.compra&&actual.venta)
  { 
    dolar=document.createElement("li") 
    dolar.innerHTML=`Nombre:${actual.nombre}-compra: ${actual.compra}-venta:${actual.venta}` 
    valores.appendChild(dolar) 
  } 
}) }) 
.catch(err=>console.error("error",err)) 
console.log("Finasyncconsulta-axios") })(); 
console.log("Finconsulta-axios")*/