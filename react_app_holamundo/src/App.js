import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';

function Libro({numero,titulo, año }) {
  return (
    <div>    
      <span> {numero}</span>
      <span>{titulo}</span>
      <br></br>
      <span>{año}</span>
      <br></br>
    </div>
  )
}
function Autor({nombre, edad,libros}){
  
  return(
    <div>
      <h1>{nombre}</h1>
      <span>{edad}</span>
      <br/>
      {
        libros.map((libro,idx) => (
          <Libro numero= {idx + 1} titulo = {libro.titulo} año = {libro.año}/>          
        ))
      }
    </div>
  )
}
function Counter(){
  let [count,setcount] = useState(0)
  function agregarConteo(){
    count = count + 1 
    setcount(count)
  }
  function quitarConteo(){
    count = count - 1 
    setcount(count)
  }
  return (
    <div>
      <h1>Conteo Actual</h1>
      <span>{count}</span>
      <br/>
      <button onClick = {agregarConteo}>+</button>
      <button onClick = {quitarConteo}>-</button>
    </div>
  )
}
function App() {
  const LibrosNikko = [
    {
        titulo : '120 dias sodomoa',
        año: 2080
    },
    {
      titulo : 'Las aventuras de la niña mala',
      año: 2080
    },
  ]
  return (
    <>
    <Autor nombre = "Nikko" edad = {25} libros = {LibrosNikko}/>
    <Counter/>
    </>
  );
}

export default App
