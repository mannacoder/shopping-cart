import React, { useRef } from "react";
import Header from "../Header/Header";
import Products from "../Products/Products";
import "./Layout.css";
import CartItems from "../Cart/CartItems";
import { useSelector } from "react-redux";
import Footer from "../Footer/Footer";
const Layout = () => {
  const scrollRef = useRef(null);
  const scrollIntoCart = () => {
    console.log("came here in ref");
    scrollRef.current.scrollIntoView();
  };
  const showCart = useSelector((state) => state.cart.showCart);
  return (
    <React.Fragment>
      <div className="layout">
        <Header scrollIntoCart={scrollIntoCart} />
        <div className="middle-section">
          <Products />
          <div ref={scrollRef}>{showCart && <CartItems />}</div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
