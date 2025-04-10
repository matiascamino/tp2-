function Item({ texto, onEliminar }) {
    return (
        <div className="item">
            {texto}
            <button onClick={onEliminar}>Eliminar</button>
        </div>
    );
}

export default Item;