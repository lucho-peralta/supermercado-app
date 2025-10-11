// import promptSync from 'prompt-sync';
// import { buscarProductoPorID, stockProductos } from './src/services/productoServices.js';
// const prompt = promptSync();


// const stockProductos1 = [
//   { id: 1, nombre: "Agua" },
//   { id: 2, nombre: "Pan" },
//   { id: 3, nombre: "Detergente" },
//   { id: 4, nombre: "Asado" },
// ];

// let lista_Id_Existentes = [1, 2, 3, 4];


// function validarNumero() {
//   let entradaUsuario;
//   while (true) {
//     entradaUsuario = prompt("Ingrese el id del producto (0 para salir): ");


//     if (entradaUsuario === "") {
//       console.log("Debe ingresar un numero.");
//       continue;
//     }

//     const numeroIngresado = Number(entradaUsuario);

//     if (numeroIngresado === 0) {
//       return;
//     }

//     if (isNaN(numeroIngresado)) {
//       console.log("Debe ingresar un numero.");
//       continue;
//     }


//     return numeroIngresado;

// //   }
// // }


// let entrada;

// while (true) {

//   entrada = prompt(`ingrese un numero: `);

//   let numero = esNumero(entrada);

//   return numero;

// }

// function esNumero(entradaUsuario) {

//   if (entradaUsuario === "") {
//     return `no es numero`;
//   }

//   const entrada = Number(entradaUsuario);

//   if (isNaN(entrada)) {
//     return `no es numero`;
//   }
//   else {
//     return entrada;
//   }
// }


// function crearListaOpcionesValidas(opcionSalir, opcionesDelMenu) {
//   let opcionesTotales = [];

//   const indiceSalir = (arr) => {
//     const indice => arr.index
// }



// opcionSalir.concat(opcionesDelMenu);
// let indicesTotales = [];
// for (let i = 0; i < opcionesTotales.length; i++) {
//   indicesTotales.push(i);
// }
// return indicesTotales;
// }


// function crearListaOpcionesValidas(opcionSalir, opcionesDelMenu) {
//   let opcionesTotales = opcionSalir.concat(opcionesDelMenu);
//   let indicesTotales = [];
//   for (let i = 0; i < opcionesTotales.length; i++) {
//     indicesTotales.push(i);
//   }
//   return indicesTotales;
// }

const menuContenido = [
  {
    titulo: `Menu Supermercado App`, opciones: [`Salir`, `Consultar stock`, `Buscar producto por id`, `Registrar compra`, `Generar ticket`,]
  },
];


function imprimir(menu) {

  menu[0].opciones.forEach((opcion, indice) => {

    if (opcion !== "Salir") {
      console.log(`${indice}: ${opcion}`);
    }
    else {
      console.log(`${indice}: ${opcion}`);
    }
  }

  );

}



console.log(imprimir(menuContenido));
