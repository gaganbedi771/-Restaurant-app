import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import MealsSummary from "./components/Meals/MealsSummary";
import React, { useState } from "react";
import CartContextProvider from "./store/CartContextProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartContextProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}></Cart>}

      <Header onShowCart={showCartHandler}></Header>
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;
