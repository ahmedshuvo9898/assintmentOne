import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div>
        {/* <!-- banner -->  */}
        <section className="inner-page-banner" id="home"></section>
        {/* <!-- //banner -->

<!-- page details --> */}
        <div className="breadcrumb-agile">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Contact Us
            </li>
          </ol>
        </div>
        {/* <!-- //page details -->
<!-- //banner-botttom --> */}
        <section className="content-info py-5">
          <div className="container py-md-5">
            <div className="text-center px-lg-5">
              <h3 className="heading text-center mb-3 mb-sm-5">Contact Us</h3>
              <div className="title-desc text-center px-lg-5">
                <p className="px-lg-5 sub-wthree">
                  Praesent ullamcorper dui turpis.At vero eos et accusam et
                  justo duo dolores et ea rebum.Integer sit amet mattis quam,
                  sit amet ultricies velit. Praesent ullamcorper dui turpis.
                  Praesent ullamcorper dui turpis.
                </p>
              </div>
            </div>
            <div className="contact-w3pvt-form mt-5">
              <form action="#" className="w3layouts-contact-fm" method="post">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>First Name</label>
                      <input
                        className="form-control"
                        type="text"
                        name="Name"
                        placeholder=""
                        required=""
                      />
                    </div>
                    <div className="form-group">
                      <label>Last Name</label>
                      <input
                        className="form-control"
                        type="text"
                        name="Name"
                        placeholder=""
                        required=""
                      />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        className="form-control"
                        type="email"
                        name="Email"
                        placeholder=""
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>Write Message</label>
                      <textarea
                        className="form-control"
                        name="Message"
                        placeholder=""
                        required=""
                      ></textarea>
                    </div>
                  </div>
                  <div className="form-group mx-auto mt-3">
                    <button type="submit" className="btn submit">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
        {/* <!-- //banner-botttom --> */}

        <div className="map-w3layouts">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.27404345275!2d-118.69191921441556!3d34.02016130939095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos+Angeles%2C+CA%2C+USA!5e0!3m2!1sen!2sin!4v1522474296007"
            allowfullscreen=""
          ></iframe>
        </div>
      </div>
    );
  }
}

export default Contact;
