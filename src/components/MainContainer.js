import React from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer({ stocks, setStocks, handleAdd, portfolio, handleSellStock }) {
  // console.log(handleAdd)
  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} setStocks={setStocks} handleAdd={handleAdd} />
        </div>
        <div className="col-4">
          <PortfolioContainer stocks={stocks} portfolio={portfolio} handleSellStock={handleSellStock} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
