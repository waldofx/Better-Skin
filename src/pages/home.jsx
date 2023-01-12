import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import "./style.css";

function Home() {
  return (
    <div>
      <Header />
      <div class="container-fluid">
        <section id="section1">
          <img
            src="https://i.ibb.co/W0s4JTg/bg1.png"
            class="rounded img-fluid img-thumbnail mt-5"
          ></img>

          <h1 class="mt-5">Best Seller</h1>
          <p>
            Created for every skin type, need, and concern to get the glowy skin
            you've been dreaming of.
          </p>
          <p>
            Better skin is a new approach to beauty. It's about fun and freedom
            and being OK with yourself today.
          </p>
          <p>
            We make intuitive, uncomplicated products designed to live with you.
          </p>
          <div id="hot" class="justify-content-center">
            <img
              src="https://i.ibb.co/pXTRQyc/bg2.png"
              class="w-5shadow-1-strong rounded img-fluid img-thumbnail"
              alt="bg2"
            />

            <img
              src="https://i.ibb.co/SrRcPw8/bg3.png"
              class="w-5 shadow-1-strong rounded img-fluid img-thumbnail"
              alt="bg3"
            />

            <img
              src="https://i.ibb.co/KzNy1Fh/bg10.png"
              class="w-5 shadow-1-strong rounded img-fluid img-thumbnail"
              alt="bg10"
            />
          </div>
        </section>
        <section id="section2"></section>
        <section id="section3">
          <p id="new">NEW FEATURED PRODUCT</p>
          <div class="row row-cols-1 row-cols-md-4 g-4 mb-5">
            <div class="col">
              <div class="card h-100">
                <a>
                  <img
                    src="https://i.ibb.co/J3W4b2L/bg6.png"
                    class="card-img-top"
                    alt="bg6"
                  />
                </a>
                <div class="card-body">
                  <div class="d-flex justify-content-between align-items-center mt-2 mb-2">
                    <h5 class="card-title">Face botanical set</h5>
                    <span class="font1">$48</span>
                  </div>
                  <p class="card-text"></p>
                  <a className="btn btn-danger" href="/product">
                    Buy
                  </a>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <img
                  src="https://i.ibb.co/z6jgpwW/bg7.png"
                  class="card-img-top"
                  alt="bg7"
                />
                <div class="card-body">
                  <div class="d-flex justify-content-between align-items-center mt-2 mb-2">
                    <h5 class="card-title">Little beauty set</h5>
                    <span class="font1">$25</span>
                  </div>
                  <p class="card-text"></p>
                  <a className="btn btn-danger" href="/product">
                    Buy
                  </a>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <img
                  src="https://i.ibb.co/85rqL85/bg8.png"
                  class="card-img-top"
                  alt="Palm Springs Road"
                />
                <div class="card-body">
                  <div class="d-flex justify-content-between align-items-center mt-2 mb-2">
                    <h5 class="card-title">Trio travel set</h5>
                    <span class="font1">$20</span>
                  </div>
                  <p class="card-text"></p>
                  <a className="btn btn-danger" href="/product">
                    Buy
                  </a>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <img
                  src="https://i.ibb.co/LzLsRPT/bg9.png"
                  class="card-img-top"
                  alt="bg9"
                />
                <div class="card-body">
                  <div class="d-flex justify-content-between align-items-center mt-2 mb-2">
                    <h5 class="card-title">First experience kit</h5>
                    <span class="font1">$30</span>
                  </div>
                  <p class="card-text"></p>
                  <a className="btn btn-danger" href="/product">
                    Buy
                  </a>
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
