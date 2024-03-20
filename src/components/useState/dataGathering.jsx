import { useState } from "react";

export function DisplayUserData() {
    const [data, setData] = useState({
        name: "",
        age: 0,
        city: ""
    });

    const [updatedData, setUpdatedData] = useState({
        name: "Ammilee",
        age: 0,
        city: ""
    });

    function handleNameChange(e){
        setData({
            name: e.target.value,
            age : data.age,
            city : data.city

        })
    }

    function handleAgeChange(e){
        setData({
            name: data.name,
            age : e.target.value,
            city : data.city

        })
    }


    function handleCityChange(e){
        setData({
            name: data.name,
            age : data.age,
            city : e.target.value

        })
    }

    function handleUpdateClick(){
        setUpdatedData({
            name: data.name,
            age : data.age,
            city : data.city
        })
    }

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="card rounded rounded-2 shadow-lg p-3 me-3 col-5">
                    <h3 className="text-center"> Bio-Data </h3>
                    <dl>
                        <dd>
                            <b> Name: </b>{" "}
                            <input type="text" className="form form-control" value={data.name} onChange={handleNameChange}/>
                        </dd>
                        {/* <dd>
                            <b> Gender: </b>
                            <input
                                class="form-check-input"
                                type="radio"
                                name="gender"
                                id="male"
                            />
                            <label class="form-check-label" for="male">
                                Male
                            </label>
                            <input
                                class="form-check-input"
                                type="radio"
                                name="gender"
                                id="female"
                            />
                            <label class="form-check-label" for="female">
                                Female
                            </label>
                        </dd> */}
                        <dd>
                            <b> age: </b>{" "}
                            <input
                                type="number"
                                className="form form-control" onChange={handleAgeChange}
                            />
                        </dd>
                        <dd>
                            <b> City: </b>
                            <select className="form form-control" onChange={handleCityChange}>
                                <option> Select Your City </option>
                                <option value="Kakinada">Kakinada </option>
                                <option value="Rajahumdry">Rajahumdry </option>
                                <option value="Ravulapalem">
                                    Ravulapalem{" "}
                                </option>
                                <option value="Vizag">Vizag </option>
                            </select>
                        </dd>
                        {/* <dd>
                            <b> Hobbies: </b> <br/>
                            <input type="checkbox" value="Playing Cricket" className="form-ckeck-input" /> Playing Cricket
                            <input type="checkbox" value="Singing Songs" className="form-ckeck-input" /> Singing Songs
                            <input type="checkbox" value="Dancing" className="form-ckeck-input" /> Dancing
                            <input type="checkbox" value="Cooking" className="form-ckeck-input" /> Cooking
                        </dd> */}
                    </dl>
                    <button className="btn btn-primary" onClick={handleUpdateClick}> Update Bio </button>
                </div>
                <div className="card rounded rounded-2 shadow-lg p-3 col-5">
                    <h3 className="text-center"> Preview Of Bio-Data </h3>
                    <h4>Name : {updatedData.name} </h4>
                    <h4>Age : {updatedData.age} </h4>
                    <h4>City : {updatedData.city} </h4>
                </div>
            </div>
        </div>
    );
}
