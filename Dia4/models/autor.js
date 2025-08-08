class autor{
    constructor(id,nombre){
        this.id = id;
        this.nombre = nombre;
        this.libros =[];
    }
    agregarlibro(libro){
        if(!this.libros.includes(libro)==false){
            this.libros.push(libro);
            libro.setAutor(this);
        }
    }
    quitarAutor() {
        if (this._autor) {
            const index = this._autor.libros.indexOf(this);
            if (index !== -1) {
                this._autor.libros.splice(index, 1);
            }
            this._autor = null;
        }
    }
    

}

module.exports= autor;