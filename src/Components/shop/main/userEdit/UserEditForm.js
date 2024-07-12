import React, { useContext, useRef } from "react";
import { CartContext } from "../../../../Contexts/CartContext";
import { FuncContext } from "../../../../Contexts/FuncContext";

const UserEditForm = () => {
  const fName = useRef();
  const lName = useRef();
  const phone = useRef();
  const email = useRef();
  const nCode = useRef();
  const username = useRef();

  const { submitUserInfo } = useContext(FuncContext);
  const { userInfo } = useContext(CartContext);
  return (
    <main className="user-edit-form-section-main col-md-9">
      <div className="bg-white px-3 py-2 rounded-2 shadow">
        <header className="user-edit-form-section-main-header border-bottom">
          <h6 className="m-0 p-1 border-bottom border-2 border-danger d-inline-block fw-bold">
            ویرایش اطلاعات حساب
          </h6>
        </header>
        <div className="row p-4">
          <div className="col-sm-6 my-2">
            <div className="user-edit-form-title fw-bold my-3"> نام </div>
            <input
              type="text"
              ref={fName}
              className="user-edit-input border-bottom border-0 p-2 w-100"
              placeholder="نام"
            />
          </div>
          <div className="col-sm-6 my-2">
            <div className="user-edit-form-title fw-bold my-3">
              نام خانوادگی
            </div>
            <input
              type="text"
              ref={lName}
              className="user-edit-input border-bottom border-0 p-2 w-100"
              placeholder="نام خانوادگی"
            />
          </div>
          <div className="col-sm-6 my-2">
            <div className="user-edit-form-title fw-bold my-3">
              شماره تلفن همراه
            </div>
            <input
              type="text"
              ref={phone}
              className="user-edit-input border-bottom border-0 p-2 w-100"
              placeholder="شماره تلفن همراه"
            />
          </div>
          <div className="col-sm-6 my-2">
            <div className="user-edit-form-title fw-bold my-3">ایمیل</div>
            <input
              type="email"
              ref={email}
              className="user-edit-input border-bottom border-0 p-2 text-start w-100"
              placeholder=" ایمیل "
            />
          </div>
          <div className="col-sm-6 my-2">
            <div className="user-edit-form-title fw-bold my-3">کد ملی</div>
            <input
              type="text"
              ref={nCode}
              className="user-edit-input border-bottom border-0 p-2 w-100"
              placeholder=" کد ملی "
            />
          </div>
          <div className="col-sm-6 my-2">
            <div className="user-edit-form-title fw-bold my-3">نام کاربری</div>
            <input
              type="text"
              ref={username}
              className="user-edit-input border-bottom border-0 p-2 w-100"
              placeholder=" نام کاربری  "
            />
          </div>
        </div>
        <div className="text-end my-2 mx-4">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() =>
              submitUserInfo(fName, lName, phone, email, nCode, username)
            }
          >
            ثبت تغییرات
          </button>
        </div>
      </div>
    </main>
  );
};

export default UserEditForm;
