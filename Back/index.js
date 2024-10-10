const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'escuela'
});

db.connect(err => {
    if (err) {
        console.error('Error al conectar a la base de datos', err);
    } else {
        console.log('Conectado a la base de datos MySQL');
    }
});

app.get('/estudiantes', (req, res) => {
    db.query('SELECT * FROM estudiantes', (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(results);
        }
    });
});

app.post('/estudiantes', (req, res) => {
    const { documento, nombre, apellido, telefono, correo } = req.body;
    const query = 'INSERT INTO estudiantes (documento, nombre, apellido, telefono, correo) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [documento, nombre, apellido, telefono, correo], (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).json({ id: results.insertId, documento, nombre, apellido, telefono, correo });
        }
    });
});

app.delete('/estudiantes/:documento', (req, res) => {
    const { documento } = req.params;
    db.query('DELETE FROM estudiantes WHERE documento = ?', [documento], (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(204).send();
        }
    });
});

app.listen(5000, () => {
    console.log('Servidor corriendo en el puerto 5000');
});