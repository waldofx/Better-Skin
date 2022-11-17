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
    const { dataByName, loadingDataByName, errorDataByName } = useGetProductsByName();

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
            {/* get products */}
            <div className="container">
                <h1 className="">Daftar Product</h1>
                {isError && <p>Something Went Wrong...</p>}
                {isLoading && <p>Now loading...</p>}
                {!isError && !isLoading && (
                    <div>
                        {productdatas.map((productdata) => (
                            <div className="">
                                <h3 className="">{productdata.name}</h3>
                                <p className="">Rp. {productdata.price}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* form insert products */}
            <div className="container">
                <h1>Tambahkan Product</h1>
                <form class="" onSubmit={handleSubmit} action="">
                    <div class="">
                        <label class="" for="name">
                            Nama
                        </label>
                        <input
                            class=""
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Product Name"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div class="">
                        <label class="" for="price">
                            Harga
                        </label>
                        <input class="" id="price" name="price" type="number" placeholder="0" onChange={handleChange} required />
                    </div>
                    <div class="md:flex md:items-center">
                        <button class="" type="submit">
                            Tambahkan Produk
                        </button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default Product;
