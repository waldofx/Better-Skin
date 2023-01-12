import React, { useEffect, useState } from "react";

import useGetUsersByName from "../../hooks/useGetUsersByName";
import useInsertUsers from "../../hooks/useInsertUsers";

//import components and styles
import Header from "../../components/header";
import Footer from "../../components/footer";

function TambahDataPengguna() {
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

  //insert users
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const { insertUsers } = useInsertUsers();

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Data submitted: ", formData);

    if (formData.username === "") {
      alert("Data belum lengkap!");
    } else if (formData.confirmPassword != formData.password) {
      alert(
        "Password anda tidak sama, Mohon konfirmasi password dengan benar!"
      );
    } else {
      insertUsers({
        variables: {
          object: {
            username: formData.username,
            password: formData.password,
            email: formData.email,
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
                  <a href="/dataPengriman">Data pengiriman</a>
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
                          placeholder="Username"
                          className="form-control"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group p-2">
                        <label>Email</label>
                        <input
                          name="email"
                          type="Email"
                          placeholder="@gmail.com"
                          className="form-control"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group p-2">
                        <label>Password</label>
                        <input
                          name="confirmPassword"
                          type="Password"
                          placeholder="Password"
                          className="form-control"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group p-2">
                        <label>Confirm password</label>
                        <input
                          name="password"
                          type="password"
                          placeholder="Confirm your password"
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
                      Create Account
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

export default TambahDataPengguna;
