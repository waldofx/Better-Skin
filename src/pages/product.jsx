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

  //insert products
  const [formData, setFormData] = useState({
    name: "",
    price: 0,
    initial_stock: 0,
    final_stock: 0,
    total: 0,
  });

  const { insertProducts } = useInsertProducts();

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

    if (formData.name === "" || formData.price === 0) {
      alert("Data belum lengkap!");
    } else {
      insertProducts({
        variables: {
          object: {
            name: formData.name,
            price: formData.price,
            initial_stock: formData.initial_stock,
            final_stock: formData.final_stock,
            total: formData.total,
          },
        },
      });
      alert("Data berhasil dikirim ke database!");
    }
  }

  return (
    <div>
      <Header />
      <div>
        {/* INI ADALAH LIST PRODUK */}
        <div className="container">
          <h1 className="mb-5">Daftar Product</h1>
          {isError && <p>Something Went Wrong...</p>}
          {isLoading && <p>Now loading...</p>}
          {!isError && !isLoading && (
            <div>
              <div className="container">
                <div className="row">
                  {productdatas.map((productdata) => (
                    <div className="col-md-3 mb-2">
                      <div className="card">
                      <a href={`/detailproduct/${productdata.id}`}>
                        <img
                          src={productdata.img}
                          className="card-img-top"
                          alt="..."
                        />
                        </a>
                        <div className="card-body">
                          <div className="row">
                            <div className="d-flex justify-content-between align-items-center mt-2 mb-2">
                              <h5 className="card-text fw-bold">
                                {productdata.name}
                              </h5>
                              <p
                                className="card-text"
                                style={{ fontWeight: "bold" }}
                              >
                                $ {productdata.price}
                              </p>
                            </div>
                            <p className="card-text">
                              {" "}
                              Stok : {productdata.final_stock}
                            </p>
                            <a
                              className="btn btn-danger mx-2"
                              style={{ width: "60px" }}
                              href={`/detailproduct/${productdata.id}`}
                            >
                              Buy
                            </a>
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
        {/* INI ADALAH AKHIR LIST PRODUK */}
      </div>
      <Footer />
    </div>
  );
}

export default Product;
