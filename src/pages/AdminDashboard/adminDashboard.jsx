import React from "react";

//import components and styles
import Header from "../../components/header";
import Footer from "../../components/footer";
import "./style.css";

function AdminDashboard() {
  return (
    <div>
      <Header />
      <div id="wrapper">
        <div className="row">
          <div
            className="col-2 border-right"
            style={{ background: "#37474F", width: "252px" }}
          >
            <div
              className="sidebar-header"
              style={{ backgroundColor: "#263238", width: "240px" }}
            >
              <div className="d-flex flex-column text-center  py-5">
                <header className="text-white" style={{ fontWeight: "bold" }}>
                  Admin Dashboard
                </header>
              </div>
            </div>
            <div className="sidebar" style={{ background: "#37474F" }}>
              <ul>
                <li>
                  <a href="/dataPengguna">Data pengguna</a>
                </li>
                <li>
                  <a href="/dataProduct">Data product</a>
                </li>
                <li>
                  <a href="/dataPembayaran">Data pembayaran</a>
                </li>
                <li>
                  <a href="/dataPengiriman">Data pengiriman</a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="col-8 border-right"
            id="middle_section"
            style={{ minHeight: "700px" }}
          >
            <section id="welcome-section" class="welcome-section">
              <div class="welcome-card">
                <div class="container">
                  <div class="card" id="welcome" style={{ marginLeft: "17em" }}>
                    <div class="title">
                      <h1>Welcome</h1>
                    </div>
                    <div class="circle"></div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AdminDashboard;
