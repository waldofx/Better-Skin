import React, { useEffect, useState } from "react";

import useInsertShipments from "../../hooks/useInsertShipments";
import useGetPengirimanByTanggal from "../../hooks/useGetPengirimanByTanggal";

//import components and styles
import Header from "../../components/header";
import Footer from "../../components/footer";

function TambahDataPengiriman() {
  const { dataByTanggal, loadingDataByTanggal, errorDataByTanggal } =
    useGetPengirimanByTanggal();
  //setproducts at the start of render using useeffect
  const [shipmentDatas, setPengiriman] = useState([]);
  useEffect(() => {
    if (dataByTanggal) {
      setPengiriman(dataByTanggal.pengiriman);
    }
  }, [dataByTanggal]);

  //error + loading
  const isError = errorDataByTanggal;
  const isLoading = loadingDataByTanggal;

  console.log("Data pengiriman:", shipmentDatas);

  //insert products
  const [formData, setFormData] = useState({
    name: "",
    price: 0,
    initial_stock: 0,
    final_stock: 0,
    total: 0,
    img: "",
    desc: "",
  });

  const { insertShipments } = useInsertShipments();

  function handleChange(e) {
    const username = e.target.username;
    const value = e.target.value;

    setFormData((prev) => {
      return { ...prev, [username]: value };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Data submitted: ", formData);

    if (formData.username === "" || formData.alamat === "") {
      alert("Data belum lengkap!");
    } else {
      insertShipments({
        variables: {
          object: {
            username: formData.username,
            alamat: formData.alamat,
            produk: formData.produk,
            jumlah: formData.jumlah,
            tanggal: formData.tanggal,
          },
        },
      });
      alert("Data berhasil dikirim ke database!");
    }
  }

  return (
    <div>
      <Header />
      <div id="wrapper">
        <div className="row">
          <div
            className="col-1 border-right"
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
            className="col border-right mx-5 my-5"
            id="middle_section"
            style={{ minHeight: "700px" }}
          >
            {" "}
            <form
              className="row justify-content-center"
              onSubmit={handleSubmit}
              action=""
            >
              <div className="row justify-content-md-center">
                <div className="col-md-4">
                  <div className="card p-2" id="card_register">
                    <div className="card-body ">
                      <div className="form-group p-2">
                        <label>Username</label>
                        <input
                          name="username"
                          type="text"
                          placeholder="Nama product"
                          className="form-control"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group p-2">
                        <label>Alamat</label>
                        <input
                          name="alamat"
                          type="text"
                          placeholder="Jalan mayor oking"
                          className="form-control"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group p-2">
                        <label>Produk</label>
                        <input
                          name="produk"
                          type="text"
                          placeholder="nama produk"
                          className="form-control"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group p-2">
                        <label>jumlah</label>
                        <input
                          name="alamat"
                          type="number"
                          placeholder=""
                          className="form-control"
                          onChange={handleChange}
                        />
                      </div>
                      \
                      <div className="form-group p-2">
                        <label>tanggal</label>
                        <input
                          name="tanggal"
                          type="date"
                          placeholder="Jalan mayor oking"
                          className="form-control"
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <button
                      class="btn btn-danger mt-2 mb-3"
                      type="submit"
                      id="btn_register"
                      style={{ color: "black" }}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TambahDataPengiriman;
