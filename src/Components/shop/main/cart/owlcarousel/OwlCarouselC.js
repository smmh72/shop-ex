/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "./../../../../../../node_modules/owl.carousel/dist/assets/owl.carousel.css";
import "./../../../../../../node_modules/owl.carousel/dist/assets/owl.theme.default.css";
import ProductCard from "./ProductCard";
import { getMostVisitedProducts } from "../../../../products/mostVisitedProducts";

const OwlCarouselC = ({ handelCart }) => {
  // const productsCart = [1,2,3,4,5,6,7,8]
  const productsCart = getMostVisitedProducts();

  return (
    <div>
      <section id="h-most-vistited-section" className="my-4 px-2 p-xxl-0">
        <div className="container-xxl bg-white p-3 rounded-2 shadow">
          <header className="h-owl-header w-100 border-bottom d-flex justify-content-between">
            <h6 className="border-bottom border-2 border-danger p-2 m-0">
              کالاهای مرتبط با سبد خرید شما
            </h6>
            <a href="#" className="text-dark fw-light">
              مشاهده همه
            </a>
          </header>
          <OwlCarousel
            className="owl-theme my-3"
            items={5}
            loop
            margin={20}
            nav
            dots={false}
            dir="ltr"
            responsive={{
              0: {
                items: 1,
              },
              480: {
                items: 2,
              },
              768: {
                items: 5,
              },
            }}
          >
            {productsCart.map((productCart, index) => {
              return (
                <div className="item p-3" key={index}>
                  <ProductCard
                    productCart={productCart}
                    handelCart={handelCart}
                  />
                </div>
              );
            })}
          </OwlCarousel>
        </div>
      </section>
    </div>
  );
};

export default OwlCarouselC;
