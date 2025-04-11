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
        <span>{texto} - Cantidad: {cantidad}</span>
        <button onClick={onDisminuir}>-</button>
        <button onClick={onAumentar}>+</button>
        <button onClick={onEliminar}>Eliminar</button>
        <button onClick={onEditar}>Editar</button>
        </>
    )}
    </div>
    );
}

export default Item;