import React from "react";
import GalleryProduct from "./GalleryProduct";
import InfoProduct from "./InfoProduct";
import AddProduct from "./AddProduct";
import ProductSpecifications from "./ProductSpecifications";
import OwlCarouselC from "./../mainPage/OwlCarouselC";
import { useParams } from "react-router-dom";
import { findVisited } from "../../../../products/mostVisitedProducts";
import { getMostVisitedProducts } from "../../../../products/mostVisitedProducts";

const Product = () => {
  const products = getMostVisitedProducts();
  const myparams = useParams();
  const myproduct = findVisited(parseInt(myparams.productId));

  return (
    <section className="container mt-4">
      <header className="border-bottom">
        <h6>
          <span className="R-tittle fw-bold">
            {myproduct && myproduct.name}
          </span>
        </h6>
      </header>

      <div className="row gx-4 gy-2 mt-3">
        <GalleryProduct myproduct={myproduct} />
        <InfoProduct myproduct={myproduct} />
        <AddProduct myproduct={myproduct} />
        <OwlCarouselC
          title="کالاهای مرتبط"
          seeAll={true}
          products={products}
          colorSelection={false}
          autoPlay={false}
        />
        <ProductSpecifications myproduct={myproduct} />
      </div>
    </section>
  );
};

export default Product;
