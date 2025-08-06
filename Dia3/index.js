///  #####################
///  P.O.O 
///  #####################


// ¿ Qué es?

/*
Es un paradigma de programacion que se basa en el uso de "objetos" para represetar entidades real dentro del software.
cada objeto es una instancia de una clase, donde una clase es una plantilla
que define las propiedades (atributos) y comportamientos (métodos) que los objetos de este tipo tendrán.


En términos generales los pilares de la P.O.O son:
Abstracción:  Representar entidades del mundo real con sus características esenciales.

Encapsulamienot: Ocultar los detalles internos y exponer solo lo necesario.

Herencia: Reutiñizar código mediante una relacion de tipo "es-un"

Polimorfismo:  Permite que un mismo metódo se comporte de diferentes formsa según el contexto.


*/ 

const Persona = require('./models/persona');
const CuentaBancaria = require('./models/cuentaBancaria');
const perro = require('./models/perro');
const pedro = new Persona('Pedro',25);
pedro.saludar();

const cuenta = new CuentaBancaria ('Pedro', 1000);
cuenta.depositar(500);
console.log(cuenta.VerSaldo())


const animal1 = new perro ( "Paco");
animal1.hablar();

const animal2 = new gato ( "michi");
animal2.hablar();