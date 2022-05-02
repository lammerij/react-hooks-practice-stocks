import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, setStocks, handleAddToPortfolio }) {
  

  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map((stock) => (
        <Stock stock={stock} key={stock.id} handleAddToPortfolio={handleAddToPortfolio} />
      ))}
    </div>
  );
}

export default StockContainer;
