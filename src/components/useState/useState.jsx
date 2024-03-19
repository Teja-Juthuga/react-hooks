import { useState } from "react";

export function UseStateExample(){
    
    const [name, setname] = useState("Teja");
    const [bigInt, setBigInt] = useState(7993001128);
    const [categories, setCategories] = useState(["All", "Men's Wear", "Women's Wear", "Foot Wear", "Kids"])

    function nameChange(e){
        setname(e.target.value);
    }
    return(
        <div className="mt-3 ms-3"> 
            <h2> Hello! {name}</h2>
            <p>Your Contact Number is {bigInt} </p>

            <ol>
                {
                    categories.map(category => 
                        <li> {category} </li>                        
                    )
                }
            </ol>

            <dl>
                <dt> Name: </dt>
                <dd> <input type="text" value={name} onChange={nameChange} /> </dd>
            </dl>
        </div>
    )
}