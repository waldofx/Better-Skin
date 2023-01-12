import React, { useEffect, useState } from "react";

import useGetUsersByName from "../../hooks/useGetUsersByName";
import useDeleteUsers from "../../hooks/useDeleteUsers";

//import components and styles
import Header from "../../components/header";
import Footer from "../../components/footer";

function DataPengguna() {
  const { dataByName, loadingDataByName, errorDataByName } =
    useGetUsersByName();

  const [userdatas, setUsers] = useState([]);
  useEffect(() => {
    if (dataByName) {
      setUsers(dataByName.users);
    }
  }, [dataByName]);

  //error + loading
  const isError = errorDataByName;
  const isLoading = loadingDataByName;

  console.log("User data:", userdatas);

  var no = 1;

  //handle edit & delete
  const { deleteUsers } = useDeleteUsers();

  function handleDelete(id) {
    return function (e) {
      if (window.confirm("Apa anda yakin ingin menghapus user ini?")) {
        deleteUsers({
          variables: {
            id: id,
          },
        });
        window.alert("User terhapus!");
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
                  <a href="/tambahDataPengguna" class="btn btn-success">
                    <i class="fa fa-plus"></i> Tambah Data Pengguna
                  </a>
                </div>
                <br></br>
                <table
                  class="table table-bordered table-bordered table-hover mt-5 mb-5"
                  id="dataTables-example"
                >
                  <thead>
                    <tr className="text-center">
                      <th>No</th>
                      <th>Username</th>
                      <th>Password</th>
                      <th>Email</th>
                      <th>Admin</th>

                      <th width="15%">Aksi</th>
                    </tr>
                  </thead>
                  {userdatas.map((userData) => (
                    <tbody className="text-center">
                      <td>{no++}</td>
                      <td>{userData.username}</td>
                      <td>{userData.password}</td>
                      <td>{userData.email}</td>
                      <td>{userData.is_admin}</td>
                      <td>
                        <button
                          className="text-white py-2 px-2 rounded  my-4"
                          style={{ background: "red", width: "70px" }}
                          onClick={handleDelete(userData.id)}
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

export default DataPengguna;
