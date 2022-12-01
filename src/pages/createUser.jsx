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
        } else {
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
            {/* form insert users */}
            {/* <div className="luar-container">
                <div className="container">
                    <h1 className="tambah-user">Tambahkan User</h1>
                    <form class="form" onSubmit={handleSubmit} action="">
                        <div class="username">
                            <label class="" for="username">
                                Username
                            </label>
                            <input
                                class=""
                                id="username"
                                name="username"
                                type="text"
                                placeholder="User Name"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div class="password">
                            <label class="" for="password">
                                Password
                            </label>
                            <input
                                class=""
                                id="password"
                                name="passwrod"
                                type="password"
                                placeholder="*******"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div class="email">
                            <label class="" for="email">
                                Email
                            </label>
                            <input
                                class=""
                                id="email"
                                name="email"
                                type="text"
                                placeholder="@email.com"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div class="md:flex md:items-center">
                            <button class="" type="submit">
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div> */}
            <div style={{ margin: "25px" }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="row justify-content-md-center">
                            <div className="col-md-4">
                                <div className="card p-2">
                                    <div className="card-body ">
                                        <div className="form-group p-2">
                                            <label>Username</label>
                                            <input type="text" placeholder="Username" className="form-control" />
                                        </div>

                                        <div className="form-group p-2">
                                            <label>First Name</label>
                                            <input type="First Name" placeholder="Password" className="form-control" />
                                        </div>
                                        <div className="form-group p-2">
                                            <label>Last Name</label>
                                            <input type="Last Name" placeholder="Password" className="form-control" />
                                        </div>
                                        <div className="form-group p-2">
                                            <label>Email</label>
                                            <input type="Email" placeholder="Password" className="form-control" />
                                        </div>
                                        <div className="form-group p-2">
                                            <label>Password</label>
                                            <input type="Password" placeholder="Password" className="form-control" />
                                        </div>
                                        <div className="form-group p-2">
                                            <label>Repassword</label>
                                            <input type="Repassword" placeholder="Password" className="form-control" />
                                        </div>

                                    </div>
                                    <button class="btn btn-danger mt-2 mb-3" type="button" >Create Password</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default CreateUser;
