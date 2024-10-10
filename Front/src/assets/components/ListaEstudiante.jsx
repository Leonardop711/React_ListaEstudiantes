const ListaEstudiante = ({ estudiantes, eliminarEstudiante }) => {
    return (
        <div className="col-md-7 mt-2">
            <div className="card">
                <div className="card-header">Lista de estudiantes</div>
                <div className="card-body">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Documento</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Correo</th>
                                <th>Teléfono</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {estudiantes.length > 0 ? (
                                estudiantes.map((estudiante, index) => (
                                    <tr key={index}>
                                        <td>{estudiante.documento}</td>
                                        <td>{estudiante.nombre}</td>
                                        <td>{estudiante.apellido}</td>
                                        <td>{estudiante.correo}</td>
                                        <td>{estudiante.telefono}</td>
                                        <td>
                                            <button className="btn btn-info btn-sm">Editar</button>
                                            <button 
                                                className="btn btn-danger btn-sm"
                                                onClick={() => eliminarEstudiante(estudiante.documento)}
                                            >
                                                Eliminar
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6">No hay estudiantes registrados</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ListaEstudiante;
