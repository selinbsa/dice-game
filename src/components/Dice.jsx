import React from "react";

export default function Dice({ number, rolling }) {
  const dicePath = new URL(`../assets/dice${number}.png`, import.meta.url).href;

  return (
    <div className={`dice ${rolling ? "shake" : ""}`}>
      <img src={dicePath} alt={`Dice ${number}`} />
    </div>
  );
}
