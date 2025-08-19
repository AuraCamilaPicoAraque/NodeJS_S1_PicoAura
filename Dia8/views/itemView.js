// la vista busca centralizar toda la interaccion por consola , lo cual incluye menu, prompt y formatos de salida.


const ItemView = {
    mostrarMenu() {
        console.log("\n === CRUD DE ITEMS (MVS, consola) ===");
        console.log("1) Crear");
        console.log("2) Listar");
        console.log("3) Ver por ID");
        console.log("4) Actualizar");
        console.log("5) Eliminar");
        console.log("0) Salir");
    },

    pedirOpcion(prompt) {// el prompt es como un input 
        const op= prompt("Elige una opción: ");
        return op.trim();
    },

    pedirDatosCreacion(prompt){
        const nombre = prompt("Nombre: ").trim();
        const descripcion = prompt("Descripcion: ").trim();
        return {nombre,descripcion};
    },

    pedirID(prompt){
        const id = prompt("Ingrese ID: ").trim();
        return id.trim();
    },

    pedirActualizar(prompt){
        const nombre = prompt("Nombre: ").trim();
        const descripcion = prompt("Descripcion: ").trim();
        return {nombre,descripcion};
    },

    mostrarMensaje(msg){
        console.log(`\n${msg}`);
    }
}

module.exports={ItemView}