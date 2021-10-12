import React from "react";

const EmpleadoAvatar = (props) => {
  const { pic, size } = props;
  const URL = "https://randomuser.me/api/portraits/lego";

  const imgSize = size === "large" ? "is-large" : "is-small";

  return (
    <figure className={imgSize}>
      <img
        alt="avatar"
        className="media-object"
        width="64px"
        src={`${URL}/${pic}.jpg`}
      />
    </figure>
  );
};

export default EmpleadoAvatar;
