import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolio}) {

  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolio.map((stock) => (
        <Stock stock={stock} key={stock.id} />
      ))}
    </div>
  );
}

export default PortfolioContainer;
