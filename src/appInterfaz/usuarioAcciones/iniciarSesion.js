import promptSync from 'prompt-sync';
const prompt = promptSync();
import { ValidarCaracteresAceptado } from '../../utils/validacionesYFormatos.js';

export function IngresarDNI(textoPrompt, mensaje) {
  while (true) {
    const entradaUsuario = prompt(textoPrompt.ingreseDni);

    if (!entradaUsuario) {
      console.log(mensaje.entradaInvalida);
      continue;
    }

    if (entradaUsuario.toLowerCase() === 'salir') {
      return 'salir';
    }

    const dniIngresado = ValidarCaracteresAceptado(entradaUsuario, 'entero');
    if (!dniIngresado || dniIngresado.length !== 8) {
      console.log(mensaje.entradaInvalida);
      continue;
    }
    return dniIngresado;
  }
}

export function IngresarContrasena(textoPrompt, mensaje) {
  while (true) {
    const entradaUsuario = prompt(textoPrompt.ingreseContrasena);

    if (!entradaUsuario) {
      console.log(mensaje.entradaInvalida);
      continue;
    }

    if (entradaUsuario.toLowerCase() === 'salir') {
      return 'salir';
    }

    const contrasenaIngresada = ValidarCaracteresAceptado(entradaUsuario, 'alfanumerico');

    if (!contrasenaIngresada || contrasenaIngresada.length < 5) {
      console.log(mensaje.entradaInvalida);
      continue;
    }

    return contrasenaIngresada;
  }
}
