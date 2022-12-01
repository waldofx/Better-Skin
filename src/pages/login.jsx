import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

const Login = () => {
    return (
        <div className="">
            <div>
                <Header />
            </div>
            <div style={{ margin: "185px" }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="row justify-content-md-center">
                            <div className="col-md-4">
                                <div className="card p-4">
                                    <div className="card-body p-2">
                                        <h2>New here?</h2>
                                        <p> Registration free and easy</p>
                                        <p> Save multiple shipping and address</p>
                                        <p> View and track orders</p>
                                    </div>
                                    <button class="btn btn-danger" type="button">Register Here</button>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card p-2">
                                    <div className="card-body ">
                                        <div className="form-group p-2">
                                            <label>Username</label>
                                            <input type="text" placeholder="Username" className="form-control" />
                                        </div>

                                        <div className="form-group p-2">
                                            <label>Password</label>
                                            <input type="password" placeholder="Password" className="form-control" />
                                        </div>

                                    </div>
                                    <button class="btn btn-danger mt-2 mb-3" type="button" >Login Here</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>

    )
}

export default Login;