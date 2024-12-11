
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

// Exportar la aplicación para Vercel
module.exports = app;
