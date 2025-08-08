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

Herencia: Reutiñizar código mediante una relacion de tipo "es-un"  - (metodos con mismo nombre se comporten de manera diferente segun el objeto que los invoque.)

Polimorfismo:  Permite que un mismo metódo se comporte de diferentes formsa según el contexto.


*/ 

const Persona = require('./models/persona');
const CuentaBancaria = require('./models/cuentaBancaria');
const perro = require('./models/perro');
const gato = require('./models/gato')
const pajaro = require('./models/pajaro');
const lineitems = require('./models/linealitem');
const pedro = new Persona('Pedro',25);
pedro.saludar();

const cuenta = new CuentaBancaria ('Pedro', 1000);
cuenta.depositar(500);
console.log(cuenta.VerSaldo())


const animal1 = new perro ( "Paco");
animal1.hablar();

const animal2 = new gato ( "michi");
animal2.hablar();


const animal3 = new pajaro ("piolin", "canario");
animal3.hablar();

// Asociación
const pedido = require('./models/pedido');
const lineItem = require('./models/linealitem');

const pedido1 = new pedido ('P-001')
pedido1.addItems(new lineitems("Manzanas" ,3,1.2));
pedido1.addItems(new lineitems("Peras" ,2,1.5));

console.log('Total Pedido:',pedido1.total());

//Un LineItem NO sabe de su pedido
const item= pedido1.items[0];
console.log('Item conoce el ID del pedido?:','id' in item);



// bidireccional

const autor = require('./models/autor')
const libros = require('./models/libros')

const autor1 = new autor(1, "Gabriel Garcia Marquez")

const libro1 = new libros("978-1", "Harry Potter")
const libro2 = new libros("978-2", "Harry Potter - Piedra filosofar")

autor1.eliminarLibro(libro2);
libro1.quitarAutor();

console.log(libro1);
autor1.agregarlibro(libro1);
console.log(libro2);
