import React from "react";

function TVShow(props) {
  const { image, selectShow } = props; // Destructure props

  return (
    <div>
      <br />
      <img src={image.medium} onClick={selectShow} alt="" />
    </div>
  );
}

export default TVShow;
