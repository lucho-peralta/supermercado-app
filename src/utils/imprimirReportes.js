import { FormatoDecimalString } from './validacionesYFormatos.js';

export function ImprimirReporteConsolidado(indicadores) {
  console.log('------- REPORTE CONSOLIDADO -------');
  console.log(`Ventas Totales: ${indicadores.cantidadDeVentasTotalesAnio}`);
  console.log(`Ingresos Totales: ${FormatoDecimalString(indicadores.IngresosTotalesAnio)}`);
  console.log(`Ingresos Mensuales Promedio: ${FormatoDecimalString(indicadores.ingresosMensualesPromedio)}`);
  console.log(`Ticket Promedio: ${FormatoDecimalString(indicadores.ticketPromedio)}`);
}
