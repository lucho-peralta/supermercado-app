export function ValidarUsuario(dni, contrasena, listaUsuarios) {
  const usuarioValido = listaUsuarios.find((usuario) => usuario.dni === dni && usuario.contrasena === contrasena);
  return usuarioValido;
}
