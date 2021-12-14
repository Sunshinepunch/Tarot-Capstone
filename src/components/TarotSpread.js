import React from "react";
import Card from "./TarotCard";

const mainTarotSpread = [
  {
    name: 'Test Card'
  }
]

function TarotSpread() {
  return (
    <>
    {mainTarotSpread.map((card, index) =>
    <Card name = {card.name}
    key={index} />
    )}
    </>
  );
}

export default TarotSpread;