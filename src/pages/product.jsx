import React, { useEffect, useState } from "react";

//import components and styles
import Header from "../components/header";
import Footer from "../components/footer";

//import hooks
import useGetProductsByName from "../hooks/useGetProductsByName";

function Product() {
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

    return (
        <div>
            <Header />
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
            <Footer />
        </div>
    );
}

export default Product;
