import promptSync from 'prompt-sync';
const prompt = promptSync();

//
export function FormatearEntrada(textoPrompt, mensajes) {
  while (true) {
    let entrada = prompt(textoPrompt).trim().toLowerCase();

    if (entrada === '') {
      console.log(mensajes.entradaInvalida);
      continue;
    }

    return entrada;
  }
}
