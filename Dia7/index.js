const prompt= require('prompt-sync')();//Entradas por consola
const path = "./db.json";//Direccionar hacia la base de datos
const fs= require('fs');//Manejo de Archivos Locales

//Modularización de Carga de la Data
function loadData(){
    if(!fs.existsSync(path)){
        fs.writeFileSync(path,"[]");
    };// Creo el archivo con data si no existe.
    const data = fs.readFileSync(path);//Cargo y Guardo la data en una variable
    return JSON.parse(data);//Retorno la data en formato JSON
}
function saveData(data){
    fs.writeFileSync(path,JSON.stringify(data));
}
function showMenu() {
  console.log("\n=== CRUD en consola con Node.js ===");
  console.log("1. Crear elemento");
  console.log("2. Listar elementos");
  console.log("3. Actualizar elemento");
  console.log("4. Eliminar elemento");
  console.log("5. Salir\n");

  let opcionUsuario = prompt("Selecciona una opción: ");
  return opcionUsuario;
}

function handleMenu(option) {
  switch (option) {
    case "1":
      createItem();
      break;
    case "2":
      listItems();
      break;
    case "3":
      updateItem();
      break;
    case "4":
      deleteItem();
      break;
    case "5":
      booleanito = false;
    default:
      console.log("Opción inválida.");
  }
}

// crear

function createItem(){
    let nombre = prompt("Ingresa un nombre: ");
    const id = Date.now();// ID Unico (Paso de milisegundos desde el 1 de Enero de 1970)
    const data = loadData();
    data.push({
        id,nombre
    });
    console.log(data);
    saveData(data);
    console.log("El elemento fue agregado!");
    showMenu();
}


// listar

function listItems() {
  const data = loadData();  // Cargar la base de datos
  console.log("\n=== Lista de elementos ===");
  console.table(data);
};


// actualizar

function updateItem(){
  const data = loadData(); // Cargar la base de datos
  if (data.length === 0) {
      console.log("No hay elementos para actualizar.");
      return;
  }

  const idBuscar = prompt("Ingresa el ID del elemento a actualizar: ");
  const index = data.findIndex(item => item.id == idBuscar);

  if (index === -1) {
      console.log("Elemento no encontrado.");
  } else {
      const nuevoNombre = prompt("Ingresa el nuevo nombre: ");
      data[index].nombre = nuevoNombre;
      saveData(data);
      console.log("Elemento actualizado correctamente.");
  }
}


// eliminar

function deleteItem() {
  listItems();
  let id = parseInt(prompt(`Ingresa el ID del elemento a eliminar: `));
  const data = loadData();
  for (let i = 0; i < data.length; i++) {
      const element = data[i];
      if (id === element.id) {
          const indiceElemento = data.indexOf(element);
          data.splice(indiceElemento, 1);
          saveData(data);
          console.log(`El elemento fue eliminado!`);
          break;
      } else if (i === data.length - 1) {
          console.log(`Elemento no existente`);
      };
  };
};




let booleanito = true;

while(booleanito){
    let opcionUsuario= showMenu();
    handleMenu(opcionUsuario);
}