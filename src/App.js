import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { uiActions } from "./store/ui-slice";
import Notification from "./components/UI/Notification";
import { fetchCartData } from "./store/cart-actions";

let isInitial = true;
function App() {
  const cartIsVisible = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, []);

  useEffect(() => {
    async function saveCart() {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "saving cart...",
          message: "we are saving your cart data...",
        })
      );
      const res = await fetch(
        "https://reactredux-c9909-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        { method: "PUT", body: JSON.stringify({items: [...cart.items], totalQty: cart.totalQty}) }
      );
      if (!res.ok) {
        throw new Error("failed to save cart");
      }
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "success",
          message: "saving data success",
        })
      );
    }
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.changed) {
      saveCart().catch((error) =>
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "error",
            message: "saving data error",
          })
        )
      );
    }
  }, [cart, dispatch]);
  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {cartIsVisible && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
