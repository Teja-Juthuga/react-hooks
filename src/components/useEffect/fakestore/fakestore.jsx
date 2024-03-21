import { useState, useEffect } from "react";

export function Shopper() {
    const [categories, setCategories] = useState([""]);

    const [products, setProducts] = useState([
        {
            id: 0,
            title: "",
            price: 0,
            description: "",
            category: "",
            image: "",
            rating: {
                rate: 0,
                count: 0,
            },
        },
    ]);

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function loadProducts() {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((products_obj) => setProducts(products_obj));
    }

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/categories")
            .then((res) => res.json())
            .then((categories_obj) => setCategories(categories_obj));

        loadProducts();
    }, []);

    return (
        <div >
            <nav className="p-3 bg-dark text-light d-flex justify-content-around">
                <h4> Shopper. </h4>
                <div>
                    {categories.map((category) => (
                        <a className="me-2" key={category}>
                            {capitalizeFirstLetter(category)}{" "}
                        </a>
                    ))}
                </div>
                <button className="btn btn-light">
                    {" "}
                    Cart <span className="bi bi-cart4"></span>{" "}
                </button>
            </nav>
            <main>
                <div className="row">
                    <div className="col-10">
                        <div className="d-flex flex-wrap">
                            {products.map((product) => (
                                <div
                                    class="card m-3 p-3"
                                    style={{ width: "18rem" }}
                                >
                                    <div className="h5 text-center p-2">
                                        {" "}
                                        {product.title}{" "}
                                    </div>
                                    <div className="text-center">
                                        <img
                                            src={product.image}
                                            class="card-img-top "
                                        />
                                    </div>
                                    <div class="card-body">
                                        <p class="card-text">
                                            {product.description}
                                        </p>
                                    </div>
                                    <button className="btn btn-danger"> Buy Now </button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-2 p-0"></div>
                </div>
            </main>
        </div>
    );
}
