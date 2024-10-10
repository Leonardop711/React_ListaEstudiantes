import React, { useState } from 'react';

const Formulario = () => {
    const [formData, setFormData] = useState({
        documento: '',
        nombre: '',
        apellido: '',
        telefono: '',
        correo: ''
    });

    // Función para manejar los cambios en el formulario
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Función para enviar los datos al backend
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:5000/estudiantes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // Aquí podrías manejar alguna acción luego de enviar los datos (e.g., resetear el formulario)
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    return (
        <div className="col-md-5 mt-2">
            <form onSubmit={handleSubmit}>
                <div className="card">
                    <div className="card-header">Formulario</div>
                    <div className="card-body">

                        <div className="input-group mb-3">
                            <span className="input-group-text">Num. Ine</span>
                            <input
                                type="number"
                                className="form-control"
                                name="documento"
                                value={formData.documento}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text">Nombre</span>
                            <input
                                type="text"
                                className="form-control"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text">Apellido</span>
                            <input
                                type="text"
                                className="form-control"
                                name="apellido"
                                value={formData.apellido}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text">Teléfono</span>
                            <input
                                type="tel"
                                className="form-control"
                                name="telefono"
                                value={formData.telefono}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text">Correo</span>
                            <input
                                type="email"
                                className="form-control"
                                name="correo"
                                value={formData.correo}
                                onChange={handleInputChange}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary">Enviar</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Formulario;
