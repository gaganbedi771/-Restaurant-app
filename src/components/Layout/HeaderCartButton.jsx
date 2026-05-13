import CartIcon from "../Cart/CartIcon";
import "./HeaderCartButton.css";
import { useContext } from "react";
import { CartContext } from "../../store/CartContextProvider";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const cartItemsNumber = cartCtx.items.reduce((acc, item) => {
    return acc + Number(item.amount);
  }, 0);
  return (
    <button className="button" onClick={props.onClick}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge">{cartItemsNumber}</span>
    </button>
  );
};

export default HeaderCartButton;
