import { GenerarFecha } from '../utils/generarFecha.js';

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
 deberia ser idOperacion = String(ventasRegistradas.length + 1)*/

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

//// REPORTE ACUMULADO ANUAL

export function ReporteVentasConsolidado(ventas) {
  const cantidadDeVentasTotalesAnio = ventas.length;
  const cantidadMesesActuales = CantidadDeMeses();

  const ingresosTotalesAnio = CalcularIngresosTotalesAnio(ventas);
  const cantidadVentasPorMes = cantidadDeVentasTotalesAnio / cantidadMesesActuales;
  const ingresosMensualesPromedio = ingresosTotalesAnio / cantidadMesesActuales;
  const ticketPromedio = ingresosTotalesAnio / cantidadDeVentasTotalesAnio;

  return {
    cantidadDeVentasTotalesAnio: cantidadDeVentasTotalesAnio,
    IngresosTotalesAnio: ingresosTotalesAnio,
    cantidadVentasPorMes: cantidadVentasPorMes,
    ingresosMensualesPromedio: ingresosMensualesPromedio,
    ticketPromedio: ticketPromedio,
  };
}

function CantidadDeMeses() {
  const fechaActual = GenerarFecha();
  return Number(fechaActual.mes);
}

function CalcularIngresosTotalesAnio(ventas) {
  return ventas.reduce((acumulador, venta) => {
    return acumulador + venta.totalAPagar;
  }, 0);
}
