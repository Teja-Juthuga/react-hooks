import {useState, useEffect} from "react";

export function Shopper(){

    const [categories, setCategories] = useState([""]);
    
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/categories")
        .then(res => res.json())
        .then(categories_obj => setCategories(categories_obj))
    }, [])

    return (
        <div className="w-100" style={{height:"100vh"}}>
            <nav className="p-3 bg-dark text-light d-flex justify-content-between">
                <h4> Shopper. </h4>
                <div>
                    {
                        categories.map(category => 
                            <a className="me-2" key={category}>{capitalizeFirstLetter(category)} </a>    
                        )
                    }
                </div>
                <button className="btn btn-light"> Cart <span className="bi bi-cart4"></span> </button>
            </nav>
            <main>
                <div className="row">
                    <div className="col-9">
                        <div className="d-flex flex-wrap">
                            <div className="card">
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-3">

                    </div>

                </div>
            </main>
        </div>
    )
}