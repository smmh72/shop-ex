/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const ProductCard = ({ product }) => {
  return (
    <div>
      <section
        className="h-product p-2 position-relative rounded-1 bg-white"
        dir="rtl"
      >
        <div className="h-product-icons-container">
          <OverlayTrigger
            placement="right"
            overlay={<Tooltip>افزودن به سبد خرید</Tooltip>}
          >
            <div className="h-product-cart-icon shadow">
              <a href="#" className="text-dark">
                <i className="fa fa-cart-plus"></i>
              </a>
            </div>
          </OverlayTrigger>
          <OverlayTrigger
            placement="right"
            overlay={<Tooltip>افزودن به علاقه مندی</Tooltip>}
          >
            <div className="h-product-fave-icon shadow">
              <a href="#" className="text-dark">
                <i className="fa fa-heart"></i>
              </a>
            </div>
          </OverlayTrigger>
        </div>
        <a href="#" className="h-product-link text-dark">
          <div className="h-product-img">
            <img src={product.image} alt="" className="img-fluid" />
          </div>
          <div className="h-product-name my-3">
            <h6>{product.name}</h6>
          </div>
          <div className="h-product-price text-end">
            <h6>{product.price}</h6>
          </div>
          <div className="h-product-color">
            <div className="h-product-color-item bg-danger rounded-circle border-2"></div>
            <div className="h-product-color-item bg-success rounded-circle"></div>
            <div className="h-product-color-item bg-secondary rounded-circle"></div>
            <div className="h-product-color-item bg-warning rounded-circle"></div>
            <div className="h-product-color-item bg-white rounded-circle"></div>
          </div>
        </a>
      </section>
    </div>
  );
};

export default ProductCard;
