import React, { useContext } from "react";
import { useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import { FuncContext } from "../../../../Contexts/FuncContext";

const AddProduct = ({ myproduct }) => {
  const [show, setShow] = useState(false);
  const { commafy, addProducts } = useContext(FuncContext);

  return (
    <section className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
      <article className="p-3 shadow-sm rounded bg-white">
        <section>
          <div className="d-flex justify-content-between border-bottom">
            <p className="R-pfont">قیمت کالا </p>
            <span className="R-pfont">{commafy(myproduct.price)} تومان</span>
          </div>
          <button
            className="btn btn-danger rounded-1 d-block w-100"
            onClick={() => addProducts(myproduct)}
          >
            افزودن به سبد خرید
          </button>
        </section>
      </article>

      <ToastContainer position="bottom-start">
        <Toast
          onClose={() => setShow(false)}
          show={show}
          delay={3000}
          autohide
          className="bg-success text-white m-3"
        >
          <Toast.Header>
            <strong className="me-auto">کاربر گرامی</strong>
          </Toast.Header>
          <Toast.Body>محصول با موفقیت به سبد خرید شما اضافه شد</Toast.Body>
        </Toast>
      </ToastContainer>
    </section>
  );
};

export default AddProduct;
