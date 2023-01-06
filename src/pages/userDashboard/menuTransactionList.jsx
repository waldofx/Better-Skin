import React from "react";
import Footer from "../../components/footer";
import "./style.css";

function transactionList() {
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
          <div className="col-8 border-right" id="middle_section"></div>
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

export default transactionList;
