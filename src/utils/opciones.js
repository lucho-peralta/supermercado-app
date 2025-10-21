import promptSync from 'prompt-sync';
const prompt = promptSync();

//FUNCIONES DEL MENU

export function ImprimirOpciones(contenido) {
  console.log(contenido.titulo);

  contenido.opciones.forEach((opcion, indice) => {
    console.log(`${indice + 1}: ${opcion}`);
  });
}

// --------

export function CrearListaOpcionesValidas(listaOpciones) {
  const listaOpcionesValidas = listaOpciones.map((opcion, indice) => indice + 1);
  return listaOpcionesValidas;
}

// -------

export function ValidarEntrada(listaOpciones, opcionElegida) {
  const numero = Number(opcionElegida);

  if (Number.isInteger(numero) && listaOpciones.includes(numero)) {
    return numero;
  }

  return null;
}
