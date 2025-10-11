// const productos = [
//     { nombre: "Leche", cantidad: 5, precioUnitario: 200, descuento: 500 },
//     { nombre: "Queso", cantidad: 5, precioUnitario: 200, descuento: 500 },
//     { nombre: "Manteca", cantidad: 2, precioUnitario: 350, descuento: 0 }
// ];

// // Función para generar la información del ticket
// function generarTicket(productos) {
//     let subtotal = 0;
//     let totalDescuentos = 0;
//     const detalle = [];

//     productos.forEach(p => {
//         const totalLinea = p.precioUnitario * p.cantidad;
//         subtotal += totalLinea;
//         totalDescuentos += p.descuento;

//         detalle.push({
//             nombre: p.nombre,
//             cantidad: p.cantidad,
//             precioUnitario: p.precioUnitario,
//             totalLinea,
//             descuento: p.descuento
//         });
//     });

//     return {
//         detalle,
//         subtotal,
//         totalDescuentos,
//         total: subtotal - totalDescuentos
//     };
// }

// // Función para imprimir el ticket
// function imprimirTicket(productos) {
//     const { detalle, subtotal, totalDescuentos, total } = generarTicket(productos);
//     const anchoProducto = 20;
//     const anchoImporte = 12;

//     console.log("Producto".padEnd(anchoProducto) + "Importe".padStart(anchoImporte));
//     console.log("-".repeat(anchoProducto + anchoImporte));

//     detalle.forEach(p => {
//         console.log(p.nombre.padEnd(anchoProducto));
//         console.log(
//             `${p.cantidad} x ${p.precioUnitario.toFixed(2)}`.padEnd(anchoProducto) +
//             p.totalLinea.toFixed(2).padStart(anchoImporte)
//         );
//         if (p.descuento > 0) {
//             console.log("dto promo".padEnd(anchoProducto) + ("-" + p.descuento.toFixed(2)).padStart(anchoImporte));
//         }
//         console.log(""); // línea en blanco
//     });

//     // Totales (solo una vez al final)
//     console.log("SUBTOTAL SIN DTO:".padEnd(anchoProducto) + subtotal.toFixed(2).padStart(anchoImporte));
//     console.log("TOTAL DESCUENTOS:".padEnd(anchoProducto) + ("-" + totalDescuentos.toFixed(2)).padStart(anchoImporte));
//     console.log("TOTAL:".padEnd(anchoProducto) + total.toFixed(2).padStart(anchoImporte));
// }

// // Ejecutar
// imprimirTicket(productos);


