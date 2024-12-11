class Libro {
    constructor(id, titulo, autorId, anioPublicacion) {
        this.id = id;
        this.titulo = titulo;
        this.autorId = autorId;
        this.anioPublicacion = anioPublicacion;
        this.disponibilidad = true;
    }

    // Método para obtener información del libro
    getInformacion() {
        return {
            id: this.id,
            titulo: this.titulo,
            autorId: this.autorId,
            anioPublicacion: this.anioPublicacion,
            disponibilidad: this.disponibilidad
        };
    }

    // Método para cambiar disponibilidad
    prestar() {
        if (this.disponibilidad) {
            this.disponibilidad = false;
            return true;
        }
        return false;
    }

    // Método para devolver libro
    devolver() {
        if (!this.disponibilidad) {
            this.disponibilidad = true;
            return true;
        }
        return false;
    }
}

module.exports = Libro;
