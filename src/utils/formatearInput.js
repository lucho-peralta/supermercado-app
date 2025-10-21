import promptSync from 'prompt-sync';
const prompt = promptSync();

//
export function FormatearEntrada(textoPrompt, mensajes) {
  while (true) {
    let entrada = prompt(textoPrompt);

    // CRÍTICO: Manejar null/undefined primero. Esto previene el TypeError.
    if (entrada === null || typeof entrada === 'undefined') {
      // En caso de cancelación de prompt (Ctrl+C o fallo), devolvemos null
      return null;
    }

    // Limpieza y estandarización
    entrada = entrada.trim().toLowerCase();

    // Validar si la entrada está vacía después del trim
    if (entrada === '') {
      console.log(mensajes.entradaInvalida);
      continue; // Volver a pedir input si está vacía
    }

    return entrada; // Devolver la entrada limpia
  }
}
