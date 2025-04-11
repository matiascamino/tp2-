import Item from './Item';

function Lista({ 
  lista ,
  eliminarItem,
  editarItem,
  guardarEdicion,
  textoEditado,
  setTextoEditado,
  editandoIndex,
  aumentarCantidad,
  disminuirCantidad

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
          onAumentar={() => aumentarCantidad(index)}
          onDisminuir={() => disminuirCantidad(index)}
        />
      ))}
    </div>
  );
}

export default Lista;