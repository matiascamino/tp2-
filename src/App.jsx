import Lista from './Lista';
import './App.css';
import { useState } from 'react';

function App() {
  const  [lista, setLista]= useState ([])
  const [nuevoItem, setNuevoItem] = useState('');

  const agregarItem = () => {
    if (nuevoItem.trim() === '') return;
    setLista ([...lista, nuevoItem]);
    setNuevoItem('');

  };


  return (
    <div className="App">
      <h1>Lista de de compras</h1>
    <input
    type="text"
    placeholder='agregar item...'
    value={nuevoItem}
    onChange={(e) => setNuevoItem (e.target.value)}

    />
    <button onClick={agregarItem}>Agregar</button>

      <Lista lista={lista} />
    </div>
  );
}
export default App;
// This code imports the Lista component and uses it to display a list of items.
// The Lista component takes a prop called lista, which is an array of items.
// It maps over the array and renders each item inside a div with the class "item".
// The App component imports the Lista component and passes an array of items to it.