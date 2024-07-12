import React, { useContext } from "react";
import { CartContext } from "../../../../Contexts/CartContext";
import Product from "./Product";

const MainRight = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="col-sm-12 col-xl-9">
      <section className="p-3 border rounded bg-white shadow">
        {cartItems &&
          cartItems.map((cartItem, index) => {
            return <Product key={index} cartItem={cartItem} index={index} />;
          })}
        {cartItems.length === 0 && (
          <img
            src="images/empty-cart.jpg"
            alt="Empty Cart"
            className="img-fluid"
          />
        )}
      </section>
    </div>
  );
};

export default MainRight;
