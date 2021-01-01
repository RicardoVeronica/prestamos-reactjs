export function calcularTotal(cantidad, plazo) {
  // Calcula intereses
  /*
   * Si el usuario pide prestamo de
   * 0 - 1000 interes 25%
   * 1001 - 5000 interes 20%
   * 5001 - 10000 interes 15%
   * +10000 intereses 10%
   * */
  let totalCantidad;

  if (cantidad <= 1000) totalCantidad = cantidad * 0.25;
  if (cantidad > 1000 && cantidad <= 5000) totalCantidad = cantidad * 0.2;
  if (cantidad > 5000 && cantidad <= 10000) totalCantidad = cantidad * 0.15;
  if (cantidad > 10000) totalCantidad = cantidad * 0.1;

  // Calcula el plazo
  /*
   * 3 meses + 5%
   * 6 meses + 10%
   * 12 meses + 15%
   * 24 meses + 20%
   * */
  let totalPlazo;

  if (plazo === 3) totalPlazo = cantidad * 0.05;
  if (plazo === 6) totalPlazo = cantidad * 0.1;
  if (plazo === 12) totalPlazo = cantidad * 0.15;
  if (plazo === 24) totalPlazo = cantidad * 0.2;

  return totalPlazo + totalCantidad + cantidad;
}
