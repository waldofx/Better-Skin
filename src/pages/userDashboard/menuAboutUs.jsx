import React from "react";
import Footer from "../../components/footer";
import "./style.css";

function aboutUs() {
  return (
    <div>
      <div className="header">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              Better Skin
            </a>
            <div className=" collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav ms-auto d-none d-lg-inline-flex">
                <li className="nav-item active">
                  <a className="nav-link" href="/adminDashboard">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div id="wrapper">
        <div className="row">
          <div className="col-2 border-right" id="first_section">
            <div className="sidebar-header">
              <div className="d-flex flex-column text-center  py-5">
                <span className="font-weight-bold">Username</span>
                <span className="text-black-50">Email</span>
              </div>
            </div>
            <div className="sidebar float-left">
              <ul>
                <li>
                  <a href="/">Homepage</a>
                </li>
                <li>
                  <a href="/historyProduct">History product</a>
                </li>
                <li>
                  <a href="/transactionList">Transaction list</a>
                </li>
                <li>
                  <a href="/settings">Settings</a>
                </li>
                <li>
                  <a href="/aboutUs">About us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-8 border-right" id="middle_section">
            <div className="col">
              <h1 className="text-center mt-5">Hi, welcome to Better Skin!</h1>
              <p className="" style={{ margin: "50px" }}>
                We make products designed with your real beauty routine in mind.
                Here you'll find skincare, makeup, body care, and fragrance, all
                painstakingly perfected to be worthy of your bathroom shelf.
              </p>
              <p className="" style={{ margin: "50px" }}>
                Better skin, Inc. was founded in 2021 on the belief that beauty
                isn't built in a boardroom—it happens when you're a part of the
                process. We got our start with Into The Gloss, a beauty website
                devoted to people sharing the products they love, and our source
                for inspiration and information.
              </p>
              <p className="" style={{ margin: "50px" }}>
                Now, we're building the future beauty company where everything
                we make starts with you. We create the products you tell us you
                wish existed. We believe in thoughtful design, and enabling
                conversation (which is where it all starts). But most of all, we
                believe that beauty is about having fun, wherever you are in
                your journey.
              </p>
              <div
                className="card card-image"
                style={{
                  backgroundImage:
                    'url("https://i.ibb.co/5WPnjzX/skincare.jpg")',
                }}
              >
                <div class="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
                  <div>
                    <h3 class="card-title pt-2">
                      <strong className="text-black">
                        Our mission is simple
                      </strong>
                    </h3>
                    <p className="text-black mt-5">
                      we want to help you love your skin!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5 mb-5">
              <img
                src="https://i.ibb.co/3zyZD06/skincare2.jpg"
                style={{ width: "400px" }}
              />
              <div className="col">
                <h1 style={{ color: "#7a4e36" }}>Confidence in a box.</h1>
                <p style={{ textAlign: "justify" }}>
                  We know just how life-changing it can be to feel more
                  confident in your skin and we firmly believe that confidence
                  is achieved through self-love. That’s why we made a promise to
                  help as many people as possible love their skin. We’re so
                  happy that you’re here and we are truly honored to play a part
                  in helping you achieve the complexion of your dreams.
                </p>
              </div>
            </div>
            <div className="row mt-5 mb-5">
              <div className="col">
                <h1 style={{ color: "#7a4e36" }}>
                  Where skincare meets science.
                </h1>
                <p style={{ textAlign: "justify" }}>
                  You may be asking yourself “What’s so special about medical
                  grade skincare?” Good question! Put simply, medical grade
                  skincare is clinically proven, safer, and more effective than
                  over-the-counter skincare. When you invest in medical grade
                  skincare, you invest in skincare that actually creates change
                  within your skin for both immediate and lasting results.
                </p>
              </div>
              <img
                src="https://i.ibb.co/rwtxbB7/skincare3.jpg"
                style={{ width: "400px" }}
              />
            </div>
          </div>
          <div className="col-2" id="last_section">
            <div className="py-5">
              <h4
                className="text-center"
                style={{ color: "grey", fontFamily: "sans-serif" }}
              >
                Article
              </h4>
              <div className="container">
                <div className="card cb1 mt-5">
                  <div className="card-body">
                    <img
                      src="https://i.postimg.cc/76yVpHRw/images.jpg"
                      alt=""
                      width={"172px"}
                    />
                    <p className="" align="left">
                      Having healthy and clear, glowing skin requires extra
                      care.
                    </p>
                    <a
                      href="https://www.loreal-paris.co.id/beauty-magazine/cara-memakai-skincare-agar-hasilnya-maksimal"
                      className="btn-article mt-2"
                      target="_blank"
                    >
                      Read Full Article
                    </a>
                  </div>
                </div>
                <div className="card cb1 mt-5">
                  <div className="card-body">
                    <img
                      src="https://i.postimg.cc/x121JBBq/62922b221dd75.jpg"
                      alt=""
                      width={"172px"}
                    />
                    <p className="" align="left">
                      Not only choosing skin care products that are suitable for
                      your skin type and skin problems is important, but also
                      how to use skin care properly.
                    </p>
                    <a
                      href="https://www.loreal-paris.co.id/beauty-magazine/cara-memakai-skincare-agar-hasilnya-maksimal"
                      className="btn-article mt-2"
                      target="_blank"
                    >
                      Read Full Article
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default aboutUs;
