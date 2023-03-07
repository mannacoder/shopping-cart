import { cartActions } from "./cartSlice";
import { uiActions } from "./uiSlice";

export const getCartData = () => {
  return async (dispatch) => {
    const fetchHandler = async () => {
      const response = await fetch(
        "https://redux-http-f4180-default-rtdb.firebaseio.com/cartItems.json"
      );
      const data = await response.json();
      return data;
    };
    try {
      const cartData = await fetchHandler();
      dispatch(cartActions.replaceData(cartData));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Sending request to database failed",
          type: "error",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        open: true,
        message: "Sending Request",
        type: "warning",
      })
    );
    const sendRequest = async () => {
      const response = await fetch(
        "https://redux-http-f4180-default-rtdb.firebaseio.com/cartItems.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      const data = await response.json();
      console.log(data);
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Sent request to database",
          type: "success",
        })
      );
    };
    try {
      await sendRequest();
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Sending request to database failed",
          type: "error",
        })
      );
    }
  };
};
