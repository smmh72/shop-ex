import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FuncContext } from "../../../../Contexts/FuncContext";

const FaveItem = ({ faveItem }) => {
  const { commafy, removeFave } = useContext(FuncContext);
  return (
    <div className="faves-section-main-item row g-1 border-bottom py-4">
      <Link
        to={`/${faveItem.id}`}
        className="faves-section-main-item-img col-sm-3 col-xl-2 d-flex justify-content-center align-items-center"
      >
        <img src={faveItem.image} alt="" className="img-fluid" />
      </Link>
      <div className="faves-section-main-item-body col-sm-9 col-xl-10 px-3">
        <Link
          to={`/${faveItem.id}`}
          className="faves-section-main-item-body-header my-3 text-dark"
        >
          <h6 className="m-0 fw-bold">{faveItem.name}</h6>
        </Link>
        {faveItem.color && (
          <div className="faves-section-main-item-body-color my-3 d-flex align-items-center ">
            <div className="bg-secondary rounded-circle me-3"></div>
            <span>faveItem.color </span>
          </div>
        )}
        <div className="faves-section-main-item-body-guarantee my-3 d-flex align-items-center">
          <i className="fa fa-shield me-2 px-1"></i>
          <span className="">گارانتی اصالت و سلامت فیزیکی کالا</span>
        </div>
        <div className="faves-section-main-item-body-store my-3 d-flex align-items-center">
          <i className="fa fa-cubes me-2"></i>
          <span className=""> کالا موجود در انبار </span>
        </div>
        <div className="my-3 d-flex justify-content-between align-items-center">
          <div
            className="faves-section-main-item-body-remove d-flex align-items-center"
            onClick={() => removeFave(faveItem)}
          >
            <i className="fa fa-trash me-2 px-1"></i>
            <span> حذف از لیست علاقه ها </span>
          </div>
          <div className="faves-section-main-item-body-price">
            {commafy(faveItem.price)} تومان
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaveItem;
