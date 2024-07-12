import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../../Contexts/CartContext";

const UserInfo = () => {
  const { userInfo } = useContext(CartContext);
  return (
    <main className="user-section-main col-md-9">
      <div className="bg-white px-3 py-2 rounded-2 shadow">
        <header className="user-section-main-header border-bottom">
          <h6 className="m-0 p-1 border-bottom border-2 border-danger d-inline-block fw-bold">
            اطلاعات حساب
          </h6>
        </header>
        <div className="text-end my-3">
          <Link
            to="/userEdit"
            className="d-flex align-items-center justify-content-end text-danger"
          >
            <i className="fa fa-edit mx-2"></i> ویرایش حساب
          </Link>
        </div>
        <div className="row p-4">
          <div className="col-sm-6 my-2">
            <div className="userInfo-title fw-bold my-3"> نام </div>
            <div className="userInfo-text border-bottom p-2">
              {userInfo.fName}
            </div>
          </div>
          <div className="col-sm-6 my-2">
            <div className="userInfo-title fw-bold my-3"> نام خانوادگی </div>
            <div className="userInfo-text border-bottom p-2">
              {userInfo.lName}
            </div>
          </div>
          <div className="col-sm-6 my-2">
            <div className="userInfo-title fw-bold my-3">شماره تلفن همراه</div>
            <div className="userInfo-text border-bottom p-2">
              {userInfo.phone}
            </div>
          </div>
          <div className="col-sm-6 my-2">
            <div className="userInfo-title fw-bold my-3"> ایمیل </div>
            <div className="userInfo-text border-bottom p-2">
              {userInfo.email}
            </div>
          </div>
          <div className="col-sm-6 my-2">
            <div className="userInfo-title fw-bold my-3"> کد ملی </div>
            <div className="userInfo-text border-bottom p-2">
              {userInfo.nCode}
            </div>
          </div>
          <div className="col-sm-6 my-2">
            <div className="userInfo-title fw-bold my-3"> نام کاربری </div>
            <div className="userInfo-text border-bottom p-2">
              {userInfo.username}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UserInfo;
