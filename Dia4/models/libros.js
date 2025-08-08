class libros {
    constructor(isbn, titulo){
        this.isbn = isbn;
        this.titulo = titulo;
        this._autor = null; //referencia de vuelta
    }
    setAutor(autor){
        this._autor=autor
    }
    
    eliminarLibro(libro) {
        const index = this.libros.indexOf(libro);
        if (index !== -1) {
            this.libros.splice(index, 1);
            libro.setAutor(null); // Rompe la referencia desde el libro
        }
    }
    
}

module.exports= libros;