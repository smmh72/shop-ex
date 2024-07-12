import React, { useContext } from "react";
import { ToastContainer } from "react-toastify";
import { CartContext } from "../../../../Contexts/CartContext";
import { FuncContext } from "../../../../Contexts/FuncContext";

const TotalPrice = () => {
  const { commafy, submitCart } = useContext(FuncContext);
  const { sum, totalPrice } = useContext(CartContext);
  return (
    <section className="D-paymentBox bg-white p-3 rounded-2 mt-3 mb-4">
      <div className=" d-flex justify-content-between D-total">
        <p className="text-muted pb-2">قیمت کالاها ({sum})</p>
        <p className="text-muted">{commafy(totalPrice)} تومان</p>
      </div>
      <div className=" d-flex justify-content-between pt-3">
        <p className="text-muted">جمع سبد خرید</p>
        <p className="text-dark">{commafy(totalPrice)} تومان</p>
      </div>
      <div className=" d-flex justify-content-between">
        <p className="text-muted">هزینه ارسال</p>
        <p className="text-warning">54,000 تومان</p>
      </div>
      <div className="D-description-pay D-total pb-3">
        <i className="fa fa-info-circle me-1"></i>
        کاربر گرامی کالاها بر اساس نوع ارسالی که انتخاب می کنید در مدت زمان ذکر
        شده ارسال می شود.
      </div>
      <div className=" d-flex justify-content-between pt-2">
        <p className="text-muted">مبلغ قابل پرداخت</p>
        <p className="text-dark">{commafy(totalPrice)} تومان</p>
      </div>
      <div>
        <button
          type="button"
          className="btn btn-danger text-white w-100"
          onClick={submitCart}
        >
          ثبت و سفارش و کد رهگیری
        </button>
      </div>
      <ToastContainer />
    </section>
  );
};

export default TotalPrice;
