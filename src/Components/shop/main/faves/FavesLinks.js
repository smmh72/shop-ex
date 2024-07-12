/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

const FavesLinks = () => {
  return (
    <aside className="faves-section-aside col-md-3">
      <div className="bg-white px-3 py-2 rounded-2 shadow">
        <div className="faves-section-aside-item p-4 border-bottom">
          <a href="#" className="faves-section-aside-link text-dark fw-bold">
            سفارش های من
          </a>
        </div>
        <div className="faves-section-aside-item p-4 border-bottom">
          <a href="#" className="faves-section-aside-link text-dark fw-bold">
            آدرس های من
          </a>
        </div>
        <div className="faves-section-aside-item p-4 border-bottom">
          <Link
            to="/faves"
            className="faves-section-aside-link text-dark fw-bold"
          >
            لیست علاقه مندی
          </Link>
        </div>
        <div className="faves-section-aside-item p-4 border-bottom">
          <Link
            to="/userEdit"
            className="faves-section-aside-link text-dark fw-bold"
          >
            ویرایش حساب
          </Link>
        </div>
        <div className="faves-section-aside-item p-4">
          <a href="#" className="faves-section-aside-link text-dark fw-bold">
            خروج از حساب کاربری
          </a>
        </div>
      </div>
    </aside>
  );
};

export default FavesLinks;
