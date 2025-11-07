import { BuscarProductoPorNombre } from '../../services/productoServices.js';
import promptSync from 'prompt-sync';
const prompt = promptSync();

export function EncontrarProductoPorNombre(listaProductos) {
  console.log('A continuacion se le va a salicitar una entrada. ("Salir" para cerrar la App, "Volver" para regresar al menu');
  while (true) {
    const entradaUsuario = prompt('Ingrese el nombre del producto: ').trim().toLowerCase();

    if (!entradaUsuario) {
      console.log(mensajesTexto.entradaInvalida);
      continue;
    } else if (entradaUsuario === 'salir' || entradaUsuario === 'volver') {
      return entradaUsuario;
    }

    const productoEncontrado = BuscarProductoPorNombre(listaProductos, entradaUsuario);

    if (!productoEncontrado) {
      console.log('producto no encontrado.');
      continue;
    }

    return productoEncontrado;
  }
}
