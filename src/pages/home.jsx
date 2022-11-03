import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

function Home() {
    return (
        <div>
            <Header />
            <div className="App container">
                <h1 className="text-danger">Homepage</h1>
                <button className="btn btn-primary">Submit</button>
                <button type="button" class="btn btn-outline-primary">
                    Outline
                </button>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
