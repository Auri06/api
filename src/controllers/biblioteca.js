class Biblioteca {
    constructor() {
        this.autores = [];
        this.libros = [];
    }

    // Métodos para Autores
    agregarAutor(autor) {
        this.autores.push(autor);
    }

    obtenerAutores() {
        return this.autores.map(autor => autor.getInformacion());
    }

    // Métodos para Libros
    agregarLibro(libro) {
        this.libros.push(libro);
    }

    obtenerLibros() {
        return this.libros.map(libro => libro.getInformacion());
    }

    obtenerLibrosDisponibles() {
        return this.libros
            .filter(libro => libro.disponibilidad)
            .map(libro => libro.getInformacion());
    }

    obtenerLibrosNoDisponibles() {
        return this.libros
            .filter(libro => !libro.disponibilidad)
            .map(libro => libro.getInformacion());
    }

    // Métodos de búsqueda
    buscarLibroPorId(id) {
        return this.libros.find(libro => libro.id === id);
    }

    buscarAutorPorId(id) {
        return this.autores.find(autor => autor.id === id);
    }
}

// Crear una instancia única de Biblioteca
const bibliotecaInstance = new Biblioteca();

module.exports = bibliotecaInstance;
