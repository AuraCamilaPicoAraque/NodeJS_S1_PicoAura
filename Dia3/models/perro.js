const animal = require('./animal');

class perro extends animal {

    hablar(){
        console.log(`${this.nombre} esta ladrando`);
    }
}

module.exports=perro;