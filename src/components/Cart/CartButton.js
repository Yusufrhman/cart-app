import classes from "./CartButton.module.css";

import { uiActions } from "../../store/ui-slice";
import { useDispatch, useSelector } from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalQty = useSelector(state => state.cart.totalQty)
  return (
    <button
      className={classes.button}
      onClick={() => dispatch(uiActions.toggle())}
    >
      <span>My Cart</span>
      <span className={classes.badge}>{totalQty}</span>
    </button>
  );
};

export default CartButton;
