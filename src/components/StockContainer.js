import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, setStocks, handleAdd }) {
  

  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map((stock) => (
        <Stock stock={stock} key={stock.id} handleAdd={handleAdd} />
      ))}
    </div>
  );
}

export default StockContainer;
