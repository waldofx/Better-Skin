import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

//import hooks
import { addAdminData } from "../store/adminDataSlice";

function Header() {
    const [isActive, setActive] = useState(false);

    function toggleHidden() {
        setActive(!isActive);
    }

    //auth check
    let adminData = useSelector((state) => state.adminData.adminData);
    let isAdmin = adminData.status;
    const dispatch = useDispatch();

    function handleLogout() {
        adminData = {
            img: "",
            name: "",
            status: false,
        };
        dispatch(addAdminData(adminData));
        alert("Berhasil logout!");
        window.location.reload(false);
    }

    return (
        <div className="header">
            <nav class="navbar navbar-expand-md navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">
                        Better Skin
                    </a>
                    <div class=" collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav ms-auto ">
                            <li class="nav-item active">
                                <a class="nav-link" href="/product">
                                    Product
                                </a>
                            </li>
                        </ul>
                        <ul class="navbar-nav ms-auto d-none d-lg-inline-flex">
                            {!isAdmin ? (
                                <li class="nav-item active">
                                    <a class="nav-link" href="/login">
                                        Login
                                    </a>
                                </li>
                            ) : (
                                <li class="nav-item active">
                                    <a class="nav-link" onClick={handleLogout} style={{ cursor: "pointer" }}>
                                        Logout
                                    </a>
                                </li>
                            )}
                            <li class="nav-item">
                                <a class="nav-link" href="#/">
                                    Cart
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
