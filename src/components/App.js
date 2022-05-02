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

   
  function handleAddToPortfolio(stockToAdd) {
    setPortfolio([...portfolio, stockToAdd]);
  }

  return (
    <div>
      <Header />
      <MainContainer
        stocks={stocks}
        setStocks={setStocks}
        handleAddToPortfolio={handleAddToPortfolio}
        portfolio={portfolio}
      />
    </div>
  );
}

export default App;
