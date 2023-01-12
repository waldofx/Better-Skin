import React, { useEffect, useState } from "react";
import Footer from "../../components/footer";

import useGetPengirimanByTanggal from "../../hooks/useGetPengirimanByTanggal";
import useDeleteShipments from "../../hooks/useDeleteShipments";

function DataPengiriman() {
  const { dataByTanggal, loadingDataByTanggal, errorDataByTanggal } =
    useGetPengirimanByTanggal();

  const [shipmentDatas, setPengiriman] = useState([]);
  useEffect(() => {
    if (dataByTanggal) {
      setPengiriman(dataByTanggal.pengiriman);
    }
  }, [dataByTanggal]);

  //error + loading
  const isError = errorDataByTanggal;
  const isLoading = loadingDataByTanggal;

  var no = 1;

  console.log("Shipment data:", shipmentDatas);

  const { deleteShipments } = useDeleteShipments();

  function handleDelete(id) {
    return function (e) {
      if (window.confirm("Apa anda yakin ingin menghapus order ini?")) {
        deleteShipments({
          variables: {
            id: id,
          },
        });
        window.alert("Order terhapus!");
        window.location.reload(false);
      }
    };
  }

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
            className="col-8 border-right mx-5"
            id="middle_section"
            style={{ minHeight: "700px" }}
          >
            {isError && <p>Something Went Wrong...</p>}
            {isLoading && <p>Now loading...</p>}
            {!isError && !isLoading && (
              <div className="table-responsive">
                <div className="mt-5">
                  <a href="/tambahDataProduct" class="btn btn-success">
                    <i class="fa fa-plus"></i> Tambah Data Pengiriman
                  </a>
                </div>
                <br></br>
                <table
                  class="table table-striped table-bordered table-hover mt-5 mb-5"
                  id="dataTables-example"
                >
                  <thead>
                    <tr className="text-center">
                      <th>No</th>
                      <th>Username</th>
                      <th>Alamat</th>
                      <th>produk</th>
                      <th>Jumlah</th>
                      <th>Tanggal</th>
                      <th width="15%">Aksi</th>
                    </tr>
                  </thead>
                  {shipmentDatas.map((shipmentdata) => (
                    <tbody className="text-center">
                      <td>{no++}</td>
                      <td>{shipmentdata.username}</td>
                      <td>{shipmentdata.alamat}</td>
                      <td>{shipmentdata.produk}</td>
                      <td>{shipmentdata.jumlah}</td>
                      <td>{shipmentdata.tanggal}</td>

                      <td>
                        <button
                          className="text-white py-2 px-2 rounded  my-4"
                          style={{ background: "red", width: "70px" }}
                          onClick={handleDelete(shipmentdata.tanggal)}
                        >
                          Hapus
                        </button>
                      </td>
                    </tbody>
                  ))}
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DataPengiriman;
