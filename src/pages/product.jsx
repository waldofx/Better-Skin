import React, { useEffect, useState } from "react";

//import components and styles
import Header from "../components/header";
import Footer from "../components/footer";

//import hooks
import useGetProductsByName from "../hooks/useGetProductsByName";
import useInsertProducts from "../hooks/useInsertProducts";

function Product() {
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
      <Header />
      <div>
        {/* INI ADALAH LIST PRODUK */}

        <h1 className="mb-5 mt-5 mx-5">Daftar Product</h1>
        {isError && <p>Something Went Wrong...</p>}
        {isLoading && <p>Now loading...</p>}
        {!isError && !isLoading && (
          <div>
            <div className="container">
              <div className="row">
                {productdatas.map((productdata) => (
                  <div className="col-md-3 mb-2">
                    <div
                      class="card mb-5"
                      style={{
                        backgroundColor: "black",
                        width: "300px",
                        height: "700px",
                      }}
                    >
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
                              backgroundColor: "#008b79",
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
                              href={`/detailproduct/${productdata.id}`}
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
      <Footer />
    </div>
  );
}

export default Product;
