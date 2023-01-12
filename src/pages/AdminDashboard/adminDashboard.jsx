import React from "react";

//import components and styles
import Header from "../../components/header";
import Footer from "../../components/footer";

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
                  <a href="/dataPengriman">Data pengiriman</a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="col-8 border-right"
            id="middle_section"
            style={{ minHeight: "700px" }}
          >
            <h1 className="mx-5 text-center mt-5">Welcome!!</h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AdminDashboard;
