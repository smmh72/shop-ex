/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "./files/css/style.css";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Components/shop/main/footer/Footer";
import Header from "./Components/shop/main/header/Header";
import { CartContext } from "./Contexts/CartContext";
import { FuncContext } from "./Contexts/FuncContext";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem(`user`)) !== null
      ? JSON.parse(localStorage.getItem(`user`))
      : ""
  );

  const [faveItems, setFaveItems] = useState(
    JSON.parse(localStorage.getItem(user ? `Faves-${user}` : `faveItems`)) !==
      null
      ? JSON.parse(localStorage.getItem(user ? `Faves-${user}` : `faveItems`))
      : []
  );

  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem(user ? `Cart-${user}` : `cartItems`)) !==
      null
      ? JSON.parse(localStorage.getItem(user ? `Cart-${user}` : `cartItems`))
      : []
  );

  const [sum, setSum] = useState(0);
  let newSum = 0;
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    cartItems.map((cartItem) => (newSum += cartItem.qty));
    setSum(newSum);
  }, [cartItems]);

  const [totalPrice, setTotalPrice] = useState(0);
  let total = 0;
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    cartItems.map((cartItem) => (total += cartItem.price * cartItem.qty));
    setTotalPrice(total);
  }, [cartItems]);

  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem(user ? `userInfo-${user}` : `userinfo`)) !==
      null
      ? JSON.parse(localStorage.getItem(user ? `userInfo-${user}` : `userinfo`))
      : {}
  );

  // --------------------------------------------------------------------- addProducts ---------------------------------------------------------------------
  const addProducts = (product) => {
    const exist = cartItems.find((element) => element.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((element) =>
          element.id === product.id ? { ...exist, qty: exist.qty + 1 } : element
        )
      );
      toast.success(" محصول با موفقیت به سبد خرید اضافه شد ", {
        position: "top-right",
        rtl: true,
        autoClose: 3000,
      });
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
      toast.success(" محصول با موفقیت به سبد خرید اضافه شد ", {
        position: "top-right",
        rtl: true,
        autoClose: 3000,
      });
    }
  };

  useEffect(() => {
    localStorage.setItem(
      user ? `Cart-${user}` : `cartItems`,
      JSON.stringify(cartItems)
    );
  }, [cartItems]);
  // --------------------------------------------------------------------- /addProducts ---------------------------------------------------------------------

  // --------------------------------------------------------------------- removeProducts ---------------------------------------------------------------------

  const removeProducts = (product) => {
    const exist = cartItems.find((element) => element.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((element) => element.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((element) =>
          element.id === product.id ? { ...exist, qty: exist.qty - 1 } : element
        )
      );
    }
  };
  // --------------------------------------------------------------------- /removeProducts ---------------------------------------------------------------------

  // --------------------------------------------------------------------- removeHandler ---------------------------------------------------------------------
  const removeHandler = (product) => {
    setCartItems(cartItems.filter((element) => element.id !== product.id));
  };
  // --------------------------------------------------------------------- /removeHandler ---------------------------------------------------------------------

  // --------------------------------------------------------------------- toggleFaves ---------------------------------------------------------------------
  const toggleFaves = (product) => {
    const exist = faveItems.find((element) => element.id === product.id);
    if (exist) {
      setFaveItems(faveItems.filter((element) => element.id !== product.id));
      toast.error(" محصول از علاقه مندی ها حذف شد ", {
        position: "top-right",
        rtl: true,
        autoClose: 3000,
      });
    } else {
      setFaveItems([...faveItems, product]);
      toast.success(" محصول با موفقیت به علاقه مندی ها اضافه شد ", {
        position: "top-right",
        rtl: true,
        autoClose: 3000,
      });
    }
  };
  useEffect(() => {
    localStorage.setItem(
      user ? `Faves-${user}` : `faveItems`,
      JSON.stringify(faveItems)
    );
  }, [faveItems]);
  // --------------------------------------------------------------------- /toggleFaves ---------------------------------------------------------------------

  // --------------------------------------------------------------------- removeFave ---------------------------------------------------------------------
  const removeFave = (product) => {
    const exist = faveItems.find((element) => element.id === product.id);
    if (exist) {
      setFaveItems(faveItems.filter((element) => element.id !== product.id));
    }
  };
  // --------------------------------------------------------------------- /removeFave ---------------------------------------------------------------------
  // --------------------------------------------------------------------- handleClose ---------------------------------------------------------------------

  const [show, setShow] = useState(false);

  // --------------------------------------------------------------------- commentSubmit ---------------------------------------------------------------------
  const [comments, setComments] = useState(
    JSON.parse(localStorage.getItem(`comments`)) !== null
      ? JSON.parse(localStorage.getItem(`comments`))
      : []
  );
  const commentSubmit = (myproduct, fName, lName, comment) => {
    setComments([
      ...comments,
      {
        id: myproduct.id,
        fName: fName.current.value,
        lName: lName.current.value,
        comment: comment.current.value,
      },
    ]);
  };

  useEffect(() => {
    setShow(false);
  }, [comments]);

  useEffect(() => {
    localStorage.setItem(`comments`, JSON.stringify(comments));
  }, [comments]);
  // --------------------------------------------------------------------- /commentSubmit ---------------------------------------------------------------------
  // --------------------------------------------------------------------- logout ---------------------------------------------------------------------
  const logout = () => {
    setUser("");
  };
  useEffect(() => {
    localStorage.setItem(`user`, JSON.stringify(user));
  }, [user]);
  useEffect(() => {
    setCartItems(
      JSON.parse(localStorage.getItem(user ? `Cart-${user}` : `cartItems`))
    );
  }, [user]);

  useEffect(() => {
    setFaveItems(
      JSON.parse(localStorage.getItem(user ? `Faves-${user}` : `faveItems`))
    );
  }, [user]);
  // --------------------------------------------------------------------- /logout ---------------------------------------------------------------------
  // --------------------------------------------------------------------- submitCart ---------------------------------------------------------------------
  const navigate = useNavigate();

  const submitCart = () => {
    setCartItems([]);
    setTimeout(() => {
      navigate("/", { replace: true });
    }, 3000);
    toast.success(" خرید شما با موفقیت انجام شد ", {
      position: "top-right",
      rtl: true,
      autoClose: 3000,
    });
  };
  // --------------------------------------------------------------------- /submitCart ---------------------------------------------------------------------
  // --------------------------------------------------------------------- submitUserInfo ---------------------------------------------------------------------

  const submitUserInfo = (fName, lName, phone, email, nCode, username) => {
    setUserInfo({
      fName: fName.current.value ? fName.current.value : userInfo.fName,
      lName: lName.current.value ? lName.current.value : userInfo.lName,
      phone: phone.current.value ? phone.current.value : userInfo.phone,
      email: email.current.value ? email.current.value : userInfo.email,
      nCode: nCode.current.value ? nCode.current.value : userInfo.nCode,
      username: username.current.value
        ? username.current.value
        : userInfo.username,
    });
    setTimeout(() => {
      navigate("/user", { replace: true });
    }, 3000);
    toast.success(" تغییرات با موفقیت اعمال شد ", {
      position: "top-right",
      rtl: true,
      autoClose: 3000,
    });
  };

  useEffect(() => {
    localStorage.setItem(
      user ? `userInfo-${user}` : `userInfo`,
      JSON.stringify(userInfo)
    );
  }, [userInfo]);

  // --------------------------------------------------------------------- /submitUserInfo ---------------------------------------------------------------------

  // --------------------------------------------------------------------- commafy ---------------------------------------------------------------------

  function commafy(num) {
    var str = num.toString().split(".");
    if (str[0].length >= 5) {
      str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,");
    }
    if (str[1] && str[1].length >= 5) {
      str[1] = str[1].replace(/(\d{3})/g, "$1 ");
    }
    return str.join(".");
  }
  // --------------------------------------------------------------------- commafy ---------------------------------------------------------------------

  return (
    <div>
      <FuncContext.Provider
        value={{
          addProducts,
          removeProducts,
          commafy,
          removeHandler,
          toggleFaves,
          removeFave,
          commentSubmit,
          logout,
          submitCart,
          submitUserInfo,
        }}
      >
        <CartContext.Provider
          value={{
            cartItems,
            setCartItems,
            sum,
            setSum,
            totalPrice,
            setTotalPrice,
            user,
            setUser,
            faveItems,
            setFaveItems,
            comments,
            setComments,
            show,
            setShow,
            userInfo,
            setUserInfo,
          }}
        >
          <Header />
          <Outlet />
          <Footer />
        </CartContext.Provider>
      </FuncContext.Provider>
      <ToastContainer />
    </div>
  );
};

export default App;
