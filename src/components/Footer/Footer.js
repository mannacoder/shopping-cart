import React from "react";
import "./Footer.css";
import { useSelector } from "react-redux";

const Footer = () => {
  let total = 0;
  const itemList = useSelector((state) => state.cart.itemList);
  itemList?.map((item) => (total += item.totalPrice));
  return (
    <footer className="footer">
      <h3>Total: ₹{total}</h3>
      <div>
        <button className="orderBtn">Place Order</button>
      </div>
    </footer>
  );
};

export default Footer;
