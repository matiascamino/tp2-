import Item from './Item';

function Lista({ 
  lista ,
  eliminarItem,
  editarItem,
  guardarEdicion,
  textoEditado,
  setTextoEditado,
  editandoIndex,
  cambiarCantidad,
  cantidadEditada,
  setCantidadEditada,
 
}) {
  return (
    <div className="lista">
      {lista.map((item, index) => (
        <Item
          key={index}
          index={index}
          texto={item.texto}
         cantidad={item.cantidad}
          onEliminar={() => eliminarItem(index)}
          onEditar={() => editarItem(index)}
          onGuardar={() => guardarEdicion(index)}
          editandoIndex={editandoIndex}
          textoEditado={textoEditado}
          setTextoEditado={setTextoEditado}
          cantidadEditada={cantidadEditada}
          setCantidadEditada={setCantidadEditada}
          
          
           onCambiarCantidad={(nuevaCantidad) => cambiarCantidad(index, nuevaCantidad)}
        />
      ))}
    </div>
  );
}

export default Lista;