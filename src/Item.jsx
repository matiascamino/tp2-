function Item({ texto, 
    onEliminar,
    onEditar,
    index,
    onAumentar,
    onDisminuir,
    editandoIndex,
    textoEditado,
    setTextoEditado, 
    cantidad,
    onGuardar }) {

       
        const isEditing = index === editandoIndex; // verifica si el item que estoy editando es el mismo que el que estoy editando en ese momento

    return (
    <div className="item">
    
        {isEditing ? (
            <>
                <input
                    type="text"
                    value={textoEditado}
                    onChange={(e) => setTextoEditado(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            onGuardar();// guarda el item editado
                        }
                    }}
                />
                <button onClick={onGuardar}>Guardar</button>
            </>
        ) : (
        <> 
        <span className="item-texto">{texto}</span>
        <span className="cantidad">x{cantidad}</span>
        <button className="botonCantidadMenos" onClick={onDisminuir}>-</button>
        <button className="botonCantidadMas" onClick={onAumentar}>+</button>
        <button className="eliminar" onClick={onEliminar}>Eliminar</button>
        <button className= "editar"onClick={onEditar}>Editar</button>
        </>
    )}
    </div>
    );
}

export default Item;