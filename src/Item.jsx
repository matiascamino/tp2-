function Item({ texto,
    onEliminar,
    onEditar,
    index,
    cantidadEditada,
    setCantidadEditada,
    editandoIndex,
    textoEditado,
    setTextoEditado,
    cantidad,
    onGuardar
}) {


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

                    <input
                        type="number"
                        min="1"
                        value={cantidadEditada}
                        onChange={(e) => {
                            const value = e.target.value;
                            if (value === '') {   setCantidadEditada('');
                            } else {
                                setCantidadEditada(value);
                            }
                               
                        }}
                    />
                    <button onClick={onGuardar}>Guardar</button>
                </>
            ) : (
                <>
                    <span className="item-texto">{texto}</span>
                    <span className="item-cantidad">x{cantidad}</span>
                    <button className="eliminar" onClick={onEliminar}>Eliminar</button>
                    <button className="editar" onClick={onEditar}>Editar</button>
                </>
            )}
        </div>
    );
}

export default Item;