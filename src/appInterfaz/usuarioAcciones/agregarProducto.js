import promptSync from 'prompt-sync';
const prompt = promptSync();
import { BuscarProductoPorNombre } from '../../services/productoServices.js';
import { GenerarID } from '../../services/productoServices.js';
import { CrearListaOpcionesValidas, ImprimirOpciones } from '../../utils/opciones.js';
import { ValidarCaracteresAceptado } from '../../utils/validaciones.js';

export function IngresarDatosNuevoProducto(listaProductos, listaCategoria, promptsTexto, mensajesTexto) {
  console.log(mensajesTexto.ingreseDatosNuevoProducto + '' + mensajesTexto.opcionSalirVolver);

  //nombre
  const nombreConfirmado = IngresarNombre(listaProductos, promptsTexto, mensajesTexto);

  if (nombreConfirmado === 'salir') {
    return 'salir';
  } else if (nombreConfirmado === 'volver') {
    return null;
  }

  //Categoria
  const categoriaConfirmada = IngresarCategoria(listaCategoria, promptsTexto, mensajesTexto);

  if (categoriaConfirmada === 'salir') {
    return 'salir';
  } else if (categoriaConfirmada === 'volver') {
    return null;
  }

  // precio

  const precioConfirmado = IngresarPrecio(promptsTexto, mensajesTexto);
  if (precioConfirmado === 'salir') {
    return 'salir';
  } else if (precioConfirmado === 'volver') {
    return null;
  }
  //stock

  const stockConfirmado = IngresarStock(promptsTexto, mensajesTexto);
  if (stockConfirmado === 'salir') {
    return 'salir';
  } else if (stockConfirmado === 'volver') {
    return null;
  }

  // generar id:
  const idGenerado = GenerarID(listaProductos);

  // crear objeto producto

  const nuevoProducto = {
    id: idGenerado,
    nombre: nombreConfirmado,
    categoria: categoriaConfirmada,
    precio: precioConfirmado,
    stock: stockConfirmado,
  };

  return nuevoProducto;
}

// NUEVO PRODUCTO.

export function IngresarNombre(listaProductos, promptsTexto, mensajesTexto) {
  while (true) {
    const entradaUsuario = prompt(promptsTexto.ingreseNombre, mensajesTexto).trim().toLowerCase();

    if (!entradaUsuario) {
      console.log(mensajesTexto.entradaInvalida);
      continue;
    } else if (entradaUsuario === 'salir' || entradaUsuario === 'volver') {
      return entradaUsuario;
    }

    const existeProducto = BuscarProductoPorNombre(listaProductos, entradaUsuario);

    if (existeProducto) {
      console.log(mensajesTexto.productoYaExiste);
      continue;
    }

    console.log(mensajesTexto.nombreProductoConfirmado);
    return entradaUsuario;
  }
}

export function IngresarCategoria(listaCategorias, promptsTexto, mensajesTexto) {
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

    const entradavalida = ValidarCaracteresAceptado(entradaUsuario, 'entero');

    if (!entradavalida || !listaOpcionesValidas.includes(entradaUsuario)) {
      console.log(mensajesTexto.entradaInvalida);
      continue;
    }

    const indice = Number(entradaUsuario) - 1;

    const categoria = listaCategorias.opciones[indice];

    console.log(mensajesTexto.categoriaConfirmada);
    return categoria;
  }
}

export function IngresarPrecio(promptsTexto, mensajesTexto) {
  while (true) {
    let entradaUsuario = prompt(promptsTexto.ingresePrecio, mensajesTexto).trim().toLowerCase();

    if (!entradaUsuario) {
      console.log(mensajesTexto.entradaInvalida);
      continue;
    } else if (entradaUsuario === 'salir' || entradaUsuario === 'volver') {
      return entradaUsuario;
    }

    const entradavalida = ValidarCaracteresAceptado(entradaUsuario, 'decimal');

    if (!entradavalida) {
      console.log(mensajesTexto.entradaInvalida);
      continue;
    }

    const precio = Number(entradavalida);

    console.log(mensajesTexto.precioConfirmado, precio);
    return precio;
  }
}

export function IngresarStock(promptsTexto, mensajesTexto) {
  while (true) {
    const entradaUsuario = prompt(promptsTexto.ingreseStock, mensajesTexto);

    if (!entradaUsuario) {
      console.log(mensajesTexto.entradaInvalida);
      continue;
    } else if (entradaUsuario === 'salir' || entradaUsuario === 'volver') {
      return entradaUsuario;
    }

    const entradavalida = ValidarCaracteresAceptado(entradaUsuario, 'entero');

    if (!entradavalida) {
      console.log(mensajesTexto.entradaInvalida);
      continue;
    }

    const stock = Number(entradavalida);

    console.log(mensajesTexto.stockConfirmado, stock);
    return stock;
  }
}
