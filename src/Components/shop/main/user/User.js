import React from "react";
import UserInfo from "./UserInfo";
import FavesLinks from "../faves/FavesLinks";

const User = () => {
  return (
    <div className="container-xxl p-4 p-xxl-0">
      <section className="user-section row g-3 my-5">
        <FavesLinks />
        <UserInfo />
      </section>
    </div>
  );
};

export default User;
