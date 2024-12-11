const express = require('express');
const biblioteca = require('./controllers/biblioteca');
const Autor = require('./models/autor');
const Libro = require('./models/libro');

const app = express();
const puerto = 3000;

// Middlewares
app.use(express.json());

// Importar rutas
const autorRoutes = require('./routes/autorRoutes');
const libroRoutes = require('./routes/libroRoutes');

// Usar rutas
app.use('/autores', autorRoutes);
app.use('/libros', libroRoutes);

// Datos iniciales de prueba
const autor1 = new Autor(1, "Gabriel García Márquez", "Colombiano");
const autor2 = new Autor(2, "Jorge Luis Borges", "Argentino");

const libro1 = new Libro(1, "Cien Años de Soledad", 1, 1967);
const libro2 = new Libro(2, "El Aleph", 2, 1949);

biblioteca.agregarAutor(autor1);
biblioteca.agregarAutor(autor2);
biblioteca.agregarLibro(libro1);
biblioteca.agregarLibro(libro2);

// Iniciar servidor
app.listen(puerto, () => {
    console.log(`Servidor corriendo en http://localhost:${puerto}`);
});
