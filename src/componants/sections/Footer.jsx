import React, { Component } from "react";
class Footer extends Component {
  render() {
    return (
      <div>
        {/* <!-- subscribe --> */}
        <section className="subscribe" id="subscribe">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-5 d-flex subscribe-left p-lg-5 py-sm-5 py-4">
                <div className="news-icon mr-3">
                  <span className="fa fa-paper-plane" aria-hidden="true"></span>
                </div>
                <div className="text">
                  <h3>Subscribe To Our Newsletter</h3>
                </div>
              </div>
              <div className="col-md-7 subscribe-right p-lg-5 py-sm-5 py-4">
                <form action="#" method="post">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email here"
                    required=""
                  />
                  <button className="btn1">
                    <span
                      className="fa fa-paper-plane"
                      aria-hidden="true"
                    ></span>
                  </button>
                </form>
                <p>we never share your email with anyone else</p>
              </div>
            </div>
          </div>
        </section>
        {/* {/* <!-- //subscribe -->} */}
      </div>
    );
  }
}

export default Footer;
