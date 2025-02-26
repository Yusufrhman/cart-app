import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

function formatRupiah(price) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    currencyDisplay: "symbol",
  }).format(price);
}
const ProductItem = (props) => {
  const { title, price, description, id } = props;
  const dispatch = useDispatch();

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>{formatRupiah(price)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button
            onClick={() =>
              dispatch(cartActions.addToCart({ id, title, price}))
            }
          >
            Add to Cart
          </button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
