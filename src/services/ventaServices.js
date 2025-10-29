import { ventasRegistradas } from '../basesDatos/ventas.js'; //pasarlo como argumento desde Menu cajero
// detallesVentasEnBruto

export function GenerarDetalleVenta(productosRegistrados) {
  const idOperacion = GenerarIdVenta(ventasRegistradas);

  const fechaOperacion = GenerarFecha();
  const productoConSubtotales = GenerarSubtotalesPorProducto(productosRegistrados);
  const resumenVenta = GenerarTotalesVenta(productoConSubtotales);

  const detalleVenta = {
    idOperacion: idOperacion,
    fechaCompleta: fechaOperacion.fechaCompleta,
    dia: fechaOperacion.dia,
    mes: fechaOperacion.mes,
    anio: fechaOperacion.anio,
    productos: productoConSubtotales,
    subtotalSinDescuento: resumenVenta.totalVenta,
    subtotalDescuento: resumenVenta.totalDescuento,
    totalAPagar: resumenVenta.totalAPagar,
  };

  return detalleVenta;
}

export function RegistrarVenta(ventaConfirmada, pagoConfirmado, vueltoConfirmado) {
  ventaConfirmada.pago = pagoConfirmado;
  ventaConfirmada.vuelto = vueltoConfirmado;

  ventasRegistradas.push(ventaConfirmada);

  return ventaConfirmada;
}

/* REVISAR esto porque el ID es igual a la longitud de la base de datos + 1, igual que en el 
 id de la funcion GenerarId de productServices. Modificarlas!!!
 deberia ser idOperacion = String(detallesVentasEnBruto.length + 1)*/

function GenerarIdVenta(listaVentasRegistradas) {
  const idMayor = BuscarIdMayor(listaVentasRegistradas);

  const idGenerado = idMayor + 1;

  return String(idGenerado);
}

function BuscarIdMayor(listaVentasRegistradas) {
  if (listaVentasRegistradas.length === 0) {
    return 0;
  } else {
    return listaVentasRegistradas.reduce((mayorValorId, venta) => {
      const idActual = Number(venta.idOperacion);
      if (mayorValorId > idActual) {
        return mayorValorId;
      } else {
        return idActual;
      }
    }, 0);
  }
}

function GenerarFecha() {
  let ahora = new Date();

  let dia = ahora.getDate();
  if (dia < 10) {
    dia = '0' + dia;
  } else {
    dia = String(dia);
  }

  let mes = ahora.getMonth() + 1;
  if (mes < 10) {
    mes = '0' + mes;
  } else {
    mes = String(mes);
  }

  let anio = String(ahora.getFullYear());

  let fechaCompleta = `${dia}/${mes}/${anio}`;

  return { dia, mes, anio, fechaCompleta };
}

function GenerarSubtotalesPorProducto(productosRegistrados) {
  for (let i = 0; i < productosRegistrados.length; i++) {
    let producto = productosRegistrados[i];

    const subTotalSinDescuento = producto.precio * producto.cantidad;
    const subTotalAPagar = subTotalSinDescuento - producto.montoDescuento;

    producto.subTotalSinDescuento = subTotalSinDescuento;
    producto.subTotalAPagar = subTotalAPagar;
  }
  return productosRegistrados;
}

function GenerarTotalesVenta(productosConSubtotales) {
  let totalVenta = 0;
  let totalDescuento = 0;
  let totalAPagar = 0;

  for (let i = 0; i < productosConSubtotales.length; i++) {
    const producto = productosConSubtotales[i];

    totalVenta += producto.subTotalSinDescuento;
    totalDescuento += producto.montoDescuento;
    totalAPagar += producto.subTotalAPagar;
  }

  return { totalVenta: totalVenta, totalDescuento: totalDescuento, totalAPagar: totalAPagar };
}
