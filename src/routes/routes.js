import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../Components/shop/main/mainPage/Main";
import Login from "../Components/shop/sign/logIn/Login";
import Product from "../Components/shop/main/product/Product";
import Cart from "../Components/shop/main/cart/Cart";
import Register from "../Components/shop/sign/register/Register";
import Payment from "../Components/shop/main/payment/Payment";
import App from "../App";
import Products from "../Components/shop/main/product/Products";
import Error404 from "../Components/shop/main/error404/Error404";
import Faves from "../Components/shop/main/faves/Faves";
import User from "../Components/shop/main/user/User";
import UserEdit from "../Components/shop/main/userEdit/UserEdit";

const createRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Main />} />
        <Route path="/products" element={<Products />} />
        <Route path="/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/faves" element={<Faves />} />
        <Route path="/user" element={<User />} />
        <Route path="/userEdit" element={<UserEdit />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  </BrowserRouter>
);

export default createRoutes;
