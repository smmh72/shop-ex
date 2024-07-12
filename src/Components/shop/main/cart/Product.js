import React, { useContext } from "react";
import { FuncContext } from "../../../../Contexts/FuncContext";

// ...................................../conter.............................................

const Product = ({ cartItem, index }) => {
  const { commafy, addProducts, removeProducts, removeHandler } =
    useContext(FuncContext);

  return (
    <div>
      <article className="mb-3">
        <div className="row">
          <div className="col-12 col-sm-2">
            <img
              src={cartItem.image}
              width="100%"
              alt=" کتاب اثر مرکب نوشته دارن هاردی "
            />
          </div>
          <div className="col-12 col-sm-8">
            <h5> {cartItem.name}</h5>
            <p>
              <i className="fa fa-circle"></i> قهوه ای
            </p>
            <p>
              <i className="fa fa-shield"></i> گارانتی اصالت و سلامت فیزیکی کالا
            </p>
            <p>
              <i className="fa fa-home"></i> کالا موجود در انبار
            </p>
            <div className="d-flex">
              <div className="d-flex justify-content-between border rounded p-1">
                <button
                  className="btn btn-danger border-0 fw-bolder M-buttonSizing M-couHover"
                  onClick={() => addProducts(cartItem)}
                >
                  +
                </button>
                <p className="M-couterSizing">{cartItem.qty}</p>
                <button
                  className="btn btn-danger border-0 fw-bolder M-buttonSizing M-couHover"
                  onClick={() => removeProducts(cartItem)}
                >
                  {cartItem.qty === 1 ? <i className="fa fa-trash"></i> : "-"}
                </button>
              </div>
              <button
                className="border-0 bg-white ms-2 ms-sm-4 fw-light text-secondary M-tshHover"
                onClick={() => removeHandler(cartItem)}
              >
                <i className="fa fa-trash"></i> حذف از سبد
              </button>
            </div>
          </div>
          <div className="col-12 col-sm-2 d-flex align-items-end justify-content-end">
            <p>
              <b> {commafy(cartItem.price)} تومان </b>
            </p>
          </div>
        </div>
      </article>
      <hr />
    </div>
  );
};

export default Product;
