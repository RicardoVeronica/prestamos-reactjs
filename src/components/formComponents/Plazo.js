function Plazo({ setPlazo }) {
  return (
    <div>
      <label>Plazo para Pagar</label>
      <select
        className="u-full-width"
        onBlur={(e) => setPlazo(parseInt(e.target.value))}
      >
        <option value="">Seleccionar</option>
        <option value="3">3 meses</option>
        <option value="6">6 meses</option>
        <option value="12">12 meses</option>
        <option value="24">24 meses</option>
      </select>
    </div>
  );
}

export default Plazo;
