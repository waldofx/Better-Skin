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
        <div>
            <Header />
            {/* get users */}
            <div className="container">
                <h1 className="">Daftar User</h1>
                {isError && <p>Something Went Wrong...</p>}
                {isLoading && <p>Now loading...</p>}
                {!isError && !isLoading && (
                    <div>
                        {userdatas.map((userdata) => (
                            <div className="">
                                <p className="">username : {userdata.username}</p>
                                <p className="">password: {userdata.password}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* form insert users */}
            <div className="container">
                <h1>Tambahkan User</h1>
                <form class="" onSubmit={handleSubmit} action="">
                    <div class="">
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
                    <div class="">
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
                    <div class="">
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
            <Footer />
        </div>
    );
}

export default CreateUser;
