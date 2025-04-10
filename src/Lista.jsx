import Item from './Item';

function Lista({ lista , eliminarItem}) {
  return (
    <div className="lista">
      {lista.map((item, index) => (
        <Item
          key={index}
          texto={item}
          onEliminar={() => eliminarItem(index)}
        />
      ))}
    </div>
  );
}

export default Lista;