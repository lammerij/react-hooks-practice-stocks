import React from "react";
import Stock from "./Stock";

function StockContainer({ stocksToDisplay, handleAdd, }) {
  return (
    <div>
      <h2>Stocks</h2>
      {stocksToDisplay.map((stock) => (
        <Stock stock={stock} key={stock.id} onStockClick={handleAdd} />
      ))}
    </div>
  );
}

export default StockContainer;
