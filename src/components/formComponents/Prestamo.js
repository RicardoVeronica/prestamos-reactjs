function Prestamo({ setCantidad }) {
  return (
    <div>
      <label>Cantidad Prestamo</label>
      <input
        className="u-full-width"
        type="number"
        placeholder="Ejemplo: 3000"
        onBlur={(e) => setCantidad(parseInt(e.target.value))}
      />
    </div>
  );
}

export default Prestamo;
