//OPCION AGREGAR PRODUCTO.
import { BuscarProductoPorNombre } from '../services/productoServices.js';
import { AgregarProductoAlStock, GenerarID } from '../services/productoServices.js';
import { CrearListaOpcionesValidas, ValidarEntrada, ImprimirOpciones } from '../utils/opciones.js';
import { FormatearEntrada } from '../utils/formatearInput.js';

export function AgregarProducto(listaProductos, listaCategoria, textoPrompt, mensajes) {
  console.log(mensajes.ingreseDatosNuevoProducto + '' + mensajes.opcionSalirVolver);

  //nombre
  const nombreConfirmado = IngresarNombre(listaProductos, textoPrompt, mensajes);

  if (nombreConfirmado === 'salir') {
    return 'salir';
  } else if (nombreConfirmado === null) {
    return null;
  }

  //Categoria
  const categoriaConfirmada = IngresarCategoria(listaCategoria, textoPrompt, mensajes);

  if (categoriaConfirmada === 'salir') {
    return 'salir';
  } else if (categoriaConfirmada === null) {
    return null;
  }

  // precio

  const precioConfirmado = IngresarPrecio(textoPrompt, mensajes);
  if (precioConfirmado === 'salir') {
    return 'salir';
  } else if (precioConfirmado === null) {
    return null;
  }
  //stock

  const stockConfirmado = IngresarStock(textoPrompt, mensajes);
  if (stockConfirmado === 'salir') {
    return 'salir';
  } else if (stockConfirmado === null) {
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

  AgregarProductoAlStock(listaProductos, nuevoProducto);

  return nuevoProducto;
}

// NUEVO PRODUCTO.

export function IngresarNombre(listaProductos, textoPrompt, mensajes) {
  while (true) {
    const entrada = FormatearEntrada(textoPrompt.ingreseNombre, mensajes);

    if (entrada === 'salir') {
      return 'salir';
    } else if (entrada === 'volver') {
      return null;
    }

    const existeProducto = BuscarProductoPorNombre(listaProductos, entrada);

    if (existeProducto) {
      console.log(mensajes.productoYaExiste);
      continue;
    }

    console.log(mensajes.nombreProductoConfirmado);
    return entrada;
  }
}

export function IngresarCategoria(listaCategorias, textoPrompt, mensajes) {
  ImprimirOpciones(listaCategorias, mensajes);

  const opciones = CrearListaOpcionesValidas(listaCategorias.opciones);
  console.log('Opciones válidas:', opciones);
  while (true) {
    const entrada = FormatearEntrada(textoPrompt.seleccionarOpcion, mensajes);

    if (entrada === 'salir') {
      return 'salir';
    } else if (entrada === 'volver') {
      return null;
    }

    const opcionElegida = ValidarEntrada(opciones, entrada);

    if (opcionElegida === null) {
      console.log(mensajes.opcionInvalida);
      continue;
    }
    const categoria = listaCategorias.opciones[opcionElegida - 1];

    console.log(mensajes.categoriaConfirmada);
    console.log('Opción elegida final:', opcionElegida);
    return categoria;
  }
}

export function IngresarPrecio(textoPrompt, mensajes) {
  while (true) {
    const entrada = FormatearEntrada(textoPrompt.ingresePrecio, mensajes);

    if (entrada === 'salir') {
      return 'salir';
    } else if (entrada === 'volver') {
      return null;
    }

    const precio = Number(entrada);

    if (isNaN(precio) || precio < 0) {
      console.log(mensajes.entradaInvalida);
      continue;
    }

    return precio;
  }
}

export function IngresarStock(textoPrompt, mensajes) {
  while (true) {
    const entrada = FormatearEntrada(textoPrompt.ingreseStock, mensajes);

    if (entrada === 'salir') {
      return 'salir';
    } else if (entrada === 'volver') {
      return null;
    }

    const stock = Number(entrada);

    if (!Number.isInteger(stock) || stock < 0) {
      console.log(mensajes.entradaInvalida);
      continue;
    }

    return stock;
  }
}
