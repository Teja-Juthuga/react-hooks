import { useState, useEffect } from "react";

function Nasa() {
    const [apiData, setApiData] = useState({});
    const [api] = useState(
        "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=bkBaxkOuCXcqwfqOn4dIYdZiAIhyi88dH1gUCzBg"
    );
    function fetchData() {
        fetch(api)
            .then((res) => res.json())
            .then((obj) => {
                console.log(obj);
                setApiData(obj);
            });
    }

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className="container-fluid mt-3">
            <table className="table table-responsive">
                <thead>
                    <tr>
                        <th> Id </th>
                        <th> Camera Name </th>
                        <th> Image </th>
                        <th> Rover Name </th>
                        <th> Other Cameras </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        apiData.photos.map(photo => 
                            <tr key={photo.id}> 
                                <td>{photo.id}</td>
                                <td> {photo.camera.full_name} </td>
                                <td> <img src={photo.img_src} height="150" width="150" /> </td>
                                <td> {photo.rover.name} </td>
                                <td> 
                                    <ol> 
                                        {
                                            photo.cameras.map(camera => 
                                                <li key={camera.name}> {camera.full_name}</li>    
                                            )
                                        } 
                                    </ol> 
                                </td> 
                            </tr>    
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Nasa;
