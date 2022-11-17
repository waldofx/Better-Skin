import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import "./home.css";

function Home() {
    return (
        <div>
            <Header />
            <div class="container-fluid">
                <section id="section1">
                    <div class="mt-5 mb-5" alt="Responsive Image">
                        <img id="promo" src="bg1.png" class="rounded" alt="promo"></img>
                    </div>
                    <h1 class="mt-5">Best Seller</h1>
                    <p>Created for every skin type, need, and concern to get the glowy skin you've been dreaming of.</p>
                    <p>Better skin is a new approach to beauty. It's about fun and freedom and being OK with yourself today.</p>
                    <p>We make intuitive, uncomplicated products designed to live with you.</p>
                    <div id="hot">
                        <img src="bg2.png" class="w-5shadow-1-strong rounded px-5 py-5" alt="bg2" />

                        <img src="bg3.png" class="w-5 shadow-1-strong rounded px-5 py-5" alt="bg3" />

                        <img src="bg10.png" class="w-5 shadow-1-strong rounded px-5 py-5" alt="bg10" />
                    </div>
                    <div class="row-col-3 custom-flex" align="center">
                        <button class="btn btn-dark btn-lg">Details</button>

                        <button class="btn btn-dark btn-lg">Details</button>

                        <button class="btn btn-dark btn-lg">Details</button>
                    </div>
                    <div class="mt-5 mb-5" alt="Responsive Image">
                        <img id="model" src="bg5.png" class="rounded" alt="model"></img>
                    </div>
                </section>
                <section>
                    <p id="new">NEW FEATURED PRODUCT</p>
                    <div class="row row-cols-1 row-cols-md-4 g-4 px-5 py-5">
                        <div class="col">
                            <div class="card h-100">
                                <img src="bg6.png" class="card-img-top" alt="bg6" />
                                <div class="card-body">
                                    <div class="d-flex justify-content-between align-items-center mt-2 mb-2">
                                        <h5 class="card-title">Face botanical set</h5>
                                        <span class="font1">$48</span>
                                    </div>
                                    <p class="card-text"></p>
                                    <button class="btn btn-danger">Add to cart</button>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src="bg7.png" class="card-img-top" alt="bg7" />
                                <div class="card-body">
                                    <div class="d-flex justify-content-between align-items-center mt-2 mb-2">
                                        <h5 class="card-title">Little beauty set</h5>
                                        <span class="font1">$25</span>
                                    </div>
                                    <p class="card-text"></p>
                                    <button class="btn btn-danger">Add to cart</button>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src="bg8.png" class="card-img-top" alt="Palm Springs Road" />
                                <div class="card-body">
                                    <div class="d-flex justify-content-between align-items-center mt-2 mb-2">
                                        <h5 class="card-title">Trio travel set</h5>
                                        <span class="font1">$20</span>
                                    </div>
                                    <p class="card-text"></p>
                                    <button class="btn btn-danger">Add to cart</button>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src="bg9.png" class="card-img-top" alt="bg9" />
                                <div class="card-body">
                                    <div class="d-flex justify-content-between align-items-center mt-2 mb-2">
                                        <h5 class="card-title">First experience kit</h5>
                                        <span class="font1">$30</span>
                                    </div>
                                    <p class="card-text"></p>
                                    <button class="btn btn-danger">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
