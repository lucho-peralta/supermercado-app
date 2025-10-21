import promptSync from 'prompt-sync';
const prompt = promptSync();

import { AgregarProducto } from './src/funciones/agregarProducto.js';
import { BuscarProductoPorId } from './src/funciones/buscarProducto.js';
import { menuInicial } from './src/funciones/menuInicial.js';
import { menuApp, mensajesApp, textoPrompts, stockProductos, categoriasProductos } from './src/constantes/appConstantes.js';

function main() {
  let navegarApp = true;

  do {
    const opcionElegida = menuInicial(menuApp, textoPrompts, mensajesApp);

    if (opcionElegida === 'salir') {
      console.log(mensajesApp.saludoDespedida);
      navegarApp = false;
    }

    let resultadoOpcion;

    switch (opcionElegida) {
      case 1:
        console.log(stockProductos);
        break;

      case 2:
        resultadoOpcion = BuscarProductoPorId(stockProductos, textoPrompts, mensajesApp);
        if (resultadoOpcion === 'salir') {
          console.log(mensajesApp.saludoDespedida);
          navegarApp = false;
        } else if (resultadoOpcion.tipo !== null) {
          console.log(resultadoOpcion);
        }
        break;

      case 3:
        resultadoOpcion = AgregarProducto(stockProductos, categoriasProductos, textoPrompts, mensajesApp);
        if (resultadoOpcion === 'salir') {
          console.log(mensajesApp.saludoDespedida);
          navegarApp = false;
        } else if (resultadoOpcion !== null) {
          console.log(resultadoOpcion);
        }
        break;
    }
  } while (navegarApp);
}

main();
