function Item({ texto, 
    onEliminar,
     onEditar,
    index,
    editandoIndex,
    textoEditado,
     setTextoEditado, 
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
        {texto}
        <button onClick={onEliminar}>Eliminar</button>
        <button onClick={onEditar}>Editar</button>
        </>
    )}
    </div>
    );
}

export default Item;