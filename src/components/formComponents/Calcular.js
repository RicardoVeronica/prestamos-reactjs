import React, { useState } from "react";
import { calcularTotal } from "../../helpers/helpers";

function Calcular({ cantidad, plazo, setTotal, setCargando }) {
  const [error, setError] = useState(false);

  function calcularPrestamo(e) {
    e.preventDefault();

    if (cantidad === 0 || plazo === "") {
      setError(true);
      return;
    }
    setError(false);

    setCargando(true);

    setTimeout(() => {
      const total = calcularTotal(cantidad, plazo);
      setTotal(total);
      setCargando(false);
    }, 2500);
  }

  return (
    <>
      <div>
        <input
          type="submit"
          value="Calcular"
          className="button-primary u-full-width"
          onClick={calcularPrestamo}
        />
      </div>

      {error ? (
        <p className="error">Todos los campos son obligatorios</p>
      ) : null}
    </>
  );
}

export default Calcular;
