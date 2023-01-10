import React, { useEffect, useState } from "react";
import Footer from "../../components/footer";
import "./style.css";

// import hooks
import useGetProductsByName from "../../hooks/useGetProductsByName";

function UserDashboard() {
  //get products
  // ----------------- custom hook graphql -------------------------
  const { dataByName, loadingDataByName, errorDataByName } =
    useGetProductsByName();

  //setproducts at the start of render using useeffect
  const [productdatas, setProducts] = useState([]);
  useEffect(() => {
    if (dataByName) {
      setProducts(dataByName.products);
    }
  }, [dataByName]);

  //error + loading
  const isError = errorDataByName;
  const isLoading = loadingDataByName;

  console.log("Product data:", productdatas);
  return (
    <div>
      <div className="header">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              Better Skin
            </a>
            <div className=" collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav ms-auto d-none d-lg-inline-flex">
                <li className="nav-item active">
                  <a className="nav-link" href="/adminDashboard">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div id="wrapper">
        <div className="row">
          <div className="col-2 border-right" id="first_section">
            <div className="sidebar-header">
              <div className="d-flex flex-column text-center  py-5">
                <span className="font-weight-bold">Username</span>
                <span className="text-black-50">Email</span>
              </div>
            </div>
            <div className="sidebar float-left">
              <ul>
                <li>
                  <a href="/">Homepage</a>
                </li>
                <li>
                  <a href="/historyProduct">History product</a>
                </li>
                <li>
                  <a href="/transactionList">Transaction list</a>
                </li>
                <li>
                  <a href="/settings">Settings</a>
                </li>
                <li>
                  <a href="/aboutUs">About us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-8 border-right" id="middle_section">
            <div
              style={{
                width: "700px",
                height: "100px",
                border: "1px solid",
                backgroundColor: "#B9C4AA",
              }}
              className="text-center"
            >
              <div className="container mt-4" style={{ width: "300px" }}>
                <h2>BETTER SKIN</h2>
              </div>
            </div>
            <div className="container mt-5" style={{ width: "500px" }}>
              <div className="row height d-flex justify-content-center align-items-center">
                <div className="">
                  <div className="form">
                    <input
                      type="text"
                      className="form-control form-input"
                      placeholder="Search something here"
                      style={{ backgroundColor: "#D9D9D9" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <h1 className="mt-5 mb-5" style={{ marginLeft: "40px" }}>
              Product
            </h1>
            {isError && <p>Something Went Wrong...</p>}
            {isLoading && <p>Now loading...</p>}
            {!isError && !isLoading && (
              <div>
                <div className="container mb-5">
                  <div className="row">
                    {productdatas.map((productdata) => (
                      <div className="col-md-3 mb-2">
                        <div class="card" style={{ backgroundColor: "black" }}>
                          <a href={`/detailproduct/${productdata.id}`}>
                            <img
                              src={productdata.img}
                              class="card-img-top"
                              alt="..."
                            />
                          </a>
                          <div class="card-body">
                            <div className="col">
                              <div className="d-flex justify-content-between align-items-center mt-2 mb-2">
                                <h5 class="card-title text-white text-center">
                                  {productdata.name}
                                </h5>
                              </div>
                              <div
                                style={{
                                  width: "200px",
                                  height: "40px",
                                  border: "1px solid",
                                  backgroundColor: "#F5A847",
                                }}
                                className="text-center mb-3 mt-3"
                              >
                                <p className="fw-bold text-white mt-1">
                                  Rp. {productdata.price}
                                </p>
                              </div>
                              <div className="text-center">
                                <a
                                  className="btn text-black"
                                  style={{
                                    backgroundColor: "white",
                                    width: "100px",
                                  }}
                                  href="#"
                                >
                                  Buy
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="col-2" id="last_section">
            <div className="py-5">
              <h4
                className="text-center"
                style={{ color: "grey", fontFamily: "sans-serif" }}
              >
                Article
              </h4>
              <div className="container">
                <div className="card cb1 mt-5">
                  <div className="card-body">
                    <img
                      src="https://i.postimg.cc/76yVpHRw/images.jpg"
                      alt=""
                      width={"172px"}
                    />
                    <p className="" align="left">
                      Having healthy and clear, glowing skin requires extra
                      care.
                    </p>
                    <a
                      href="https://www.loreal-paris.co.id/beauty-magazine/cara-memakai-skincare-agar-hasilnya-maksimal"
                      className="btn-article mt-2"
                      target="_blank"
                    >
                      Read Full Article
                    </a>
                  </div>
                </div>
                <div className="card cb1 mt-5">
                  <div className="card-body">
                    <img
                      className="mb-5"
                      src="https://i.postimg.cc/x121JBBq/62922b221dd75.jpg"
                      alt=""
                      width={"172px"}
                    />
                    <p className="" align="left">
                      Not only choosing skin care products that are suitable for
                      your skin type and skin problems is important, but also
                      how to use skin care properly.
                    </p>
                    <a
                      href="https://www.loreal-paris.co.id/beauty-magazine/cara-memakai-skincare-agar-hasilnya-maksimal"
                      className="btn-article mt-2"
                      target="_blank"
                    >
                      Read Full Article
                    </a>
                  </div>
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

export default UserDashboard;
