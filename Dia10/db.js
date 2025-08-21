// Conexion hacia la base de datos
require('dotenv').config();

const {MongoClient} = require('mongodb');

const uri = process.env.URI;
const dbName = process.env.DB_NAME;

let cliente;
let db;

async function connect(){

    if(db) return db;  // Retorna la variable si tiene alguna conexcion
    cliente = new MongoClient(uri); // Importar MngoClient a Cliente
    await cliente.connect(); // Abre la conexcion
    db = cliente.db(dbName);  // Selecciona y anida la BBDD
    return db;  // Retorna la conexion anidada a la BBDD
}


async function disconnect(){                                                                                     
    if(cliente) await cliente.close();

}


module.exports= {connect , disconnect};