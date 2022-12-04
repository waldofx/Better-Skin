import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

//import components
import Header from "../components/header";
import Footer from "../components/footer";
import "./login.css";

//import hooks
import useGetUsersByLogin from "../hooks/useGetUsersByLogin";
import { addAdminData } from "../store/adminDataSlice";

const Login = () => {
    // //get users
    // // ----------------- custom hook graphql -------------------------
    const { usersLogin, data, loading, error } = useGetUsersByLogin();

    const [adminData, setAdminData] = useState({
        username: "",
        password: "",
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

    function handleSubmit(e) {
        e.preventDefault();

        console.log(adminData);

        //     dispatch(addAdminData(adminData));
        //     console.log("Data submitted: ", adminData);
        //     alert("Berhasil Login!");
        //     history.goBack();

        usersLogin({
            variables: {
                object: {
                    // username: adminData.username,
                    // password: adminData.password,
                    username: "test",
                    password: "test",
                },
            },
        });
        console.log("DATA", data, "ERROR", error);
        if (error) {
            alert("Gagal Login!");
        } else {
            alert("Berhasil Login!");
        }
    }

    return (
        <div className="">
            <div>
                <Header />
            </div>
            <div>
                <div className="container">
                    <form className="row justify-content-center" onSubmit={handleSubmit} action="">
                        <div className="row justify-content-md-center">
                            <div className="col-md-4">
                                <div className="card p-4">
                                    <div className="card-body p-2">
                                        <h2>New here?</h2>
                                        <p> {">"} Registration free and easy</p>
                                        <p> {">"} Save multiple shipping and address</p>
                                        <p> {">"} View and track orders</p>
                                    </div>
                                    <a href="/register" class="btn" type="button">
                                        Register Here
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card p-2">
                                    <div className="card-body ">
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
                                    <button class="btn mt-2 mb-3" type="submit">
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
