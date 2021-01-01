function Resultado({ total, plazo, cantidad }) {
  return (
    <div className="u-full-width resultado">
      <h2>Resumen</h2>
      <p>La cantidad solicitada es: ${cantidad}</p>
      <p>Plazo a pagar: {plazo} meses</p>
      <p>Sus mensualidades son de: ${(total / plazo).toFixed(2)} al meses</p>
      <p>Cantidad a total a pagar: ${total.toFixed(2)}</p>
    </div>
  );
}

export default Resultado;
