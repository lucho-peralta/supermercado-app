import promptSync from 'prompt-sync';
const prompt = promptSync();
import { mensajes, textoPrompts } from '../../constantes/mensajesYPrompts.js';
import { estructuraMenu } from '../../constantes/contenidoMenu.js';
import { GenerarYMostrarOpcionesMenu } from '../../utils/opciones.js';
import { MenuResponsableInventario } from './menuResponsableInventario.js';
import { MenuCajero } from './menuCajero.js';
import { MenuGerenteVentas } from './menuGerenteVentas.js';

export function MenuIT(usuarioRol) {
  while (true) {
    const idMenu = 0;
    const listaOpcionesValidas = GenerarYMostrarOpcionesMenu(idMenu, estructuraMenu);

    let pedirEntrada = true;
    let entradaUsuario;

    while (pedirEntrada) {
      entradaUsuario = prompt(textoPrompts.seleccioneOpcion, mensajes).trim().toLowerCase();

      if (!entradaUsuario) {
        console.log(mensajes.entradaInvalida);
        continue;
      }

      if (entradaUsuario === 'salir') {
        return 'salir';
      }

      if (!listaOpcionesValidas.includes(entradaUsuario)) {
        console.log(mensajes.entradaInvalida);
        continue;
      }

      pedirEntrada = false;
    }

    let opcionMenu;

    switch (entradaUsuario) {
      case '1':
        opcionMenu = MenuResponsableInventario(usuarioRol);
        break;
      case '2':
        opcionMenu = MenuCajero(usuarioRol);
        break;
      case '3':
        opcionMenu = MenuGerenteVentas(usuarioRol);
        break;
      default:
        console.log(mensajes.entradaInvalida);
    }

    if (opcionMenu === 'volver') {
      continue;
    }
    if (opcionMenu === 'salir') {
      return 'salir';
    }
  }
}
