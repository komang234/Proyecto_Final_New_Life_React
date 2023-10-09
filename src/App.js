
import AdministradorDeDocumentos from './AdministradorDeDocumentos.js';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditorDeTramites from './EditorDeTramites'
import CrearCuenta from './CrearCuenta';
import HubSuperior from './HubSuperior.js';
import InicioSesion from './InicioSesion.js';

import { ContextProvider } from './contextState';
import PreguntasFrecuentes from './PreguntasFrecuentes.js';

function App() {
  return (
    <ContextProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/editorTramites" element={<EditorDeTramites/>}></Route>
      <Route path="/crearCuenta" element={<CrearCuenta/>}></Route>
	    <Route index element={<InicioSesion />}></Route>
      <Route path="/gestor" element={<HubSuperior />}></Route>
      <Route path="/tramite" element={<AdministradorDeDocumentos />}></Route>
      <Route path='/preguntas' element={<PreguntasFrecuentes/>}></Route>
    </Routes>
    </BrowserRouter>
    </ContextProvider>
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
