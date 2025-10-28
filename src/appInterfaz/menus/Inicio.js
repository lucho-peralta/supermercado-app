import { IngresarDNI, IngresarContrasena } from '../usuarioAcciones/iniciarSesion.js';
import { ValidarUsuario } from '../../services/usuarioServices.js';
import { usuarios } from '../../basesDatos/usuarios.js';
import { textoPrompts, mensajes } from '../../constantes/mensajesYPrompts.js';

export function IniciarSesion() {
  console.log(mensajes.saludoBienvenida);
  console.log(mensajes.ingreseUsuarioContrasena);

  while (true) {
    const dni = IngresarDNI(textoPrompts, mensajes);

    if (dni === 'salir') {
      return 'salir';
    }
    const contrasena = IngresarContrasena(textoPrompts, mensajes);

    if (contrasena === 'salir') {
      return 'salir';
    }
    const usuarioValido = ValidarUsuario(dni, contrasena, usuarios);
    if (!usuarioValido) {
      console.log(mensajes.inicioSesionInvalida);
      continue;
    }
    return usuarioValido;
  }
}
