import React from "react";

function Stock({stock, handleAddToPortfolio}) {
  const { id, name, ticker, price, type } = stock;



  return (
    <div>
      <div onClick={() => handleAddToPortfolio(stock)}className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
