import chalk from 'chalk';

export function ImprimirTicket(venta) {
  console.log('-------------------------------');
  console.log(chalk.bold('       SUPERMERCADOAPP       '));
  console.log('-------------------------------');
  console.log('Ticket de Venta');
  console.log(`Fecha: ${venta.fechaCompleta}`);
  console.log('-------------------------------');

  for (let i = 0; i < venta.productos.length; i++) {
    let producto = venta.productos[i];

    console.log(`${producto.nombre}`);
    console.log(`${producto.cantidad} x ${producto.precio}`);

    if (producto.tienePromocion) {
      console.log(`Subtotal sin descuento: ${producto.subTotalSinDescuento}`);
      console.log(`${producto.descripcionPromocion}: ${producto.montoDescuento}`);
      console.log(`SubTotal a pagar: ${producto.subTotalAPagar}`);
    } else {
      console.log(`Subtotal: ${producto.subTotalAPagar}`);
    }
    console.log('-------------------------------');
  }

  if (venta.subtotalDescuento > 0) {
    console.log(`TOTAL SIN DESCUENTO: ${venta.subtotalSinDescuento}`);
    console.log(`TOTAL DESCUENTOs: ${venta.subtotalDescuento}`);
  }

  console.log(chalk.bold(`IMPORTE TOTAL: ${venta.totalAPagar}`));
  console.log(`Recibimos: ${venta.pago}`);
  console.log(`Vuelto: ${venta.vuelto}`);
  console.log('-------------------------------');
}
