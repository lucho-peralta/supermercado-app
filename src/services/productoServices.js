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

export function GenerarID(listaProductos) {
  const idMayor = BuscarIdMayor(listaProductos);

  const idGenerado = idMayor + 1;

  return idGenerado;
}

function BuscarIdMayor(listaProductos) {
  if (listaProductos.length === 0) {
    return 0;
  } else {
    return listaProductos.reduce((mayorValorId, producto) => {
      if (mayorValorId > producto.id) {
        return mayorValorId;
      } else {
        return producto.id;
      }
    }, 0);
  }
}
