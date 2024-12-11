class Autor {
    constructor(id, nombre, nacionalidad) {
        this.id = id;
        this.nombre = nombre;
        this.nacionalidad = nacionalidad;
    }

    // Método para obtener información del autor
    getInformacion() {
        return {
            id: this.id,
            nombre: this.nombre,
            nacionalidad: this.nacionalidad
        };
    }
}

module.exports = Autor;
