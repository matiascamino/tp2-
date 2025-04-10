import Item from './Item';

function Lista({ lista , eliminarItem, editarItem,
  guardarEdicion,
  textoEditado,
  setTextoEditado,
  editandoIndex,

}) {
  return (
    <div className="lista">
      {lista.map((item, index) => (
        <Item
          key={index}
          index={index}
          texto={item}
          onEliminar={() => eliminarItem(index)}
          onEditar={() => editarItem(index)}
          onGuardar={() => guardarEdicion(index)}
          editandoIndex={editandoIndex}
          textoEditado={textoEditado}
          setTextoEditado={setTextoEditado}
        />
      ))}
    </div>
  );
}

export default Lista;