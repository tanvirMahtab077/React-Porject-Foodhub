import React from "react";

export default function AboutUsCard({ aboutUsData }) {
  return (
    <div className="box">
      <div className="imgBox">
        <img src={aboutUsData?.img} />
      </div>
      <div className="text">
        <p>
          {aboutUsData?.description}
        </p>
        <h3>{aboutUsData?.title}</h3>
      </div>
    </div>
  );
}
