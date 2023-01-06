import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import "./detailproduct.css";
import "../../hooks/useHoover.js";

function DetailProduct() {
  return (
    <div>
      <Header />
      <div className="product">
        <div className="container">
          <div className="product-div">
            <div className="product-left">
              <div className="img-product-left">
                <img src="bg6.png" alt="img-product" />
              </div>
              <div className="img-hover">
                <div>
                  <img src="bg6.png" alt="img1" />
                </div>
                <div>
                  <img src="bg7.png" alt="img2" />
                </div>
                <div>
                  <img src="bg8.png" alt="img3" />
                </div>
                <div>
                  <img src="bg9.png" alt="img4" />
                </div>
              </div>
            </div>

            <div className="product-right">
              <span className="product-name"> Skincare </span>
              <span className="product-price"> Rp 200.000</span>
              <p className="product-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="btn-groups">
                <button type="button" className="fas add-cart-btn">
                  <i className="txt-btn"></i> Add To Cart
                </button>
                <button type="button" className="fas buy-cart-btn">
                  <i className="txt-btn"></i> Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DetailProduct;
