import React from "react";
import { getMostVisitedProducts } from "../../../../products/mostVisitedProducts";

// import OwlCarouselC from "./owlcarousel/OwlCarouselC";
import OwlCarouselC from "../mainPage/OwlCarouselC";
import MainLeft from "./MainLeft";
import MainRight from "./MainRight";

const Cart = () => {
  const mostVisited = getMostVisitedProducts();
  return (
    <div className="">
      <section className="M-head container-xxl my-4 px-2 p-xxl-0">
        <h5 className="border-bottom py-2 mb-4">
          <span className="p-1 border-bottom border-danger border-2">
            سبد خرید شما
          </span>
        </h5>
      </section>
      <section className="M-boody container-xxl my-4 px-2 p-xxl-0">
        <div className="row">
          <MainRight />
          <MainLeft />

          {/* <OwlCarouselC /> */}

          <OwlCarouselC
            title="کالاهای مرتبط با سبد خرید شما"
            seeAll={true}
            products={mostVisited}
            colorSelection={false}
            autoPlay={false}
          />
        </div>
      </section>
    </div>
  );
};

export default Cart;
