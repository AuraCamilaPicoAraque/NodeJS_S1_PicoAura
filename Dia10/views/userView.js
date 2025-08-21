const prompt = require('prompt-sync')();

class UsuarioView{
    pedirDatosUsuario(){
        const nombre = prompt('Nombre: ')
        const correo = prompt('Correo: ')
        const edad = parseInt(prompt('edad: '));
        return {
            nombre,correo,edad
        }
    }

    mostrarMensaje(msg){
        console.log(msg);
    }

    mostrarUsuarios(usuarios){
        console.log("\n -- Lista de Usuarios --\n");
        usuarios.forEach(u =>{
            console.log(`Nombre: ${u["nombre"]} , \nCorreo: ${u["correo"]}, \nEdad: ${u["edad"]} `);
        })
    }

}

module.exports=UsuarioView;