import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../../Contexts/CartContext";
import { FuncContext } from "../../../../Contexts/FuncContext";

const MainLeft = () => {
  const { sum, totalPrice, cartItems } = useContext(CartContext);
  const { commafy } = useContext(FuncContext);

  return (
    <div className="col-sm-12 col-xl-3">
      <aside className="p-3 border rounded bg-white shadow">
        <div className="d-flex justify-content-between">
          <p> قیمت کالاها ({sum}) </p>
          <p> {commafy(totalPrice)} تومان </p>
        </div>
        <div className="d-flex justify-content-between">
          <p> تخفیف کالاها </p>
          <p> - تومان </p>
        </div>
        <hr />
        <div className="d-flex justify-content-between">
          <p> جمع سبد خرید </p>
          <p> {commafy(totalPrice)} تومان </p>
        </div>
        <div>
          <p>
            <i className="fa fa-info-circle"></i> کاربر گرامی خرید شما هنوز
            نهایی نشده است. برای ثبت سفارش و تکمیل خرید باید ابتدا آدرس خود را
            انتخاب کنید و سپس نحوه ارسال را انتخاب کنید. نحوه ارسال انتخابی شما
            محاسبه و به این مبلغ اضافه شده خواهد شد. و در نهایت پرداخت این سفارش
            صورت میگیرد.
          </p>
        </div>
        <div className="M-buttonHeight">
          <Link to="/Payment">
            <button
              className="w-100 h-100 bg-danger text-white border-0 rounded M-subHover"
              disabled={cartItems.length !== 0 ? false : true}
            >
              تکمیل فرآیند خرید
            </button>
          </Link>
        </div>
      </aside>
    </div>
  );
};

export default MainLeft;
