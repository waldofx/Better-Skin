import React, { useEffect, useState } from "react";
import Footer from "../../components/footer";

import useGetPembayaranBytanggal from "../../hooks/useGetPembayaranByTanggal";
import useDeleteOrder from "../../hooks/useDeleteOrder";

function DataPembayaran() {
  const { dataByTanggal, loadingDataByTanggal, errorDataByTanggal } =
    useGetPembayaranBytanggal();

  const [orderdatas, setOrders] = useState([]);
  useEffect(() => {
    if (dataByTanggal) {
      setOrders(dataByTanggal.orders);
    }
  }, [dataByTanggal]);

  //error + loading
  const isError = errorDataByTanggal;
  const isLoading = loadingDataByTanggal;

  const { deleteOrders } = useDeleteOrder();
  function handleDelete(id) {
    return function (e) {
      if (window.confirm("Apa anda yakin ingin menghapus pesanan ini?")) {
        deleteOrders({
          variables: {
            id: id,
          },
        });
        window.alert("Pesanan terhapus!");
        window.location.reload(false);
      }
    };
  }

  console.log("Order data:", orderdatas);

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
                  <a className="nav-link" href="/login">
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
          <div
            className="col-2 border-right"
            style={{
              background: "#37474F",
              width: "252px",
              minHeight: "300px",
            }}
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
            {isError && <p>Something Went Wrong...</p>}
            {isLoading && <p>Now loading...</p>}
            {!isError && !isLoading && (
              <table
                class="table table-striped table-bordered table-hover mt-5 mb-5"
                id="dataTables-example"
              >
                <thead>
                  <tr className="text-center">
                    <th>No</th>
                    <th>Product</th>
                    <th>Harga</th>
                    <th>Jenis</th>
                    <th>Tanggal</th>
                    <th width="10%">Aksi</th>
                  </tr>
                </thead>
                {orderdatas.map((orderData) => (
                  <tbody className="text-center">
                    <td>{orderData.kode}</td>
                    <td>{orderData.produk}</td>
                    <td>{orderData.harga}</td>
                    <td>{orderData.jenis}</td>
                    <td>{new Date(orderData.tangal).toLocaleString()}</td>
                    <td>
                      <button
                        className="text-white py-2 px-2 rounded mx-2  my-4"
                        style={{
                          background: "green",
                          width: "70px",
                          fontStyle: "bold",
                        }}
                        onClick={handleDelete(orderData.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="text-white font-bold bg-red-600 hover:bg-red-800 py-1 px-1 rounded my-4"
                        style={{ background: "red" }}
                        onClick={handleDelete(orderData.kode)}
                      >
                        Hapus
                      </button>
                    </td>
                  </tbody>
                ))}
              </table>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DataPembayaran;
