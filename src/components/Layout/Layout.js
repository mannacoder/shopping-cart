import React from "react";
import Header from "../Header/Header";
import Products from "../Products/Products";
import "./Layout.css";
import CartItems from "../Cart/CartItems";
import { useSelector } from "react-redux";
const Layout = () => {
  let total = 0;
  const itemList = useSelector((state) => state.cart.itemList);
  const showCart = useSelector((state) => state.cart.showCart);
  // console.log(itemList);
  itemList?.map((item) => (total += item.totalPrice));

  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        {showCart && <CartItems />}
        <div className="total-price">
          <h3>Total: ₹{total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
