import React, { useEffect, useState } from "react";

//import components and styles
import Header from "../components/header";
import Footer from "../components/footer";

//import hooks
import useGetUsersByName from "../hooks/useGetUsersByName";
import useInsertUsers from "../hooks/useInsertUsers";

function CreateUser() {
    //get users
    // ----------------- custom hook graphql -------------------------
    const { dataByName, loadingDataByName, errorDataByName } = useGetUsersByName();

    //setusers at the start of render using useeffect
    const [userdatas, setUsers] = useState([]);
    useEffect(() => {
        if (dataByName) {
            setUsers(dataByName.users);
        }
    }, [dataByName]);

    //error + loading
    const isError = errorDataByName;
    const isLoading = loadingDataByName;

    //insert users
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        confirmPassword: "",
        is_admin: true,
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
        } else if (formData.confirmPassword != formData.password){
            alert("Password anda tidak sama, Mohon konfirmasi password dengan benar!")
        } else{
            insertUsers({
                variables: {
                    object: {
                        username: formData.username,
                        password: formData.password,
                        is_admin: formData.is_admin,
                        email: formData.email,
                    },
                },
            });
            alert("Data berhasil dikirim ke database!");
        }
    }

    return (
        <div className="luar">
            <Header />
            <div style={{ margin: "108px" }}>
                <div className="container">
                    <form className="row justify-content-center" onSubmit={handleSubmit} action="">
                        <div className="row justify-content-md-center">
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
                                    <button class="btn btn-danger mt-2 mb-3" type="submit"  >
                                        Create Account
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default CreateUser;
