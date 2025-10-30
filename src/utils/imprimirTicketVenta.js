import chalk from 'chalk';
import { FormatoDecimalString } from './validacionesYFormatos.js';

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
    console.log(`${producto.cantidad} x ${FormatoDecimalString(producto.precio)}`);

    if (producto.tienePromocion) {
      console.log(`Subtotal sin descuento: ${FormatoDecimalString(producto.subTotalSinDescuento)}`);
      console.log(`${producto.descripcionPromocion}: ${FormatoDecimalString(producto.montoDescuento)}`);
      console.log(`SubTotal a pagar: ${FormatoDecimalString(producto.subTotalAPagar)}`);
    } else {
      console.log(`Subtotal: ${FormatoDecimalString(producto.subTotalAPagar)}`);
    }
    console.log('-------------------------------');
  }

  if (venta.subtotalDescuento > 0) {
    console.log(`TOTAL SIN DESCUENTO: ${FormatoDecimalString(venta.subtotalSinDescuento)}`);
    console.log(`TOTAL DESCUENTOs: ${FormatoDecimal(venta.subtotalDescuento)}`);
  }

  console.log(chalk.bold(`IMPORTE TOTAL: ${FormatoDecimalString(venta.totalAPagar)}`));
  console.log(`Recibimos: ${FormatoDecimalString(venta.pago)}`);
  console.log(`Vuelto: ${FormatoDecimalString(venta.vuelto)}`);
  console.log('-------------------------------');
}
