/*
Comando super()

En una clase que hereda (extends) de otra, super() es una llamada especial que hace referencia al constructor o metodos de la calse padre.


- Dentro del constructor de una clase hija , super() se usa para invocar el constructor de la clase padre
*/

const animal = require('./animal');


class pajaro extends animal {
    constructor(nombre,raza){
        super(nombre);
        this.raza=raza;
    }

    hablar(){
        console.log(`EL ${this.nombre} es un ${this.raza}!!!`);
    }
}

module.exports = pajaro;