export function AplicarPromocion(promociones, productos) {
  for (let i = 0; i < productos.length; i++) {
    const producto = productos[i];
    const datosPromocion = DefinirDatosPromocion(promociones, producto);

    if (datosPromocion.tienePromocion) {
      producto.tienePromocion = true;
      producto.tipoPromocion = datosPromocion.tipoPromocion;
      producto.descripcionPromocion = datosPromocion.descripcionPromocion;
      producto.porcentajeDescuento = datosPromocion.porcentajeDescuento;
      producto.montoDescuento = datosPromocion.montoDescuento;
    } else {
      producto.tienePromocion = false;
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
    tienePromocion: false,
    tipoPromocion: null,
    descripcionPromocion: null,
    porcentajeDescuento: 0,
    montoDescuento: 0,
  };

  if (promocionCategoria) {
    const porcentaje = promocionCategoria.descuento * 100;
    const montoDescuento = producto.precio * producto.cantidad * promocionCategoria.descuento;
    const descripcion = `Dto x Categoria (${porcentaje}%)`;
    tienePromocion = true;

    datosPromocion = {
      tienePromocion: true,
      tipoPromocion: 'categoria',
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
      tienePromocion: true,
      tipoPromocion: 'cantidad',
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

    if (promocion.tipo === 'categoria' && promocion.categoria.toLowerCase() === producto.categoria.toLowerCase()) {
      return promocion;
    }
  }
  return null;
}

function BuscarPromocionPorCantidad(promociones, producto) {
  for (let i = 0; i < promociones.length; i++) {
    const promocion = promociones[i];

    if (
      promocion.tipo === 'cantidad' &&
      promocion.producto.toLowerCase() === producto.nombre.toLowerCase() &&
      producto.cantidad >= promocion.cantidadMinima
    ) {
      return promocion;
    }
  }
  return null;
}
