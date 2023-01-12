import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

//import components
import Header from "../../components/header";
import Footer from "../../components/footer";
import "./detailproduct.css";

//insert hooks
import "../../hooks/useHoover.js";
import useInsertOrders from "../../hooks/useInsertOrders";

const GetProductByID = gql`
  query MyQuery($id: Int!) {
    products(where: { id: { _eq: $id } }) {
      id
      name
      price
      initial_stock
      final_stock
      total
      img
      desc
      desc2
      desc3
    }
  }
`;

function DetailProduct() {
  //initial detail
  const { id } = useParams();
  const { data } = useQuery(GetProductByID, {
    variables: { id },
  });

  //setproducts at the start of render using useeffect
  const [productdata, setProducts] = useState({});
  useEffect(() => {
    if (data) {
      setProducts(data.products[0]);
    }
  }, [data]);

  // console.log("datas", data);
  // console.log("product data", productdata);

  //handle order
  const currentdate = new Date();
  // const date = `${currentdate.getDate()}/${currentdate.getMonth()+1}/${currentdate.getFullYear()}`;

  const [Order, setOrder] = useState({
    produk: productdata.name,
    harga: productdata.price,
    jenis: "Skincare",
    tanggal: currentdate,
  });

  const { produk, harga } = Order;

  // function handleIncrement(produk, harga) {
  //     return function (e) {
  //         // console.log(name, "plus");
  //         console.log("current order: ", Order);
  //         setOrder((prev) => {
  //             return {
  //                 ...prev,
  //                 produk: prev.produk === "" ? produk : prev.produk + ", " + produk,
  //                 harga: prev.harga <= 0 ? harga : prev.harga + harga,
  //             };
  //         });
  //     };
  // }

  // const handleClear = (e) => {
  //     e.preventDefault();
  //     setOrder((prev) => {
  //         return {
  //             ...prev,
  //             produk: "",
  //             harga: 0,
  //         };
  //     });
  // };

  const { insertOrders } = useInsertOrders();

  function handleSubmit(e) {
    e.preventDefault();

    let message = `Salam, Saya ingin pesan ${productdata.name} yang bertotal harga Rp. ${productdata.price}. Apakah tersedia?`;
    let url = `https://web.whatsapp.com/send?phone=6281283412149`;
    url += `&text=${encodeURI(message)}&app_absent=0`;
    window.open(url);
    insertOrders({
      variables: {
        object: {
          produk: productdata.name,
          harga: productdata.price,
          jenis: "Skincare",
          tanggal: currentdate,
        },
      },
    });
  }

  return (
    <div>
      <Header />

      <div className="product">
        <div className="container">
          <div className="product-div mt-5">
            <div className="product-left">
              <div className="img-product-left">
                <img
                  src={productdata.img}
                  alt="img-product"
                  style={{ width: "300px", height: "500px" }}
                />
              </div>
            </div>

            <div className="product-right">
              <span className="product-name"> {productdata.name} </span>
              <span className="product-price"> Rp {productdata.price}</span>
              <p className="product-description">{productdata.desc}</p>
              <div className="btn-groups mb-5">
                <button
                  type="button"
                  className="fas add-cart-btn"
                  onClick={handleSubmit}
                >
                  <i className="txt-btn"></i> Buy now
                </button>
              </div>
              <h2 className="mt-5">Cara Pakai :</h2>
              <p>{productdata.desc2}</p>
            </div>
          </div>
          <div
            class="card bg-dark text-center mt-5 px-5 py-5 mb-5"
            style={{
              width: "700px",
            }}
          >
            <div class="card-header text-center text-white">Manfaat</div>
            <p class="card-text text-white">{productdata.desc3}</p>
          </div>
        </div>
      </div>

      {/* <div className="container">
                <p>*Harga diatas belum termasuk harga pengantaran makanan untuk pesanan online.</p>
                <p className="">Setelah memilih yang ingin dipesan, silahkan klik tombol pesan dibawah.</p>
                <div className="">
                    <div class="">
                        <form onSubmit={handleSubmit} action="">
                            <label class="">
                                <span class="">Total Harga</span>
                                <input disabled name="harga" type="text" class="" placeholder="0   " value={Order.harga} />
                            </label>
                            <label class="block mb-6">
                                <span class="text-gray-700">Pesanan</span>
                                <textarea
                                    disabled
                                    name="produk"
                                    class=""
                                    rows="3"
                                    value={Order.produk}
                                    placeholder="Klik tombol hijau '+' pada menu yang diinginkan untuk masukan pesanan."
                                ></textarea>
                            </label>
                            <div class="mb-6">
                                <button type="submit" class="">
                                    Pesan
                                </button>
                                <button onClick={handleClear} class="">
                                    Clear
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div> */}

      <Footer />
    </div>
  );
}

export default DetailProduct;
