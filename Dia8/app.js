const {ItemModel} = require("./models/itemModel");
const model = new ItemModel();
model.crear({nombre: "Lapicero", descripcion:"Azul"});
console.log(model.listar());

model.actualizar( 1 ,{nombre: "Borrador", descripcion:"Blanco"});
console.log(model.listar());