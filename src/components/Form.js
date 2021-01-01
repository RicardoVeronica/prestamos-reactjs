import React, { useState } from "react";
import Prestamo from "./formComponents/Prestamo";
import Plazo from "./formComponents/Plazo";
import Calcular from "./formComponents/Calcular";
import Mensaje from "./formComponents/Mensaje";
import Resultado from "./formComponents/Resultado";
import Spinner from "./formComponents/Spinner";

function Form() {
  const [cantidad, setCantidad] = useState(0);
  const [plazo, setPlazo] = useState("");
  const [total, setTotal] = useState(0);
  const [cargando, setCargando] = useState(false);

  let componente;

  if (cargando) {
    componente = <Spinner />;
  } else if (total === 0) {
    componente = (
      <Mensaje contenido="Agrega una cantida y un plazo a pagar para ver una cotizacion" />
    );
  } else {
    componente = <Resultado total={total} plazo={plazo} cantidad={cantidad} />;
  }

  return (
    <form>
      <div className="row">
        <Prestamo setCantidad={setCantidad} />
        <Plazo setPlazo={setPlazo} />
        <Calcular
          cantidad={cantidad}
          plazo={plazo}
          total={total}
          setTotal={setTotal}
          setCargando={setCargando}
        />
      </div>
      <div className="mensajes">{componente}</div>
    </form>
  );
}

export default Form;
