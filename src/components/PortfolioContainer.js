import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio, handleSellStock }) {
  const portfolioList = portfolio.map((stock) => {
    return (
      <Stock stock={stock} key={stock.id} onStockClick={handleSellStock} />
    );
  });
  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolioList}
    </div>
  );
}

export default PortfolioContainer;
