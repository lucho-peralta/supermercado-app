import promptSync from 'prompt-sync';
const prompt = promptSync();

import { TraerProductoPorID } from '../services/productoServices.js';

import { FormatearEntrada } from '../utils/formatearInput.js';

// BUSCAR PRODUCTO

export function BuscarProductoPorId(listaProductos, textoPrompt, mensajes) {
  while (true) {
    const entrada = FormatearEntrada(textoPrompt.ingreseIdProducto, mensajes);

    if (entrada === 'salir') {
      return 'salir';
    } else if (entrada === 'volver') {
      return null;
    }

    const idIngresado = Number(entrada);

    if (!Number.isInteger(idIngresado) || idIngresado <= 0) {
      console.log(mensajes.entradaInvalida);
      continue;
    }

    const productoEncontrado = TraerProductoPorID(listaProductos, idIngresado);
    if (!productoEncontrado) {
      console.log(mensajes.productoNoEncontrado);
      continue;
    }

    return productoEncontrado;
  }
}
