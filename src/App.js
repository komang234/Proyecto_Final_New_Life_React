

//import ModificarTramite from './ModificarTramite';
import './App.css';
//import AdministradorDeDocumentos from './AdministradorDeDocumentos';
import HubSuperior from './HubSuperior';
//import HubSuperior from './HubSuperior.js';



function App() {
  return (
    <HubSuperior/>
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