/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import { CartContext } from "../../../../Contexts/CartContext";
import { FuncContext } from "../../../../Contexts/FuncContext";

const InfoProduct = ({ myproduct }) => {
  const { addProducts, removeProducts, toggleFaves } = useContext(FuncContext);
  const { cartItems } = useContext(CartContext);

  const cartItem = cartItems.find((element) => element.id === myproduct.id);

  return (
    <section className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
      <article className=" p-3 shadow-sm rounded bg-white">
        <section>
          <header className="row border-bottom">
            <p>{myproduct.name}</p>
          </header>
          <div className="mt-4">
            <p className="R-pfont">
              <i className="fa fa-shield"></i> گارانتی اصالت و سلامت فیزیکی کالا
            </p>
          </div>
          <div>
            <p className="R-pfont">
              <i className="fa fa-cart-plus"></i> کالا موجود در انبار
            </p>
          </div>
          <div
            className="product-fave-add mb-2"
            onClick={() => toggleFaves(myproduct)}
          >
            <div className="bg-light d-inline-block p-1 R-pfont text-dark">
              <i className=" fa fa-heart text-danger"></i> افزودن به علاقه مندی
            </div>
          </div>
          <section className="d-inline-block">
            <div className="d-flex justify-content-between border rounded p-1">
              <button
                className="btn btn-danger border-0 fw-bolder M-buttonSizing M-couHover"
                onClick={() => addProducts(myproduct)}
              >
                +
              </button>
              <p className="M-couterSizing">{cartItem ? cartItem.qty : 0}</p>
              <button
                className="btn btn-danger border-0 fw-bolder M-buttonSizing M-couHover"
                onClick={() => removeProducts(myproduct)}
              >
                -
              </button>
            </div>
          </section>
          <div className="mt-5 lh-lg">
            <p className="R-pfont">
              <i className="fa fa-info-circle me-2"></i>کاربر گرامی خرید شما
              هنوز نهایی نشده است. برای ثبت سفارش و تکمیل خرید باید ابتدا آدرس
              خود را انتخاب کنید و سپس نحوه ارسال را انتخاب کنید. نحوه ارسال
              انتخابی شما محاسبه و به این مبلغ اضافه شده خواهد شد. و در نهایت
              پرداخت این سفارش صورت میگیرد. پس از ثبت سفارش کالا بر اساس نحوه
              ارسال که شما انتخاب کرده اید کالا برای شما در مدت زمان مذکور ارسال
              می گردد.
            </p>
          </div>
        </section>
      </article>
    </section>
  );
};

export default InfoProduct;
