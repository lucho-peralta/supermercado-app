import promptSync from 'prompt-sync';
const prompt = promptSync();
import { GenerarYMostrarOpcionesMenu } from '../../utils/opciones.js';
import { ProcesarVenta } from '../usuarioAcciones/procesarVenta.js';
import { stockProductos } from '../../basesDatos/stockProductos.js';
import { promocionesVigentes } from '../../basesDatos/promociones.js';
import { estructuraMenu } from '../../constantes/contenidoMenu.js';
import { mensajes, textoPrompts } from '../../constantes/mensajesYPrompts.js';
import { ImprimirTicket } from '../../utils/imprimirTicketVenta.js';

//MENU INICIO.

export function MenuCajero(usuarioRol) {
  while (true) {
    const idMenu = 2;
    const listaOpcionesValidas = GenerarYMostrarOpcionesMenu(idMenu, estructuraMenu);

    let registarVenta = true;
    let entradaUsuario;

    while (registarVenta) {
      entradaUsuario = prompt(textoPrompts.seleccioneOpcion).trim().toLowerCase();

      if (!entradaUsuario) {
        console.log(mensajes.entradaInvalida);
        continue;
      }

      if (entradaUsuario === 'salir') {
        return 'salir';
      }

      if (entradaUsuario === 'volver') {
        if (usuarioRol === 'IT') {
          return 'volver';
        } else {
          console.log(mensajes.entradaInvalida);
          continue;
        }
      }

      if (!listaOpcionesValidas.includes(entradaUsuario)) {
        console.log(mensajes.entradaInvalida);
        continue;
      }

      registarVenta = false;
    }

    let resultadoOpcion;

    switch (entradaUsuario) {
      case '1':
        resultadoOpcion = ProcesarVenta(stockProductos, promocionesVigentes, textoPrompts, mensajes);
        if (resultadoOpcion === 'salir') {
          return 'salir';
        }

        if (resultadoOpcion === 'volver') {
          break;
        }

        if (resultadoOpcion) {
          const ticket = ImprimirTicket(resultadoOpcion);
        }
        break;

      default:
        console.log('default desde menu cajero');
        break;
    }
  }
}
