import React from "react";


export default function Dice({ number, rolling }) {
  const dicePath = `/src/assets/dice${number}.png`;
  return (
    <div className={`dice ${rolling ? "shake" : ""}`}>
      <img src={dicePath} alt={`Dice ${number}`} />
    </div>
  );
}
