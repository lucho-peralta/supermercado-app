export function ImprimirTicket(venta) {
  console.log('-------------');
  console.log('SupermercadoApp');
  console.log('Ticket de Venta');
  console.log(`Fecha: ${venta.fechaCompleta}`);
  console.log('-------------');

  for (let i = 0; i < venta.productos.length; i++) {
    let producto = venta.productos[i];

    console.log(`${producto.nombre}`);
    console.log(`${producto.cantidad} x ${producto.precio}`);
    console.log(`Subtotal sin descuento: ${producto.subTotalSinDescuento}`);

    if (producto.descripcionPromocion && producto.montoDescuento > 0) {
      console.log(`${producto.descripcionPromocion}: ${producto.montoDescuento}`);
    }

    console.log(`Total a pagar: ${producto.subTotalAPagar}`);
  }
  console.log('-------------');
  console.log(`TOTAL SIN DESCUENTO: ${venta.totalSinDescuento}`);
  console.log(`TOTAL DESCUENTO: ${venta.totalDescuento}`);
  console.log(`TOTAL A PAGAR: ${venta.totalAPagar}`);
  console.log(`PAGO:${venta.pago}`);
  console.log(`VUELTO:${venta.vuelto}`);
}
