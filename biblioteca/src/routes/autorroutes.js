const express = require('express');
const router = express.Router();
const biblioteca = require('../controllers/biblioteca');
const Autor = require('../models/autor');

// GET todos los autores
router.get('/', (req, res) => {
    const autores = biblioteca.obtenerAutores();
    res.json(autores);
});

module.exports = router;
