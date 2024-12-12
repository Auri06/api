const express = require('express');
const biblioteca = require('./controllers/biblioteca');
const Autor = require('./models/autor');
const Libro = require('./models/libro');

const app = express();

const PORT = 80;

// Middleware para CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Middlewares
app.use(express.json());

// Importar rutas
const autorRoutes = require('./routes/autorroutes');
const libroRoutes = require('./routes/libroroutes');

// Usar rutas
app.use('/autores', autorroutes);
app.use('/libros', libroroutes);

// Ruta raíz de prueba
app.get('/', (req, res) => {
  res.json({ mensaje: 'API de Biblioteca funcionando' });
});

// Datos iniciales de prueba
const autor1 = new Autor(1, "Gabriel García Márquez", "Colombiano");
const autor2 = new Autor(2, "Jorge Luis Borges", "Argentino");

const libro1 = new Libro(1, "Cien Años de Soledad", 1, 1967);
const libro2 = new Libro(2, "El Aleph", 2, 1949);

biblioteca.agregarAutor(autor1);
biblioteca.agregarAutor(autor2);
biblioteca.agregarLibro(libro1);
biblioteca.agregarLibro(libro2);

// Solo si no está siendo importado como módulo
if (require.main === module) {
  app.listen(puerto, () => {
    console.log(`Servidor corriendo en http://localhost:${puerto}`);
  });
}
app.listen(80)

// Exportar la aplicación para Vercel
module.exports = app;
