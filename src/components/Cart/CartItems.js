import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";
const CartItems = () => {
  const cartItems = useSelector((state) => state.cart.itemList);
  return (
    <div className="cart-container">
      {cartItems.length !== 0 ? (
        <>
          <h2>Your Cart</h2>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <CartItem
                  quantity={item.quantity}
                  id={item.id}
                  price={item.price}
                  total={item.totalPrice}
                  name={item.name}
                />
              </li>
            ))}
          </ul>
        </>
      ) : (
        <h1 className="empty-cart">Your cart is empty !!</h1>
      )}
    </div>
  );
};

export default CartItems;
