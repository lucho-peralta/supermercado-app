import promptSync from "prompt-sync";
// import { consultarStock } from './src/services/productoServices.js';
import { menuInicial, buscarProducto, } from "./Menu.js";
import { menuApp, mensajes } from "./src/constantes/appConstantes.js";
import { stockProductos } from "./src/services/productoServices.js";
const prompt = promptSync();



function main() {
  
  let navegarApp = true;

  do {

    const opcionesMenu = menuInicial(menuApp);

    let resultadoOpcion;

    switch (opcionesMenu) {

      case 0:
        console.log(mensajes.saludoDespedida);
        navegarApp = false;
        break;

      case 1:
        console.log(stockProductos);
        break;

      case 2:
        resultadoOpcion = buscarProducto(stockProductos);
        
        if (resultadoOpcion === 0){
          navegarApp = false;
        }
        else if (typeof resultadoOpcion === "object"){
          console.log(resultadoOpcion);
        }
        break;

      case 3:
        console.log("pendiente de realizacion");
        break;
    }

  } while (navegarApp);

} 

main();
