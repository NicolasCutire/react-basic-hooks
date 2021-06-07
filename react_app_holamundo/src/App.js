import logo from './logo.svg';
import React, { useRef, useState } from 'react'
import './App.css';
const style = {
  table: {
    borderColapse: "colapse"
  },
  tableCell: {
    border: "1px solid gray",
    margin: 0,
    padding: "5px 10px",
    width: "max-content",
    minWidth: "150px"
  },
  form: {
    container: {
      padding: "20px",
      border: "1px solid #F0F8FF",
      borderRadius: "15px",
      width: "max-content",
      marginBottom: "40px"
    },
    inputs: {
      marginBottom: "5px"
    },
    submitBtn: {
      marginTop: "10px",
      padding: "10px 15px",
      border: "none",
      backgroundColor: "lightseagreen",
      fontSize: "14px",
      borderRadius: "5px"
    }
  }
};


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
function FormBook({autores}){
  const titleRef = useRef(null);
  const yearRef = useRef(null);
  const autorRef = useRef(null);
  function addBook(e){ 
    e.preventDefault();
    const title = titleRef.current.value;
    const year = yearRef.current.value;
    const autor = autorRef.current.value;
    const book = {title,year,autor}
    console.log(book)  

  }
  return(
    <form onSubmit={addBook} style={style.form.container}>
      <label>Titulo</label>
      <br />
      <input
        style={style.form.inputs}
        //className="userFirstname"
        name="title"
        type="text"
        ref={titleRef}
      />
      <br />

      <label>Year</label>
      <br />
      <input
        style={style.form.inputs}
        //className="userLastname"
        name="year"
        type="text"
        ref={yearRef}
      />
      <br />
      <labe>Autor</labe>
      <br />
      <select
       style={style.form.inputs}
       name ="select"
       ref = {autorRef}
       >
        {autores.map( (a)=>
          <option value={a.nombre}>{a.nombre}</option>    
        )}        
      </select>

      <br />
      <input
        style={style.form.submitBtn}
        //className="submitPhone"
        type="submit"
        value="Add book"
      />
      
    </form>
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
  const Autores = [
    {nombre: 'nikko',edad: 19,libros:[]},
    {nombre: 'Willy',edad: 8,libros:[]},
  ]
  return (
    <>
    <Autor nombre = "Nikko" edad = {25} libros = {LibrosNikko}/>
    <Counter/>
    <FormBook autores = {Autores}/>
    </>
  );
}

export default App
