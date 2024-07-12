import React, { useContext, useRef } from "react";
import { Modal, Form, Button, Row, Col } from "react-bootstrap";
import { CartContext } from "../../../../Contexts/CartContext";
import { FuncContext } from "../../../../Contexts/FuncContext";

const ProductSpecifications = ({ myproduct }) => {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const fName = useRef();
  const lName = useRef();
  const comment = useRef();
  const { comments, show, setShow } = useContext(CartContext);
  const { commentSubmit } = useContext(FuncContext);

  return (
    <section className="container mt-4">
      <section className="bg-white p-3 rounded shadow-sm">
        <div className="mb-3 border-bottom sticky-top bg-white">
          <div className="d-flex sticky top-0">
            <div className="R-tittle me-3">
              <a href="#R-heading-about" className="text-dark">
                <span className=" fw-bold ">معرفی</span>
              </a>
            </div>
            <div className="R-tittle me-3">
              <a href="#R-heading-Property" className="text-dark">
                <span className="fw-bold ">ویژگی ها</span>
              </a>
            </div>
            <div className="R-tittle">
              <a href="#R-heading-view" className="text-dark">
                <span className=" fw-bold ">دیدگاه ها</span>
              </a>
            </div>
          </div>
        </div>

        <section className=" mt-5">
          <div className="border-bottom" id="R-heading-about">
            <h6>معرفی</h6>
          </div>
          <div className="mt-3 lh-lg">
            <p className="R-pfont">
              خلاصه کتاب اثر مرکب «انتخاب‌های شما تنها زمانی معنی دار است که
              آنها را به دلخواه به رؤیاهای خود متصل کنید. انتخاب‌های شایسته و
              انگیزشی، همان‌هایی هستند که شما به عنوان هدف خود و هسته اصلی زندگی
              خود در بالاترین ارزش‌های خود تعین می‌کنید. شما باید چیزی را
              بخواهید و می‌دانید که چرا شما آن را می‌خواهید یا به راحتی
              می‌توانید آن از دست بدهید.» «اولین گام در جهت تغییر، آگاهی است.
              اگر می‌خواهید از جایی که هستید به جایی که می‌خواهید بروید، باید با
              درک انتخاب‌هایی که شما را از مقصد مورد نظر خود دور می‌کنند، شروع
              کنید.» «فرمول کامل برای به دست آوردن خوش شانسی: آماده‌سازی (رشد
              شخصی) + نگرش (باور / ذهنیت) + فرصت (چیز خوبی که راه را هموار
              می‌کند) + اقدام (انجام کاری در مورد نظر) = شانس» «ما همه می‌توانیم
              انتخاب‌های بسیار خوبی داشته باشیم. ما می‌توانیم همه چیز را کنترل
              کنیم. این در توانایی ماست که همه چیز را تغییر دهیم. به جای اینکه
              غرق در گذشته شویم، باید دوباره انرژی خود را جمع کنیم، می‌توانیم از
              تجربیات گذشته برای حرکت‌های مثبت و سازنده استفاده کنیم.» برای
              ایجاد تغییر، ما نیاز به این داریم که عادات و رفتار خوب را ایجاد
              کنیم، که در کتاب از آن به عنوان تکانش یاد می شود. تکانش بدین معنی
              که با ریتم منظم و دائمی و ثبات قدم همراه باشید. حرکت های افراطی و
              تفریطی، موضع های عجله ای و جوگیر شدن و عدم ریتم مناسب موجب خواهد
              شد که ثبات قدم نداشته باشیم و حتی شاید از مسیر اصلی دور شویم و
              تکانش ما با لرزه های فراوان و یا حتی سکون و سکوت مواجه شود. واقعیت
              رهرو آن است که آهسته و پیوسته رود اینجا پدیدار می گردد و باید
              همیشه بدانیم هیچ چیز مثل عدم ثبات قدم و نداشتن ریتم مناسب در زمان
              تغییر، نمی تواند تکانش را با مشکل مواجه کند! متن بالا شاید بهترین
              خلاصه ای باشد که می شود از کتاب نوشت!
            </p>
          </div>

          <section>
            <div className="border-bottom" id="R-heading-Property">
              <h6>ویژگی ها</h6>
            </div>

            <section className="R-table mb-4 table-responsive mt-3">
              <table className="table table-bordered border-white">
                <thead>
                  <tr>
                    <td>وزن</td>
                    <td>220 گرم</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>قطع</td>
                    <td>رقعی</td>
                  </tr>
                  <tr>
                    <td>تعداد صفحات</td>
                    <td>173 صفحه</td>
                  </tr>
                  <tr>
                    <td>نوع جلد</td>
                    <td>شومیز</td>
                  </tr>
                  <tr>
                    <td>نویسنده/نویسندگان</td>
                    <td>دارن هاردی</td>
                  </tr>
                  <tr>
                    <td>مترجم</td>
                    <td>ناهید محمدی</td>
                  </tr>
                  <tr>
                    <td>ناشر</td>
                    <td>انتشارات نگین ایران</td>
                  </tr>
                  <tr>
                    <td>رده‌بندی کتاب</td>
                    <td>روان‌شناسی (فلسفه و روان‌شناسی)</td>
                  </tr>
                  <tr>
                    <td>شابک</td>
                    <td>9786227195132</td>
                  </tr>
                  <tr>
                    <td>سایر توضیحات</td>
                    <td>چهار صفحه اول رنگی</td>
                  </tr>
                </tbody>
              </table>
            </section>
          </section>

          <section>
            <article>
              <div className="border-bottom" id="R-heading-view">
                <h6>دیدگاه ها</h6>
              </div>

              <section className="pt-3 pb-3">
                <div className="mt-2">
                  <Button
                    className="btn btn-light R-pfont w-100 p-3 text-secondary"
                    onClick={handleShow}
                  >
                    <i className="fa fa-plus text-secondary"></i> افزودن دیدگاه
                  </Button>

                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>
                        <i className="fa fa-plus fs-6 me-2"></i>
                        افزودن دیدگاه
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Row>
                            <Col>
                              <Form.Label>نام : </Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="نام ..."
                                ref={fName}
                              />
                            </Col>
                            <Col>
                              <Form.Label>نام خانوادگی : </Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="نام خانوادگی ..."
                                ref={lName}
                              />
                            </Col>
                          </Row>
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlTextarea1"
                        >
                          <Form.Label>دیدگاه شما : </Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="دیدگاه شما ..."
                            ref={comment}
                          />
                        </Form.Group>
                      </Form>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        // onClick={handleClose}
                        onClick={() =>
                          commentSubmit(myproduct, fName, lName, comment)
                        }
                        type="button"
                        className="btn btn-primary btn-sm"
                      >
                        ثبت دیدگاه
                      </Button>
                      <Button
                        onClick={handleClose}
                        type="button"
                        className="btn btn-danger btn-sm"
                      >
                        بستن
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>

                {comments &&
                  comments.map((comment, index) => {
                    if (comment.id === myproduct.id) {
                      return (
                        <div key={index} className="mt-2 bg-light p-2 ">
                          <p className="border-bottom fs-6">
                            <span className="R-pfont pe-3 text-secondary">
                              ۲۱ مرداد ۱۴۰۰
                            </span>
                            {comment.fName} {comment.lName}
                          </p>
                          <p className="R-pfont text-secondary">
                            {comment.comment}
                          </p>
                        </div>
                      );
                    }
                  })}
              </section>
            </article>
          </section>
        </section>
      </section>
    </section>
  );
};

export default ProductSpecifications;
