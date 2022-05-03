import React from "react";

function Stock({stock, handleAdd}) {
  const { id, name, ticker, price, type } = stock;
  console.log(stock)
  
  function handleClick(event){
    console.log(event)
  }



  return (
    <div>
      <div onClick={handleClick}className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
