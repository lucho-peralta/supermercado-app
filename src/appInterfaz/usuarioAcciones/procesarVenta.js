import promptSync from 'prompt-sync';
const prompt = promptSync();

import { GenerarListaDeProductosDisponibles, ActualizarStock } from '../../services/productoServices.js';
import { GenerarDetalleVenta, RegistrarVenta } from '../../services/ventaServices.js';
import { ValidarCaracteresAceptado } from '../../utils/validacionesYFormatos.js';
import { CrearListaOpcionesValidas, ImprimirOpcionesProductos } from '../../utils/opciones.js';
import { AplicarPromocion } from '../../services/promocionServices.js';

export function ProcesarVenta(listaProductos, listaPromociones, promptsTexto, mensajesTexto) {
  const resultadoRegistracion = RegistrarProductos(listaProductos, promptsTexto, mensajesTexto);
  if (resultadoRegistracion === 'salir' || resultadoRegistracion === 'volver') {
    return resultadoRegistracion;
  }

  const productosConPromociones = AplicarPromocion(listaPromociones, resultadoRegistracion);
  const detalleVenta = GenerarDetalleVenta(productosConPromociones);
  console.log(detalleVenta); //eliminar, funcion bien.
  const pago = PedirPago(promptsTexto, mensajesTexto, detalleVenta.totalAPagar);
  const vuelto = GenerarVuelto(detalleVenta.totalAPagar, pago);
  const ventaConfirmada = RegistrarVenta(detalleVenta, pago, vuelto);
  const stockActualizado = ActualizarStock(listaProductos, resultadoRegistracion, mensajesTexto);
  return ventaConfirmada;
}

//// ---------------------------------------

// funcion registrar venta
function RegistrarProductos(listaProductos, promptsTexto, mensajesTexto) {
  let productosVendidos = [];

  while (true) {
    const productosConStock = GenerarListaDeProductosDisponibles(listaProductos);
    const opcionesValidas = CrearListaOpcionesValidas(productosConStock);
    ImprimirOpcionesProductos(productosConStock);

    const producto = SeleccionarProducto(opcionesValidas, productosConStock, promptsTexto, mensajesTexto);

    if (producto === 'salir' || producto === 'volver') {
      return producto;
    }

    const cantidadVendida = IngresarCantidadVendida(promptsTexto, mensajesTexto);

    if (cantidadVendida === 'salir' || cantidadVendida === 'volver') {
      return cantidadVendida;
    }

    const productoYaRegistrado = productosVendidos.find((prod) => prod.id === producto.id);

    if (productoYaRegistrado) {
      productoYaRegistrado.cantidad += cantidadVendida;
    } else {
      producto.cantidad = cantidadVendida;
      productosVendidos.push(producto);
    }

    let ingresarOtroProducto;

    do {
      ingresarOtroProducto = prompt(promptsTexto.ingresarOtroProducto).trim().toLowerCase();
      if (ingresarOtroProducto !== 'si' && ingresarOtroProducto !== 'no') {
        console.log(mensajesTexto.entradaInvalida);
      }
    } while (ingresarOtroProducto !== 'si' && ingresarOtroProducto !== 'no');

    if (ingresarOtroProducto === 'no') {
      console.log(mensajesTexto.ventaRegistrada, productosVendidos);
      return productosVendidos;
    }
    if (ingresarOtroProducto === 'si') {
      continue;
    }
  }
}

/// funcion seleccionar Producto

function SeleccionarProducto(opcionesPermitidas, productosEnStock, promptsTexto, mensajesTexto) {
  while (true) {
    const entradaUsuario = prompt(promptsTexto.seleccioneOpcion).trim().toLowerCase();

    if (!entradaUsuario) {
      console.log(mensajesTexto.entradaInvalida);
      continue;
    } else if (entradaUsuario === 'salir' || entradaUsuario === 'volver') {
      return entradaUsuario;
    }

    const entradaValida = ValidarCaracteresAceptado(entradaUsuario, 'entero');

    if (!entradaValida || !opcionesPermitidas.includes(entradaUsuario)) {
      console.log(mensajesTexto.entradaInvalida);
      continue;
    }

    const indice = entradaValida - 1;

    const producto = productosEnStock[indice];
    // esto es de productoServices: transformar producto
    const productoSeleccionado = { id: producto.id, categoria: producto.categoria, nombre: producto.nombre, precio: producto.precio, cantidad: null };

    return productoSeleccionado;
  }
}

/// funcion ingresar cantidad

function IngresarCantidadVendida(promptsTexto, mensajesTexto) {
  while (true) {
    const entradaCantidad = prompt(promptsTexto.ingreseCantVendida).trim();

    if (!entradaCantidad) {
      console.log(mensajesTexto.entradaInvalida);
      continue;
    } else if (entradaCantidad === 'salir' || entradaCantidad === 'volver') {
      return entradaCantidad;
    }

    const cantidadValida = ValidarCaracteresAceptado(entradaCantidad, 'entero');

    if (!cantidadValida || Number(cantidadValida) < 1) {
      console.log(mensajesTexto.entradaInvalida);
      continue;
    }

    return Number(cantidadValida);
  }
}

function PedirPago(promptsTexto, mensajesTexto, totalAPagar) {
  while (true) {
    const entradausuario = prompt('Ingrese el pago del cliente: ').trim();

    if (!entradausuario) {
      console.log(mensajesTexto.entradaInvalida);
      continue;
    }

    const entradaValida = ValidarCaracteresAceptado(entradausuario, 'decimal');

    if (!entradaValida) {
      console.log(mensajesTexto.entradaInvalida);
      continue;
    }

    const pago = Number(entradaValida);

    if (pago < totalAPagar) {
      console.log(`el monto ingresado  debe ser igual o superior a ${totalAPagar} `);
      continue;
    }

    console.log(`El pago ingresado es: ${pago}`);

    let confirmacion;

    do {
      confirmacion = prompt(promptsTexto.confirmePago).trim().toLowerCase();
      if (confirmacion !== 'si' && confirmacion !== 'no') {
        console.log(mensajesTexto.entradaInvalida);
      }
    } while (confirmacion !== 'si' && confirmacion !== 'no');

    if (confirmacion === 'no') {
      continue;
    }
    return pago;
  }
}

function GenerarVuelto(totalVenta, pagoRealizado) {
  const vuelto = pagoRealizado - totalVenta;
  return vuelto;
}
