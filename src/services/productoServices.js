import promptSync from 'prompt-sync';
const prompt = promptSync();

export function TraerProductoPorID(listaProductos, idIngresado) {
  const producto = listaProductos.find((producto) => producto.id === idIngresado);
  return producto;
}

export function BuscarProductoPorNombre(listaProductos, nombreProducto) {
  let producto = listaProductos.find((producto) => producto.nombre.toLowerCase() === nombreProducto);
  return producto;
}

export function TraerProductosPorCategoria(listaProductos, categoriaSeleccionada) {
  let productos = listaProductos.filter((producto) => producto.categoria === categoriaSeleccionada);
  return productos;
}

export function AgregarProductoAlStock(listaProductos, producto) {
  const productoNuevo = {
    id: producto.id,
    nombre: producto.nombre,
    categoria: producto.categoria,
    precio: producto.precio,
    stock: producto.stock,
  };

  listaProductos.push(productoNuevo);

  return productoNuevo;
}

/* REVISAR esto porque el ID es igual a la longitud de la base de datos + 1, igual que en el 
 id de la funcion GenerarId de de la venta. Modificarlas!!!
 deberia ser idproducto = String(listaproductos.length + 1) */

export function GenerarID(listaProductos) {
  const idMayor = BuscarIdMayor(listaProductos);

  const idGenerado = idMayor + 1;

  return String(idGenerado);
}

function BuscarIdMayor(listaProductos) {
  if (listaProductos.length === 0) {
    return 0;
  } else {
    return listaProductos.reduce((mayorValorId, producto) => {
      const idActual = Number(producto.id);
      if (mayorValorId > producto.id) {
        return mayorValorId;
      } else {
        return idActual;
      }
    }, 0);
  }
}

export function GenerarListaDeProductosDisponibles(listaProductos, mensajesTexto) {
  return listaProductos.filter((producto) => producto.stock > 0);
}

export function ActualizarStock(listaProductos, productosVendidos, mensajesTextos) {
  for (let i = 0; i < productosVendidos.length; i++) {
    let productoVendido = productosVendidos[i];

    let productoEnStock = listaProductos.find((producto) => producto.id === productoVendido.id);

    if (productoEnStock) {
      productoEnStock.stock -= productoVendido.cantidad;
    } else {
      console.log(mensajesTextos.productoEncontrado + '.' + `idProducto: ${productoVendido.id}`);
    }
  }
}
