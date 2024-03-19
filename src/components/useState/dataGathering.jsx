import { useState } from "react";

export function DisplayUserData() {
    
    const [data, setData] = useState({
        name : "",
        age : 0,
        gender : "",
        city : "", 
        hobbies : [""]
    });

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="card rounded rounded-2 shadow-lg p-3 me-3 col-5">
                    <h3 className="text-center"> Bio-Data </h3>
                    <dl>
                        <dd>
                            <b> Name: </b>{" "}
                            <input type="text" className="form form-control" />
                        </dd>
                        <dd>
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
                        </dd>
                        <dd>
                            <b> age: </b>{" "}
                            <input
                                type="number"
                                className="form form-control"
                            />
                        </dd>
                        <dd>
                            <b> City: </b>
                            <select className="form form-control">
                                <option> Select Your City </option>
                                <option value="Kakinada">Kakinada </option>
                                <option value="Rajahumdry">Rajahumdry </option>
                                <option value="Ravualapalem">
                                    Ravualapalem{" "}
                                </option>
                                <option value="Vizag">Vizag </option>
                            </select>
                        </dd>
                    </dl>
                </div>
                <div className="card rounded rounded-2 shadow-lg p-3 col-5">
                    <h3 className="text-center"> Preview Of Bio-Data </h3>
                    
                </div>
            </div>
        </div>
    );
}
