import promptSync from 'prompt-sync';
const prompt = promptSync();

import { IniciarSesion } from './src/appInterfaz/menus/Inicio.js';
import { MenuIT } from './src/appInterfaz/menus/menuIT.js';
import { MenuCajero } from './src/appInterfaz/menus/menuCajero.js';
import { MenuGerenteComercial } from './src/appInterfaz/menus/menuGerenteComercial.js';
import { MenuResponsableInventario } from './src/appInterfaz/menus/menuResponsableInventario.js';
import { mensajes } from './src/constantes/mensajesYPrompts.js';

function main() {
  let navegarApp = true;
  let usuario = null;

  while (navegarApp) {
    if (!usuario) {
      usuario = IniciarSesion();

      if (usuario === 'salir') {
        console.log(mensajes.saludoDespedida);
        navegarApp = false;
        return;
      }
    }
    const rolUsuario = usuario.rol;

    let opcionMenu;

    switch (rolUsuario) {
      case 'inventario':
        opcionMenu = MenuResponsableInventario(rolUsuario);
        break;

      case 'cajero':
        opcionMenu = MenuCajero(rolUsuario);
        break;

      case 'comercial':
        opcionMenu = MenuGerenteComercial(rolUsuario);
        break;

      case 'IT':
        opcionMenu = MenuIT(rolUsuario);
        break;

      default:
        console.log('mensaje desde el default de Main');
        navegarApp = false;
        break;
    }

    if (opcionMenu === 'salir') {
      navegarApp = false;
    }
  }
  console.log(mensajes.saludoDespedida);
}

main();
