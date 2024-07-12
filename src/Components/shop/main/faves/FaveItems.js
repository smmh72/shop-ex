import React, { useContext } from "react";
import { CartContext } from "../../../../Contexts/CartContext";
import FaveItem from "./FaveItem";

const FaveItems = () => {
  const { faveItems } = useContext(CartContext);
  return (
    <main className="faves-section-main col-md-9">
      <div className="bg-white px-3 py-2 rounded-2 shadow">
        <header className="faves-section-main-header border-bottom">
          <h6 className="m-0 p-1 border-bottom border-2 border-danger d-inline-block fw-bold">
            لیست علاقه های من
          </h6>
        </header>
        <div className="faves-section-main-items">
          {faveItems &&
            faveItems.map((faveItem) => {
              return <FaveItem faveItem={faveItem} key={faveItem.id} />;
            })}
        </div>
      </div>
    </main>
  );
};

export default FaveItems;
