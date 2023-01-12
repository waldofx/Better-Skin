import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

//import components
import Header from "../components/header";
import Footer from "../components/footer";
import "./style.css";

//import hooks
import useGetUsersByLogin from "../hooks/useGetUsersByLogin";
import { addAdminData } from "../store/adminDataSlice";

const GetAdminByID = gql`
  query MyQuery($id: Int!) {
    users(where: { id: { _eq: $id } }) {
      id
      password
      username
      is_admin
      email
    }
  }
`;

const Login = () => {
  // //get users
  // // ----------------- custom hook graphql -------------------------
  // const { usersLogin, data, loading, error } = useGetUsersByLogin();

  //initial detail
  const { data, loading, error } = useQuery(GetAdminByID, {
    variables: { id: 7 },
  });

  const [adminData, setAdminData] = useState({
    username: "",
    password: "",
    email: "",
    status: true,
  });

  const dispatch = useDispatch();
  const history = useHistory();

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setAdminData((prev) => {
      return { ...prev, [name]: value };
    });
  }

  // function handleSubmit(e) {
  //     e.preventDefault();

  //     console.log(adminData);

  //         dispatch(addAdminData(adminData));
  //         console.log("Data submitted: ", adminData);
  //         alert("Berhasil Login!");
  //         history.goBack();

  //     usersLogin({
  //         variables: {
  //             object: {
  //                 // username: adminData.username,
  //                 // password: adminData.password,
  //                 username: "test",
  //                 password: "test",
  //             },
  //         },
  //     });
  //     console.log("DATA", data, "ERROR", error);
  //     if (error) {
  //         alert("Gagal Login!");
  //     } else {
  //         alert("Berhasil Login!");
  //     }
  // }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(loading, error);
    console.log(data.users[0]);

    if (
      data.users[0].username === adminData.username &&
      data.users[0].password === adminData.password
    ) {
      dispatch(addAdminData(adminData));
      console.log("Data submitted: ", adminData);
      alert("Berhasil login!");
      // history.goBack();
      history.push("/adminDashboard") 
    } else {
      console.log("Data submitted: ", adminData);
      alert("Gagal login! Username atau Password salah!");
    }
  }

  return (
    <div className="">
      <div>
        <Header />
      </div>
      <div>
        <div
          className="container"
          id="content_login"
          style={{ minHeight: "670px" }}
        >
          <form
            className="row justify-content-center mt-5"
            onSubmit={handleSubmit}
            action=""
          >
            <div className="row justify-content-md-center">
              <div className="col-md-4">
                <div className="card p-4 mt-5 mb-5" id="card_register">
                  <div className="card-body p-2">
                    <h2>New here?</h2>
                    <p> {">"} Registration free and easy</p>
                    <p> {">"} Save multiple shipping and address</p>
                    <p> {">"} View and track orders</p>
                  </div>
                  <a
                    href="/register"
                    class="btn"
                    type="button"
                    id="btn_register"
                  >
                    Register Here
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card p-2 mt-5 mb-5" id="card_register">
                  <div className="card-body">
                    <div className="form-group p-2">
                      <label>Username</label>
                      <input
                        name="username"
                        type="text"
                        placeholder="Username"
                        className="form-control"
                        required
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group p-2">
                      <label>Password</label>
                      <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        className="form-control"
                        required
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <button class="btn mt-2 mb-3" type="submit" id="btn_login">
                    Login Here
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Login;
