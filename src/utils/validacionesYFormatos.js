export function ValidarCaracteresAceptado(entrada, tipoDato) {
  if (tipoDato === 'entero') {
    return ValidarEntero(entrada);
  }
  if (tipoDato === 'decimal') {
    return ValidarDecimal(entrada);
  }
  if (tipoDato === 'alfanumerico') {
    return ValidarAlfanumerico(entrada);
  }
  return null;
}

function ValidarEntero(entrada) {
  const caracteresValidos = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  for (let i = 0; i < entrada.length; i++) {
    let caracter = entrada[i];
    if (!caracteresValidos.includes(caracter)) {
      return null;
    }
  }

  if (entrada.length > 1 && entrada[0] === '0') {
    return null;
  }

  return entrada;
}

function ValidarDecimal(entrada) {
  const caracteresValidos = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
  let cantPuntos = 0;
  const ultimaPosicion = entrada.length - 1;

  if (entrada[0] === '.' || entrada[ultimaPosicion] === '.') {
    return null;
  }

  for (let i = 0; i < entrada.length; i++) {
    let caracter = entrada[i];
    if (!caracteresValidos.includes(caracter)) {
      return null;
    }
    if (caracter === '.') {
      cantPuntos += 1;
      if (cantPuntos > 1) {
        return null;
      }
    }
  }
  return entrada;
}

function ValidarAlfanumerico(entrada) {
  /* prettier-ignore */
  const caracteresNumericos = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  /* prettier-ignore */
  const letrasMinusculas = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  /* prettier-ignore */
  const letrasMayusculas = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  let tieneNumero = false;
  let tieneMayuscula = false;
  let tieneMinuscula = false;

  for (let i = 0; i < entrada.length; i++) {
    let caracter = entrada[i];
    if (caracteresNumericos.includes(caracter)) {
      tieneNumero = true;
    } else if (letrasMayusculas.includes(caracter)) {
      tieneMayuscula = true;
    } else if (letrasMinusculas.includes(caracter)) {
      tieneMinuscula = true;
    } else {
      return null;
    }
  }
  if (tieneNumero && tieneMayuscula && tieneMinuscula) {
    return entrada;
  }
}

export function FormatoDecimalString(numero) {
  return numero.toFixed(2);
}
