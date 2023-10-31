import React from "react";

export default function ExpartCard({expartData}) {
  return (
    <div className="box">
      <div className="imgBox">
        <img src={expartData?.img} alt />
      </div>
      <div className="text">
        <h3>{expartData?.title}</h3>
      </div>
    </div>
  );
}
