import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
function formatRupiah(price) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    currencyDisplay: "symbol",
  }).format(price);
}
const CartItem = (props) => {
  const { id, title, quantity, total, price } = props.item;
  const dispatch = useDispatch();
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          {formatRupiah(total)} <span className={classes.itemprice}>({formatRupiah(price)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button
            onClick={() => {
              dispatch(cartActions.removeFromCart(id));
            }}
          >
            -
          </button>
          <button
            onClick={() => {
              dispatch(cartActions.addToCart({ id, title, price }));
            }}
          >
            +
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
