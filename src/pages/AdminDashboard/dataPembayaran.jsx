import React, { useEffect, useState } from "react";

import useGetPembayaranByTanggal from "../../hooks/useGetPembayaranByTanggal";
import useDeleteOrders from "../../hooks/useDeleteOrders";

//import components and styles
import Header from "../../components/header";
import Footer from "../../components/footer";

function DataPembayaran() {
  const { dataByTanggal, loadingDataByTanggal, errorDataByTanggal } =
    useGetPembayaranByTanggal();

  const [orderdatas, setPembayaran] = useState([]);
  useEffect(() => {
    if (dataByTanggal) {
      setPembayaran(dataByTanggal.pembayaran);
    }
  }, [dataByTanggal]);

  //error + loading
  const isError = errorDataByTanggal;
  const isLoading = loadingDataByTanggal;

  console.log("Order data:", orderdatas);

  var no = 1;

  //handle edit & delete
  const { deleteOrders } = useDeleteOrders();

  function handleDelete(id) {
    return function (e) {
      if (window.confirm("Apa anda yakin ingin menghapus order ini?")) {
        deleteOrders({
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
      <Header />
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
            className="col-8 border-right mx-5"
            id="middle_section"
            style={{ minHeight: "700px" }}
          >
            {isError && <p>Something Went Wrong...</p>}
            {isLoading && <p>Now loading...</p>}
            {!isError && !isLoading && (
              <div className="table-responsive">
                <table
                  class="table table-striped table-bordered table-hover mt-5 mb-5"
                  id="dataTables-example"
                >
                  <thead>
                    <tr className="text-center">
                      <th>No</th>
                      {/* <th>Kode</th> */}
                      <th>Produk</th>
                      <th>Harga</th>
                      <th>Jenis</th>
                      <th>Tanggal</th>
                      <th width="15%">Aksi</th>
                    </tr>
                  </thead>
                  {orderdatas.map((orderdata) => (
                    <tbody className="text-center">
                      <td>{no++}</td>
                      {/* <td>{orderdata.id}</td> */}
                      <td>{orderdata.produk}</td>
                      <td>{orderdata.harga}</td>
                      <td>{orderdata.jenis}</td>
                      <td>{orderdata.tanggal}</td>

                      <td>
                        <button
                          className="text-white py-2 px-2 rounded  my-4"
                          style={{ background: "red", width: "70px" }}
                          onClick={handleDelete(orderdata.id)}
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

export default DataPembayaran;
