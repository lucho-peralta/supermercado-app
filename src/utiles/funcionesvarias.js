
import { mensajes } from "../constantes/appConstantes.js";
import promptSync from "prompt-sync";
const prompt = promptSync();
// FUNCIONES DEL MENU


// ----------

export function ImprimirOpcionesDelMenu(menu) {
  menu.opciones.forEach((opcion, indice) => {
    if (opcion !== "Salir") {
      console.log(`${indice}: ${opcion}`);
    }
  });

  menu.opciones.forEach((opcion, indice) => {
    if (opcion === "Salir") {
      console.log(`${indice}: ${opcion}`);
    }
  });
}

// --------

export function crearListaOpcionesValidas(opcionesDelMenu) {
  
  const listaOpcionesValidas = opcionesDelMenu.map((opcion, indice) => indice);

  return listaOpcionesValidas;
}

// -------

export function seleccionarOpcionValida(listaOpcionesValidas) {
  
  let elegirOpcion = true;

  let opcionElegida;
  
  do {

    let entrada = prompt(mensajes.seleccionarOpcion);
    entrada = entrada.trim();

    if (entrada === "") {
      console.log(mensajes.entradaInvalida)
      continue;
    }

    let numeroOpcion = Number(entrada); 

    if (listaOpcionesValidas.includes(numeroOpcion)) {
      opcionElegida = numeroOpcion;
      elegirOpcion = false;
    }

    else {
      console.log(mensajes.opcionInvalida);
      continue;
    }

  } while (elegirOpcion);

  return opcionElegida;

}
  

// -------


//NO SIRVE, hay que identificar otro dato para filtar el camino segun la funcion y eliminar volver s/caso.
// const validarInputUsuario = (input) => {
 
//   if (input === "") {
//     console.log(mensajes.entradaInvalida);
//     //   continue;
//     return mensajes.entradaInvalida;
//   }

//   if (input.toLowerCase() === "volver") {
//     return "volver";
//   }

//   const inputConvertido = Number(input);

//   if (isNaN(inputConvertido)) {
//     return mensajes.entradaInvalida;
//   }

//   if (inputConvertido === 0) {
//     console.log(mensajes.saludoDespedida);
//     return 0;
//   }
//   return inputConvertido;

// };

