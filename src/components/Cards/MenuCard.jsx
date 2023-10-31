import React from "react";
export default function MenuCard({ cardData }) {
  return (
    <div className="box">
      <div className="imgBox">
        <img src={cardData?.img} alt />
      </div>
      <div className="text">
        <h3>{cardData?.title}</h3>
      </div>
    </div>
  );
}
