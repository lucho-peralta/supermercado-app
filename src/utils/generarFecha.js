export function GenerarFecha() {
  let ahora = new Date();

  let dia = ahora.getDate();
  if (dia < 10) {
    dia = '0' + dia;
  } else {
    dia = String(dia);
  }

  let mes = ahora.getMonth() + 1;
  if (mes < 10) {
    mes = '0' + mes;
  } else {
    mes = String(mes);
  }

  let anio = String(ahora.getFullYear());

  let fechaCompleta = `${dia}/${mes}/${anio}`;

  return { dia, mes, anio, fechaCompleta };
}
