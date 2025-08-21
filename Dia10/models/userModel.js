const { ObjectId } = require("mongodb");
const connectDB = require("../db");

class UserModel {
  constructor(db) {
    this.schema = {
      nombre: "string",
      correo: "string",
      edad: "number",
    };
  }

  validar(usuario) {
    for (let campo in this.schema) {
      if (typeof usuario[campo] !== this.schema[campo]) {
        return false;
      }
    }
    return true;
  }

  async crear(usuario) {
    if (!this.validar(usuario)) {
      throw new Error("Error en el tipo de datos ingresados.");
    }
    const db = await connectDB.connect();
    const result = await db.collection("usuarios").insertOne(usuario);
    let idObjeto = result.insertedId;
    await connectDB.disconnect();
    return idObjeto;
  }

  
  async listar() {
    const db = await connectDB.connect();
    let arreglo = await db.collection("usuario").find().toArray();
    await connectDB.disconnect();
    return arreglo;
  }



  // 🔹 Actualizar usuario
  async actualizar(id, nuevosDatos) {
    const { ObjectId } = require("mongodb");
    const db = await connectDB.connect();
    const result = await db
      .collection("usuarios")
      .updateOne({ _id: new ObjectId(id) }, { $set: nuevosDatos });
    await connectDB.disconnect();
    return result.modifiedCount > 0; // true si se actualizó
  }



  // 🔹 Eliminar usuario
  async eliminar(id) {
    const { ObjectId } = require("mongodb");
    const db = await connectDB.connect();
    const result = await db
      .collection("usuarios")
      .deleteOne({ _id: new ObjectId(id) });
    await connectDB.disconnect();
    return result.deletedCount > 0; // true si se eliminó
  }


  // 🔹 Buscar por ID
  async buscarPorId(id) {
    const { ObjectId } = require("mongodb");
    const db = await connectDB.connect();

    // Buscamos el documento en la colección usuarios
    const usuario = await db
      .collection("usuarios")
      .findOne({ _id: new ObjectId(id) });

    await connectDB.disconnect();
    return usuario;
  }


}

module.exports = UserModel;
