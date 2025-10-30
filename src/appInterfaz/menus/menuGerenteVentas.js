import promptSync from 'prompt-sync';
const prompt = promptSync();
import { GenerarYMostrarOpcionesMenu } from '../../utils/opciones.js';
import { estructuraMenu } from '../../constantes/contenidoMenu.js';
import { ReporteVentasConsolidado } from '../../services/ventaServices.js';
import { mensajes, textoPrompts } from '../../constantes/mensajesYPrompts.js';
import { ventasRegistradas } from '../../basesDatos/ventas.js';
import { ImprimirReporteConsolidado } from '../../utils/imprimirReportes.js';

export function MenuGerenteVentas() {
  while (true) {
    const idMenu = 3;
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
        resultadoOpcion = ReporteVentasConsolidado(ventasRegistradas);
        if (resultadoOpcion === 'salir') {
          return 'salir';
        }

        if (resultadoOpcion === 'volver') {
          break;
        }

        if (resultadoOpcion) {
          ImprimirReporteConsolidado(resultadoOpcion);
        }
        break;

      default:
        console.log('default desde menu gerente ventas');
        break;
    }
  }
}
