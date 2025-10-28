export const detallesVentasEnBruto = [
  {
    idOperacion: '1',
    fechaOperacion: '11/11/2025',
    productos: [
      {
        id: '1',
        nombre: 'Agua',
        precio: 100,
        cantidad: 3,
        categoria: 'Bebida',
        tipoPromocion: 'cantidad',
        descripcionPromocion: 'Dto x Cantidad: 15%',
        porcentajeDescuento: 15,
        montoDescuento: 45,
        subtotalSinDescuento: 300,
        subtotalDescuento: 45,
        totalAPagar: 255,
      },
      {
        id: '2',
        nombre: 'Carne',
        precio: 500,
        cantidad: 2,
        categoria: 'Carniceria',
        tipoPromocion: 'categoria',
        descripcionPromocion: 'Dto x Categoria: 10%',
        porcentajeDescuento: 10,
        montoDescuento: 100,
        subtotalSinDescuento: 1000,
        subtotalDescuento: 100,
        totalAPagar: 900,
      },
    ],
    totalSinDescuento: 1300,
    totalDescuento: 145,
    totalConDescuento: 1155,
  },
];

export const ventasRegistradas = [];
// {
//   idOperacion: '3',
//   dia: '28',
//   mes: '10',
//   anio: '2025',
//   fechaOperacion: '28/10/2025',
//   productos: [
//     {
//       id: '1',
//       nombre: 'Pan',
//       precio: 200,
//       cantidad: 2,
//       categoria: 'Panaderia',
//       tipoPromocion: null,
//       descripcionPromocion: null,
//       porcentajeDescuento: 0,
//       montoDescuento: 0,
//       subTotalSinDescuento: 400,
//       subTotalAPagar: 400
//     },
//     {
//       id: '2',
//       nombre: 'Jugo',
//       precio: 150,
//       cantidad: 4,
//       categoria: 'Bebida',
//       tipoPromocion: 'cantidad',
//       descripcionPromocion: 'Dto x Cantidad: 10%',
//       porcentajeDescuento: 10,
//       montoDescuento: 60,
//       subTotalSinDescuento: 600,
//       subTotalAPagar: 540
//     }
//   ],
//   totalSinDescuento: 1000,
//   totalDescuento: 60,
//   totalConDescuento: 940,
//   pago: 1000,
//   vuelto: 60
// }
