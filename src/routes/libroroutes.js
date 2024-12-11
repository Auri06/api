const express = require('express');
const router = express.Router();
const biblioteca = require('../controllers/biblioteca');
const Libro = require('../models/libro');

// GET todos los libros
router.get('/', (req, res) => {
    const libros = biblioteca.obtenerLibros();
    res.json(libros);
});

// GET libros disponibles
router.get('/disponibles', (req, res) => {
    const librosDisponibles = biblioteca.obtenerLibrosDisponibles();
    res.json(librosDisponibles);
});

// GET libros no disponibles
router.get('/nodisponibles', (req, res) => {
    const librosNoDisponibles = biblioteca.obtenerLibrosNoDisponibles();
    res.json(librosNoDisponibles);
});

module.exports = router;
