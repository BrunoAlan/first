import React from "react";
import EmpleadosRow from "./EmpleadosRow";

const EmpleadosList = (props) => {
  const { listado } = props;

  return (
    <div>
      <ul className="media-list">
        {listado.map((empleado) => {
          return <EmpleadosRow key={empleado.id} empleado={empleado} />;
        })}
      </ul>
    </div>
  );
};

export default EmpleadosList;
