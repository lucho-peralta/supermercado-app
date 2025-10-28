export function AplicarPromocion(promociones, productos) {
  for (let i = 0; i < productos.length; i++) {
    const producto = productos[i];
    const datosPromocion = DefinirDatosPromocion(promociones, producto);

    if (datosPromocion.tipoPromocion !== null) {
      producto.tipoPromocion = datosPromocion.tipoPromocion;
      producto.descripcionPromocion = datosPromocion.descripcionPromocion;
      producto.porcentajeDescuento = datosPromocion.porcentajeDescuento;
      producto.montoDescuento = datosPromocion.montoDescuento;
    } else {
      producto.tipoPromocion = null;
      producto.descripcionPromocion = null;
      producto.porcentajeDescuento = 0;
      producto.montoDescuento = 0;
    }
  }

  return productos;
}

function DefinirDatosPromocion(promociones, producto) {
  const promocionCategoria = BuscarPromocionPorCategoria(promociones, producto);
  const promocionCantidad = BuscarPromocionPorCantidad(promociones, producto);

  let datosPromocion = {
    tipoPromocion: null,
    descripcionPromocion: null,
    porcentajeDescuento: 0,
    montoDescuento: 0,
  };

  if (promocionCategoria) {
    const porcentaje = promocionCategoria.descuento * 100;
    const montoDescuento = producto.precio * producto.cantidad * promocionCategoria.descuento;
    const descripcion = `Dto x Categoria (${porcentaje}%)`;

    datosPromocion = {
      tipoPromocion: 'Categoria',
      descripcionPromocion: descripcion,
      porcentajeDescuento: porcentaje,
      montoDescuento: montoDescuento,
    };
    return datosPromocion;
  }

  if (promocionCantidad) {
    const porcentaje = promocionCantidad.descuento * 100;
    const montoDescuento = producto.precio * producto.cantidad * promocionCantidad.descuento;
    const descripcion = `Dto x Cantidad (${porcentaje}%)`;

    datosPromocion = {
      tipoPromocion: 'Cantidad',
      descripcionPromocion: descripcion,
      porcentajeDescuento: porcentaje,
      montoDescuento: montoDescuento,
    };
    return datosPromocion;
  }

  return datosPromocion;
}

function BuscarPromocionPorCategoria(promociones, producto) {
  for (let i = 0; i < promociones.length; i++) {
    const promocion = promociones[i];

    if (promocion.tipo === 'Categoria' && promocion.categoria === producto.categoria) {
      return promocion;
    }
  }
  return null;
}

function BuscarPromocionPorCantidad(promociones, producto) {
  for (let i = 0; i < promociones.length; i++) {
    const promocion = promociones[i];

    if (promocion.tipo === 'Cantidad' && promocion.producto === producto.nombre && producto.cantidad >= promocion.cantidadMinima) {
      return promocion;
    }
  }
  return null;
}
