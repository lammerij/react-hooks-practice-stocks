import React, { useEffect, useState } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

function App() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((response) => response.json())
      .then((data) => {
        const newData = data.map(stk => {
          return {...stk, bought: false}
        })
        setStocks(newData)

      })
  }, []);

   
  function handleAdd(stockToAdd) {
    setPortfolio([...portfolio, stockToAdd]);
  }

  function handleSellStock(){
    console.log('Hello')

  }

  return (
    <div>
      <Header />
      <MainContainer
        stocks={stocks}
        setStocks={setStocks}
        handleAdd={handleAdd}
        portfolio={portfolio}
        handleSellStock={handleSellStock}
      />
    </div>
  );
}

export default App;
