import React from "react";
import FavesLinks from "../faves/FavesLinks";
import UserEditForm from "./UserEditForm";

const UserEdit = () => {
  return (
    <div className="container-xxl p-4 p-xxl-0">
      <section className="user-edit-section row g-3 my-5">
        <FavesLinks />
        <UserEditForm />
      </section>
    </div>
  );
};

export default UserEdit;
