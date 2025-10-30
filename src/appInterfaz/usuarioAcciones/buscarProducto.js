import promptSync from 'prompt-sync';
const prompt = promptSync();

import { TraerProductoPorID, TraerProductosPorCategoria } from '../../services/productoServices.js';
import { ValidarCaracteresAceptado } from '../../utils/validacionesYformatos.js';
import { CrearListaOpcionesValidas, ImprimirOpciones } from '../../utils/opciones.js';

// BUSCAR PRODUCTO POR ID

export function BuscarProductoPorId(listaProductos, promptsTexto, mensajesTexto) {
  while (true) {
    const entradaUsuario = prompt(promptsTexto.ingreseIdProducto, mensajesTexto).trim().toLowerCase();

    if (!entradaUsuario) {
      console.log(mensajesTexto.entradaInvalida);
      continue;
    } else if (entradaUsuario === 'salir' || entradaUsuario === 'volver') {
      return entradaUsuario;
    }

    const idIngresado = ValidarCaracteresAceptado(entradaUsuario, 'entero');

    if (!idIngresado) {
      console.log(mensajesTexto.entradaInvalida);
      continue;
    }

    const productoEncontrado = TraerProductoPorID(listaProductos, idIngresado);
    if (!productoEncontrado) {
      console.log(mensajesTexto.idNoexiste);
      continue;
    }

    return productoEncontrado;
  }
}

// BUSCAR PRODUCTO POR CATEGORIA

export function BuscarProductoPorCategoria(listaProductos, listaCategorias, promptsTexto, mensajesTexto) {
  ImprimirOpciones(listaCategorias, mensajesTexto);
  const listaOpcionesValidas = CrearListaOpcionesValidas(listaCategorias.opciones);
  while (true) {
    const entradaUsuario = prompt(promptsTexto.seleccioneCategoria, mensajesTexto).trim().toLowerCase();

    if (!entradaUsuario) {
      console.log(mensajesTexto.entradaInvalida);
      continue;
    } else if (entradaUsuario === 'salir' || entradaUsuario === 'volver') {
      return entradaUsuario;
    }

    if (!listaOpcionesValidas.includes(entradaUsuario)) {
      console.log(mensajesTexto.entradaInvalida);
      continue;
    }

    const indiceCategoria = Number(entradaUsuario) - 1;
    const categoriaSeleccionada = listaCategorias.opciones[indiceCategoria];

    const productosPorCategoria = TraerProductosPorCategoria(listaProductos, categoriaSeleccionada);

    if (!productosPorCategoria) {
      console.log(mensajes.categoriaNoEncontrada);
      continue;
    }

    return productosPorCategoria;
  }
}
