import Lista from './Lista';
import './App.css';
import { useState } from 'react';


function App() {
  const [lista, setLista] = useState([])// lista es un array y setlista la funcion para modificar ese array
  const [nuevoItem, setNuevoItem] = useState(''); // nuevo item es el texto escrito en el input y useState permite manejar valores dinamicos  
  const [editandoIndex, setEditandoIndex] = useState(null);
  const [textoEditado, setTextoEditado] = useState('');

  const agregarItem = () => {
    if (nuevoItem.trim() === '') return; // si el input esta vacio no hace nada, trim elimina los espacio lo cual evita que agregue elementos vacios 
    setLista([...lista, {texto:nuevoItem,cantidad:1}]);// los '...' son spread operator y lo q hace es copiarlos, nuevoitem agrega1 el  nuevo item al final y crea un nuevo array y lo pasa a setlista
    setNuevoItem('');// limpia el input

  };

  const eliminarItem = (index) => {
    const nuevaLista = lista.filter((_, i) => i !== index);
    setLista(nuevaLista);

  };

  const editarItem = (index) => {
    setEditandoIndex(index);// guardo el indece q estoy editando aviso que estoy editando un item en particular 
    setTextoEditado(lista[index].texto);// toma el texto actual de ese indice y luego lo puedo usar para rellenar un input 
    
  };

  const guardarEdicion = (index) => {
    const nuevaLista = [...lista];
  nuevaLista[index] = {
      ...nuevaLista[index],
      texto: textoEditado,
    };
    setLista(nuevaLista);
    setEditandoIndex(null);
    setTextoEditado('');
  };
 
  const aumentarCantidad = (index) => {
    const nuevaLista = [...lista];
    nuevaLista[index].cantidad += 1;
    setLista(nuevaLista);

  };

  const disminuirCantidad = (index) => {
    const nuevaLista = [...lista];
    if (nuevaLista[index].cantidad > 1) {
      nuevaLista[index].cantidad -= 1;
      setLista(nuevaLista);
    }
  };

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
      <button onClick={agregarItem}>Agregar</button>

      <Lista lista={lista} // pasa la lista actual de items
      eliminarItem={eliminarItem} 
      editarItem={editarItem}// da acceso a la funcion edicion 
      guardarEdicion={guardarEdicion}
      textoEditado={textoEditado}
      setTextoEditado={setTextoEditado}
      editandoIndex={editandoIndex}// le paso las funciones a la componente lista para q las pueda usar y tambien sus hijos 
      aumentarCantidad={aumentarCantidad}
      disminuirCantidad={disminuirCantidad} // le paso la funcion de aumentar y disminuir cantidad
      
      />
    </div>
  );
}
export default App;
