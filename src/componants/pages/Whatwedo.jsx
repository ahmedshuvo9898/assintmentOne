import React, { Component } from "react";
class Whatwedo extends Component {
  render() {
    return (
      <div>
        {/* <!-- banner --> */}
        <section className="inner-page-banner" id="home"></section>
        {/* <!-- //banner -->

<!-- page details --> */}
        <div className="breadcrumb-agile">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Services
            </li>
          </ol>
        </div>
        {/* <!-- //page details -->
<!-- what we do --> */}
        <section className="what-we-do py-5">
          <div className="container py-md-5">
            <h3 className="heading text-center mb-3 mb-sm-5">Our Stylings</h3>
            <div className="row what-we-do-grid">
              <div className="col-lg-3 col-md-6 pr-0 pl-md-3 pl-0">
                <img src="assats/images/sp1.jpg" className="img-fluid" alt="" />
              </div>
              <div className="col-lg-3 col-md-6 bg-grid-clr">
                <h4 className="mt-md-0 my-2">HAIRCUTS</h4>
                <p className="">
                  Sed ut perspiciatis undert sed omnis natus error .
                </p>
              </div>
              <div className="col-lg-3 col-md-6 pr-0 pl-md-3 pl-0 mt-lg-0 mt-4">
                <img src="assats/images/sp2.jpg" className="img-fluid" alt="" />
              </div>
              <div className="col-lg-3 col-md-6 bg-grid-clr mt-lg-0 mt-md-4">
                <h4 className="mt-md-0 my-2">SHAVES</h4>
                <p className="">
                  Sed ut perspiciatis undert sed omnis natus error .
                </p>
              </div>

              <div className="col-lg-3 col-md-6 pr-0 pl-md-3 pl-0 mt-lg-5 mt-4">
                <img src="assats/images/sp3.jpg" className="img-fluid" alt="" />
              </div>
              <div className="col-lg-3 col-md-6 bg-grid-clr mt-lg-5 mt-md-4">
                <h4 className="mt-md-0 my-2">BEARD TRIM</h4>
                <p className="">
                  Sed ut perspiciatis undert sed omnis natus error .
                </p>
              </div>
              <div className="col-lg-3 col-md-6 pr-0 pl-md-3 pl-0 mt-lg-5 mt-4">
                <img src="assats/images/sp4.jpg" className="img-fluid" alt="" />
              </div>
              <div className="col-lg-3 col-md-6 bg-grid-clr mt-lg-5 mt-md-4">
                <h4 className="mt-md-0 my-2">MUSTACHE TRIM</h4>
                <p className="">
                  Sed ut perspiciatis undert sed omnis natus error .
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- //what we do -->

  <!--/testimonials--> */}
        <section className="testimonials py-5" id="testimonials">
          <div className="container py-md-5">
            <h3 className="heading text-center mb-3 mb-sm-5">Client Reviews</h3>
            <div className="row mt-3">
              <div className="col-md-4 test-grid text-left px-lg-3">
                <div className="test-info">
                  <p>
                    Lorem Ipsum has been the industry's standard since the
                    1500s. Praesent ullamcorper dui turpis.
                  </p>
                  <h3 className="mt-md-4 mt-3"> Abraham Smith</h3>

                  <div className="test-img text-center mb-3">
                    <img
                      src="assats/images/test1.jpg"
                      className="img-fluid"
                      alt="user-image"
                    />
                  </div>
                  <div className="mobl-footer test-soc text-center">
                    <ul className="list-unstyled">
                      <li>
                        <a href="#">
                          <span className="fa fa-facebook-f"></span>
                        </a>
                      </li>
                      <li className="mx-1">
                        <a href="#">
                          <span className="fa fa-twitter"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4 test-grid text-left px-lg-3 py-sm-5 py-md-0 py-3">
                <div className="test-info">
                  <p>
                    Lorem Ipsum has been the industry's standard since the
                    1500s. Praesent ullamcorper dui turpis.
                  </p>
                  <h3 className="mt-md-4 mt-3"> Mariana Noe</h3>
                  <div className="test-img text-center mb-3">
                    <img
                      src="assats/images/test2.jpg"
                      className="img-fluid"
                      alt="user-image"
                    />
                  </div>
                  <div className="mobl-footer test-soc text-center">
                    <ul className="list-unstyled">
                      <li>
                        <a href="#">
                          <span className="fa fa-facebook-f"></span>
                        </a>
                      </li>
                      <li className="mx-1">
                        <a href="#">
                          <span className="fa fa-twitter"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4 test-grid text-left px-lg-3">
                <div className="test-info">
                  <p>
                    Lorem Ipsum has been the industry's standard since the
                    1500s. Praesent ullamcorper dui turpis.
                  </p>
                  <h3 className="mt-md-4 mt-3">Nebula Nairobi</h3>

                  <div className="test-img text-center mb-3">
                    <img
                      src="assats/images/test3.jpg"
                      className="img-fluid"
                      alt="user-image"
                    />
                  </div>
                  <div className="mobl-footer test-soc text-center">
                    <ul className="list-unstyled">
                      <li>
                        <a href="#">
                          <span className="fa fa-facebook-f"></span>
                        </a>
                      </li>
                      <li className="mx-1">
                        <a href="#">
                          <span className="fa fa-twitter"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!--//testimonials--> */}
      </div>
    );
  }
}

export default Whatwedo;
