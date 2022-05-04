import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [alphaChecked, setAlphaChecked] = useState("");
  const [priceChecked, setPriceChecked] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((response) => response.json())
      .then((data) => setStocks(data));
  }, []);

  function handleAdd(stockToAdd) {
    setPortfolio([...portfolio, stockToAdd]);
  }

  function handleSellStock(stockToRemove) {
    setPortfolio((portfolio) =>
      portfolio.filter((stock) => {
        return stock.id !== stockToRemove.id;
      })
    );
  }

  function handleChange(event) {
    setSelectedCategory(event.target.value);
  }

  const stocksToDisplay = stocks.filter((stock) => {
    if (selectedCategory === "All") return true;

    return stock.type === selectedCategory;
  });

  function handleCheck(event) {
    if (alphaChecked === "") {
      setAlphaChecked("checked");
    } else setAlphaChecked("");
  }

  function handlePriceCheck(event) {
    if (priceChecked === "") {
      setPriceChecked("checked");
    } else setPriceChecked("");
  }

  return (
    <div>
      <SearchBar
        stocks={stocks}
        handleChange={handleChange}
        handleCheck={handleCheck}
        alphaChecked={alphaChecked}
        handlePriceCheck={handlePriceCheck}
        priceChecked={priceChecked}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer
            stocksToDisplay={stocksToDisplay}
            handleAdd={handleAdd}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer
            portfolio={portfolio}
            handleSellStock={handleSellStock}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
