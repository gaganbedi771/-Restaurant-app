import React from "react";
import mealsImage from "../../assets/meals.jpg";
import "./Header.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <>
      <header className="header">
        <h1>ReactMeals</h1>
        <HeaderCartButton></HeaderCartButton>
      </header>
      <div className="main-image">
        <img src={mealsImage} alt="Meals image"></img>
      </div>
    </>
  );
};

export default Header;
