import React, { useContext } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import { CartContext } from "../../../../Contexts/CartContext";
import { FuncContext } from "../../../../Contexts/FuncContext";

const Header = () => {
  const { sum, user, cartItems, totalPrice, userInfo } =
    useContext(CartContext);
  const { addProducts, removeProducts, logout, commafy } =
    useContext(FuncContext);
  return (
    <div>
      <header className="header mb-4">
        <section className="top-header">
          <section className="container-xxl ">
            <section className=" d-xl-flex justify-content-xl-between align-items-xl-center py-3">
              <section className="d-flex justify-content-between align-items-center d-md-block">
                <Link className="text-decoration-none my-1" to="/">
                  <img
                    className="d-flex justify-contents-between"
                    src="../../../../images/logo/8.png"
                    alt="logo"
                  />
                </Link>
              </section>
              <section className="my-3 search-wrapper">
                <section className="search-box">
                  <section className="search-textbox">
                    <span className="fa fa-search"></span>
                    <input
                      id="search"
                      type="text"
                      className=""
                      placeholder="جستجو ..."
                      autoComplete="off"
                    />
                  </section>
                </section>
              </section>
              <section className="mt-3 mt-md-auto text-xl-end header-icons">
                {user ? (
                  <Dropdown className="d-inline px-3">
                    <Dropdown.Toggle variant="" id="dropdown-basic text-dark">
                      <Link to={user === "" && "/login"} className="text-dark">
                        <span className="fs-4">
                          <i className=" fa fa-user"></i>
                        </span>
                      </Link>
                    </Dropdown.Toggle>

                    <Dropdown.Menu
                      className="dropdown-menu dropdown-menu-start custom-drop-down"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <Dropdown.Item className="dropdown-item text-start fs-6 px-3 header-dropdown-items">
                        {userInfo.fName
                          ? `${userInfo.fName} ${userInfo.lName}`
                          : `${user}`}
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item text-start fs-6 header-dropdown-items">
                        <Link to="/user" className="text-dark">
                          <i className="fa fa-user-circle"></i>
                          پروفایل کاربری
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item text-start fs-6 header-dropdown-items">
                        <i className="fa fa-newspaper-o"></i>
                        سفارشات
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item text-start fs-6 header-dropdown-items">
                        <Link to="/faves" className="text-dark">
                          <i className="fa fa-heart"></i>
                          لیست علاقه مندی
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item
                        className="dropdown-item text-start fs-6 header-dropdown-items"
                        onClick={logout}
                      >
                        <i className="fa fa-sign-out"></i>
                        خروج
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                ) : (
                  <Link to={user === "" && "/login"} className="text-dark px-4">
                    <span className="fs-4">
                      <i className=" fa fa-user"></i>
                    </span>
                  </Link>
                )}
                <section className="header-cart d-inline ps-3 border-start position-relative">
                  <Link
                    to={sum !== 0 && `/cart`}
                    className="btn btn-link position-relative text-dark header-cart-link"
                  >
                    <span className="fs-4">
                      <i className="fa fa-shopping-cart"></i>
                    </span>
                  </Link>
                  <span className="cart-badge position-absolute translate-middle badge rounded-pill bg-danger">
                    {sum !== 0 && sum}
                  </span>
                  {sum !== 0 && (
                    <section className="header-cart-dropdown shadow-lg">
                      <section className=" p-2">
                        <div className="d-flex justify-content-between border-bottom py-2">
                          <span className="text-muted">
                            {sum ? `${sum} کالا` : ""}
                          </span>
                          <Link
                            className="text-decoration-none text-info "
                            to="/cart"
                          >
                            مشاهده سبد خرید
                          </Link>
                        </div>
                        <div className="header-cart-dropdown-items my-2">
                          {cartItems &&
                            cartItems.map((cartItem) => {
                              return (
                                <div
                                  className="border-bottom my-2 py-2"
                                  key={cartItem.id}
                                >
                                  <Link
                                    to={`/${cartItem.id}`}
                                    key={cartItem.id}
                                    className="text-dark"
                                  >
                                    <div className="d-flex justify-content-between my-2">
                                      <img
                                        src={cartItem.image}
                                        alt=""
                                        className="header-cart-img"
                                      />
                                      <div className="text-truncate">
                                        <p className="text-truncate">
                                          {cartItem.name}
                                        </p>
                                      </div>
                                    </div>
                                  </Link>
                                  <div className="d-flex justify-content-between align-items-center px-2">
                                    <div className="d-flex justify-content-between border rounded p-1 col-5">
                                      <button
                                        className="btn btn-danger border-0 fw-bolder M-buttonSizing M-couHover"
                                        onClick={() => addProducts(cartItem)}
                                      >
                                        +
                                      </button>
                                      <p className="M-couterSizing fw-bold">
                                        {cartItem.qty}
                                      </p>
                                      <button
                                        className="btn btn-danger border-0 fw-bolder M-buttonSizing M-couHover"
                                        onClick={() => removeProducts(cartItem)}
                                      >
                                        {cartItem.qty === 1 ? (
                                          <i className="fa fa-trash"></i>
                                        ) : (
                                          "-"
                                        )}
                                      </button>
                                    </div>
                                    <div>
                                      <span>
                                        {commafy(cartItem.price)} تومان
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                        </div>
                      </section>
                      <section className="header-cart-dropdown-footer d-flex justify-content-between align-items-center p-2 border-top">
                        <section className="header-cart-dropdown-footer-btn">
                          <Link
                            className="btn btn-danger btn-sm d-flex "
                            to="/cart"
                          >
                            ثبت سفارش
                          </Link>
                        </section>
                        <section className="header-total-price fw-bold">
                          <span>{commafy(totalPrice)} تومان</span>
                        </section>
                      </section>
                    </section>
                  )}
                </section>
              </section>
            </section>
          </section>
        </section>

        <Navbar expand={"xl"} className="fs-6 canvasIndex">
          <Container>
            <Navbar.Toggle
              className="toggleMove"
              aria-controls={`offcanvasNavbar-expand-expand-xl`}
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-xl`}
              aria-labelledby={`offcanvasNavbarLabel-expand-xl`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xl`}>
                  <Link className="text-decoration-none my-1" to="/">
                    <img
                      className="d-flex justify-contents-between   "
                      src="../../../../images/logo/8.png"
                      alt="logo"
                    />
                  </Link>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <NavDropdown
                  title="دسته بندی کالاها"
                  id={`offcanvasNavbarDropdown-expand-expand-xl`}
                  className="justify-content-start my-2 fw-bold"
                >
                  <NavDropdown.Item href="#action3" className="text-end">
                    کالای دیجیتال
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4" className="text-end">
                    لوازم جانبی موبایل
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5" className="text-end">
                    خانه و آشپزخانه
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav className="justify-content-start flex-grow-1 px-3 fw-bold">
                  <Nav.Link href="#action1">سوپرمارکت</Nav.Link>
                  <Nav.Link href="#action2">تخفیف ها و پیشنهادها</Nav.Link>
                  <Nav.Link href="#action3">آمازون من</Nav.Link>
                  <Nav.Link href="#action4">آمازون پلاس</Nav.Link>
                  <Nav.Link href="#action5">درباره ما</Nav.Link>
                  <Nav.Link href="#action6">فروشنده شوید</Nav.Link>
                  <Nav.Link href="#action7">فرصت های شغلی</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </header>
    </div>
  );
};

export default Header;
