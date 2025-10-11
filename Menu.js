import promptSync from "prompt-sync";
const prompt = promptSync();
import { traerProductoPorID } from "./src/services/productoServices.js";
import { mensajes } from "./src/constantes/appConstantes.js";
import { ImprimirOpcionesDelMenu, crearListaOpcionesValidas, seleccionarOpcionValida } from "./src/utiles/funcionesvarias.js";


//MENU INICIO.
export function menuInicial(menu) {
  
  ImprimirOpcionesDelMenu(menu);

  const opcionesValidas = crearListaOpcionesValidas(menu.opciones);

  const entradaUsuario = seleccionarOpcionValida(opcionesValidas);

  return entradaUsuario;
}

// Case 0: Salir de la App
// Case1 : ConsultarStock

// Case2: Buscar producto por ID


export function buscarProducto(productos) {

  let pedirId = true;
  let producto;

  do {
    // sacar el prompt a funciones varias.
    let entradaUsuario = prompt(mensajes.ingreseIdProducto);
    entradaUsuario = entradaUsuario.trim();

    if (entradaUsuario  === "") {
      console.log(mensajes.entradaInvalida)
      continue;
    }

    else if (entradaConvertida === "0" ){
      console.log(mensajes.saludoDespedida);
      pedirId = false;
      return 0;
    }

    else if (entradaUsuario.toLowerCase() === "volver"){
      pedirId = false;
      return "volver"; 
    }

    let entradaConvertida = Number(entradaUsuario); 

    if (isNaN(entradaConvertida)) {
      console.log(mensajes.entradaInvalida)
      continue;
    }

    const productoEncontrado = traerProductoPorID(productos, entradaConvertida);

    if (productoEncontrado === undefined) {
      console.log(mensajes.idNoExiste); 
      continue;
    }
    
    if (productoEncontrado) {
      producto = productoEncontrado;
      pedirId = false;
    }
      
  } while (pedirId);

  return producto;

}




// dividir en 2 a buscar producto por ID --> Prompt y busqueda.y pasarla a productServices. 
// Usar el mismo prompt general para Selecionar opcion valida?


