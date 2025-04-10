import Lista from './Lista';
import './App.css';
import { useState } from 'react';


function App() {
  const [lista, setLista] = useState([])// lista es un array y setlista la funcion para modificar ese array
  const [nuevoItem, setNuevoItem] = useState(''); // nuevo item es el texto escrito en el input y useState permite manejar valores dinamicos  

  const agregarItem = () => {
    if (nuevoItem.trim() === '') return; // si el input esta vacio no hace nada, trim elimina los espacio lo cual evita que agregue elementos vacios 
    setLista([...lista, nuevoItem]);// los '...' son spread operator y lo q hace es copiarlos, nuevoitem agrega1 el  nuevo item al final y crea un nuevo array y lo pasa a setlista
    setNuevoItem('');// limpia el input

  };

  const eliminarItem = (index) => {
     const nuevaLista = lista.filter ((_, i) => i!== index);
     setLista (nuevaLista);

  };


  return (
    <div className="App">
      <h1>Lista de de compras</h1>

      <input
        type="text"
        placeholder='agregar item...'
        value={nuevoItem}
        onChange={(e) => setNuevoItem(e.target.value)}

      />
      <button onClick={agregarItem}>Agregar</button>

      <Lista lista={lista} eliminarItem = {eliminarItem} />
    </div>
  );
}
export default App;
