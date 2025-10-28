import promptSync from 'prompt-sync';
const prompt = promptSync();

//FUNCIONES DEL MENU

export function GenerarYMostrarOpcionesMenu(idMenu, contenidoMenu) {
  const menuActual = buscarMenuPorId(idMenu, contenidoMenu);
  ImprimirOpciones(menuActual);
  const opcionesMenu = CrearListaOpcionesValidas(menuActual.opciones);
  return opcionesMenu;
}

//------
function buscarMenuPorId(idMenu, contenidoMenu) {
  return contenidoMenu.find((elementoArr) => elementoArr.id === idMenu);
}

//------

export function ImprimirOpciones(contenido) {
  console.log(contenido.titulo);

  contenido.opciones.forEach((opcion, indice) => {
    console.log(`${indice + 1}: ${opcion}`);
  });
}

// --------

export function CrearListaOpcionesValidas(listaOpciones) {
  const listaOpcionesValidas = listaOpciones.map((opcion, indice) => String(indice + 1));
  return listaOpcionesValidas;
}

export function ImprimirOpcionesProductos(listaProductos) {
  listaProductos.forEach((producto, indice) => {
    console.log(`${indice + 1}: ${producto.nombre}`);
  });
}
