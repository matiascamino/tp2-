import Lista from './Lista';
import './App.css';
import { useState } from 'react';


function App() {
  const [lista, setLista] = useState([])// lista es un array y setlista la funcion para modificar ese array
  const [nuevoItem, setNuevoItem] = useState(''); // nuevo item es el texto escrito en el input y useState permite manejar valores dinamicos  
  const [editandoIndex, setEditandoIndex] = useState(null);
  const [textoEditado, setTextoEditado] = useState('');
  const [cantidad, setCantidad] = useState(1);
  const [cantidadEditada, setCantidadEditada] = useState(1);

  const agregarItem = () => {
    if (nuevoItem.trim() === '') return;
    const cantidadNumerica = Math.max(1,parseInt(cantidad) || 1); // si el input esta vacio no hace nada, trim elimina los espacio lo cual evita que agregue elementos vacios 
    setLista([...lista, { texto: nuevoItem, cantidad: cantidadNumerica }]);// los '...' son spread operator y lo q hace es copiarlos, nuevoitem agrega1 el  nuevo item al final y crea un nuevo array y lo pasa a setlista
    setNuevoItem('');// limpia el input
    setCantidad(1);// resetea la cantidad a 1


  };

  const eliminarItem = (index) => {
    const nuevaLista = lista.filter((_, i) => i !== index);
    setLista(nuevaLista);

  };

  const editarItem = (index) => {
    setEditandoIndex(index);// guardo el indece q estoy editando aviso que estoy editando un item en particular 
    setTextoEditado(lista[index].texto);// toma el texto actual de ese indice y luego lo puedo usar para rellenar un input 
    setCantidadEditada(lista[index].cantidad.toString());
  };

  const guardarEdicion = (index) => {
    const nuevaLista = [...lista];
    nuevaLista[index] = {
      ...nuevaLista[index],
      texto: textoEditado,
      cantidad: Math.max(1, parseInt(cantidadEditada) || 1),
    };
    setLista(nuevaLista);
    setEditandoIndex(null);
    setTextoEditado('');
    setCantidadEditada(1);
  };

  const guardarCantidad = (index, nuevaCantidad) => {
    const nuevaLista = [...lista];
    nuevaLista[index].cantidad = Math.max(1, nuevaCantidad); // evita que la cantidad sea menor a 1
    setLista(nuevaLista);


  }

  return (
    <div className="App">
      <h1>Lista de  compras:</h1>

      <input
        type="text"
        placeholder='agregar item...'
        value={nuevoItem}
        onChange={(e) => setNuevoItem(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            agregarItem();
          } if (e.key === 'Backspace' && nuevoItem === '') {
            eliminarItem(lista.length - 1);
          }
        }}

      />
      <input
        type="number"
        min="1"
        value={cantidad}
        onChange={(e) => setCantidad(e.target.value)}
        className="input-cantidad"

      />

      <button onClick={agregarItem}>Agregar</button>


      <Lista lista={lista} // pasa la lista actual de items
        eliminarItem={eliminarItem}
        editarItem={editarItem}// da acceso a la funcion edicion 
        guardarEdicion={guardarEdicion}
        textoEditado={textoEditado}
        setTextoEditado={setTextoEditado}
        editandoIndex={editandoIndex}// le paso las funciones a la componente lista para q las pueda usar y tambien sus hijos 
        cambiarCantidad={guardarCantidad}
        cantidadEditada={cantidadEditada}
        setCantidadEditada={setCantidadEditada}
      />
    </div>
  );
}
export default App;
