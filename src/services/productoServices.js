import promptSync from 'prompt-sync';

const prompt = promptSync();


export const stockProductos = [
  { id: 1, nombre: "Agua", categoria: "Bebida", precio: 2000, stock: 30 },
  { id: 2, nombre: "Pan", categoria: "Panaderia", precio: 2800, stock: 40 },
  { id: 3, nombre: "Detergente", categoria: "Limpieza", precio: 2950, stock: 25 },
  { id: 4, nombre: "Asado", categoria: "Carniceria", precio: 13500, stock: 50 },
];


export function mostrarStock(listaProductos) {
  return listaProductos;
}

export function agregarProducto(listaProductos, productoNuevo) {
  const producto = listaProductos.push(productoNuevo);
  return producto;
}

export function traerProductoPorID(listaProductos, idIngresado) {
  const producto = listaProductos.find((producto) => producto.id === idIngresado);
  return producto;
}











