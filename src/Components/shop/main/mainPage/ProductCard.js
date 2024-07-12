/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FuncContext } from "../../../../Contexts/FuncContext";

const ProductCard = ({ product, colorSelection }) => {
  const { addProducts, commafy, toggleFaves } = useContext(FuncContext);

  return (
    <>
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
              <button
                type="button"
                className="text-dark border-0 bg-transparent"
                onClick={() => addProducts(product)}
              >
                <i className="fa fa-cart-plus"></i>
              </button>
            </div>
          </OverlayTrigger>
          <OverlayTrigger
            placement="right"
            overlay={<Tooltip>افزودن به علاقه مندی</Tooltip>}
          >
            <div className="h-product-fave-icon shadow">
              <button
                type="button"
                className="text-dark border-0 bg-transparent"
                onClick={() => toggleFaves(product)}
              >
                <i className="fa fa-heart"></i>
              </button>
            </div>
          </OverlayTrigger>
        </div>
        <Link to={`/${product.id}`} className="h-product-link text-dark">
          <div className="h-product-img">
            <img src={product.image} alt="" className="img-fluid" />
          </div>
          <div className="h-product-name my-3">
            <h6>{product.name}</h6>
          </div>
          <div className="h-product-price text-end">
            <h6>{commafy(product.price)} تومان</h6>
          </div>
          {colorSelection && (
            <div className="h-product-color">
              <div className="h-product-color-item bg-danger rounded-circle border-2"></div>
              <div className="h-product-color-item bg-success rounded-circle"></div>
              <div className="h-product-color-item bg-secondary rounded-circle"></div>
              <div className="h-product-color-item bg-warning rounded-circle"></div>
              <div className="h-product-color-item bg-white rounded-circle"></div>
            </div>
          )}
        </Link>
      </section>
    </>
  );
};

export default ProductCard;
