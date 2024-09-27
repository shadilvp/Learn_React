import React,{useState} from "react";

function ArrayOfObjects(){

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    const handleAddCar = () => {
        const newCar = {Year : carYear , Make : carMake , Model : carModel}

        setCars(c =>[...c,newCar])
        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");

    }

    const handleRemoveCar = (index) => {
        setCars(c => c.filter((_,i)=> i !== index))
    }

    const handleYearChange = (event) => {
        setCarYear(event.target.value)
    }

    const handleMakeChange = (event) => {
        setCarMake(event.target.value)
    }

    const handleModelChange = (event) => {
        setCarModel(event.target.value)
    }

    return(
        <div>
            <h2>List OF Car Objects</h2>
            <ul>
                {cars.map((car,index)=> <li key={index} onClick={() => handleRemoveCar(index)}>{car.Year} {car.Make}{car.Model}</li>)}
            </ul>
            <input type="number" value={carYear} onChange={handleYearChange}/><br />
            <input type="text" value={carMake} onChange={handleMakeChange}/><br />
            <input type="text" value={carModel} onChange={handleModelChange} /><br />
            <button onClick={handleAddCar}>Add Car</button>
        </div>
    )

}

export default ArrayOfObjects