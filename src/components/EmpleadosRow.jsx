import React from "react";
import EmpleadoAvatar from "./EmpleadoAvatar";

const EmpleadosRow = (props) => {
  const { empleado } = props;
  const { fullName, title, department, pic, size } = empleado;
  return (
    <div>
      <li className="media">
        <div className="media-body">
          <h4>{fullName}</h4>
          <p>
            {title} &nbsp;
            <span className="label label-info">{department}</span>
          </p>
          <EmpleadoAvatar pic={pic} size={size} />
        </div>
      </li>
    </div>
  );
};

export default EmpleadosRow;
