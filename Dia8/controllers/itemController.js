// su objectivo es recibir losinputs de la vista , realizar validaciones basicasy coordinar el modelo




class ItemController{
    constructor({model,view,prompt}){
        this.model=model;
        this.view=view;
        this.prompt=prompt;
    }

    crear() {
        const datos = this.view.pedirDatosCreacion(this.prompt);
        if(!datos.nombre){
            this.view.mostrarMensaje("El nombre es obligatorio.");
            return;
        }
        const creado = this.model.crear(datos);
        this.view.mostrarMensaje(`Creado con ID ${creado.id}.`)
    }

    listar() {
        const items = this.model.listar();
        if (items.length === 0) {
            this.view.mostrarMensaje("No hay items registrados.");
            return;
        }
    
        this.view.listar(items);
    }    

    buscarPorId(){
        const buscar = this.view.pedirID(this.prompt);
        if(!buscar.id){
            this.view.mostrarMensaje("El ID es obligatorio.");
            return;
        }
        const buscado = this.model.buscarPorId(id);
        this.view.mostrarMensaje(`El ID:${buscado.id} fue encontrado como:`)
    }

    actualizar(){

    }

    eliminar() {
        const id = this.view.pedirID(this.prompt);
        const eliminado = this.model.eliminar(id);
    
        if (eliminado) {
            this.view.mostrarMensaje(` Item con ID ${id} eliminado.`);
        } else {
            this.view.mostrarMensaje(` No se encontró un item con ID ${id}.`);
        }
    }
    
}

module.exports={ItemController};