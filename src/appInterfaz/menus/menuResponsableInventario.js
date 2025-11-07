import promptSync from 'prompt-sync';
const prompt = promptSync();

import { IngresarDatosNuevoProducto } from '../usuarioAcciones/agregarProducto.js';
import { BuscarProductoPorId, BuscarProductoPorCategoria } from '../usuarioAcciones/buscarProducto.js';
import { mensajes, textoPrompts } from '../../constantes/mensajesYPrompts.js';
import { AgregarProductoAlStock, BuscarProductoPorNombre } from '../../services/productoServices.js';
import { stockProductos, categoriasProductos } from '../../basesDatos/stockProductos.js';
import { estructuraMenu } from '../../constantes/contenidoMenu.js';
import { GenerarYMostrarOpcionesMenu } from '../../utils/opciones.js';
import { EncontrarProductoPorNombre } from '../usuarioAcciones/buscarProductoPorNombre.js';

export function MenuResponsableInventario(usuarioRol) {
  while (true) {
    const idMenu = 1;
    const listaOpcionesValidas = GenerarYMostrarOpcionesMenu(idMenu, estructuraMenu);

    let pedirEntrada = true;
    let entradaUsuario;

    while (pedirEntrada) {
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

      pedirEntrada = false;
    }

    let resultadoOpcion;

    switch (entradaUsuario) {
      case '1':
        console.log(stockProductos);
        break;

      case '2':
        resultadoOpcion = IngresarDatosNuevoProducto(stockProductos, categoriasProductos, textoPrompts, mensajes);
        if (resultadoOpcion === 'salir') {
          return 'salir';
        }

        if (resultadoOpcion === 'volver') {
          break;
        }

        if (resultadoOpcion) {
          const productoNuevo = AgregarProductoAlStock(stockProductos, resultadoOpcion);
          console.log(mensajes.productoAgregadoAlStock, productoNuevo);
        }

        break;

      case '3':
        resultadoOpcion = BuscarProductoPorId(stockProductos, textoPrompts, mensajes);
        if (resultadoOpcion === 'salir') {
          return 'salir';
        }
        if (resultadoOpcion === 'volver') {
          break;
        }

        console.log(mensajes.productoEncontrado, resultadoOpcion);
        break;

      case '4':
        resultadoOpcion = BuscarProductoPorCategoria(stockProductos, categoriasProductos, textoPrompts, mensajes);

        if (resultadoOpcion === 'salir') {
          return 'salir';
        }
        if (resultadoOpcion === 'volver') {
          break;
        }

        console.log(mensajes.productoPorCategoria, resultadoOpcion);
        break;

      case '5':
        resultadoOpcion = EncontrarProductoPorNombre(stockProductos);
        if (resultadoOpcion === 'salir') {
          return 'salir';
        }
        if (resultadoOpcion === 'volver') {
          break;
        }

        console.log('producto encontrado: ', resultadoOpcion);
        break;

      default:
        console.log('default desde menu inventario');
        break;
    }
  }
}
