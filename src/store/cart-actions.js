import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const res = await fetch(
        "https://reactredux-c9909-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        { method: "GET" }
      );
      if (!res.ok) {
        throw new Error("failed to fetch cart data");
      }
      const resData = await res.json();

      return resData;
    };
    try {
      const cartData = await fetchData();
      dispatch(cartActions.replaceCarts({ items: cartData.items || [], totalQty: cartData.totalQty }));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "error",
          message: "fetching data error",
        })
      );
    }
  };
};
