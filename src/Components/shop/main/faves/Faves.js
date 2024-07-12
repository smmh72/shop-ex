import React from "react";
import FaveItems from "./FaveItems";
import FavesLinks from "./FavesLinks";

const Faves = () => {
  return (
    <div className="container-xxl p-4 p-xxl-0">
      <section className="faves-section row g-3 my-5">
        <FavesLinks />
        <FaveItems />
      </section>
    </div>
  );
};

export default Faves;
