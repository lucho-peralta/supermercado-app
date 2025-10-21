import promptSync from 'prompt-sync';
const prompt = promptSync();

import { ImprimirOpciones, CrearListaOpcionesValidas, ValidarEntrada } from '../utils/opciones.js';
import { FormatearEntrada } from '../utils/formatearInput.js';

//MENU INICIO.

export function menuInicial(menu, textoPrompt, mensajes) {
  ImprimirOpciones(menu);
  console.log(mensajes.salirDelMenu);
  const listaOpciones = CrearListaOpcionesValidas(menu.opciones);

  while (true) {
    const entrada = FormatearEntrada(textoPrompt.seleccionarOpcion, mensajes);

    if (entrada === 'salir') {
      return 'salir';
    }

    const eleccionUsuario = ValidarEntrada(listaOpciones, entrada);
    if (eleccionUsuario === null) {
      console.log(mensajes.entradaInvalida);
      continue;
    } else {
      return eleccionUsuario;
    }
  }
}
