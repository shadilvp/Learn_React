import React,{useState} from "react";

function ObjectUpdator(){
    const [cars, setCars] = useState({Year:2024,Make:"ford",Model:"mustang"}) 

    const handleyearchange = (event) => {
        setCars(c=>({...c,Year : event.target.value}))
    }

    const handlemakechange = (event) => {
        setCars(c => ({...c , Make : event.target.value}))
    }

    const handlemodelchange = (event) => {
        setCars(c => ({...c , Model : event.target.value}))
    }

    return (
        <div>
            <p>Your favourite car is : {cars.Year} {cars.Make} {cars.Model}</p>
            <input type="number" value={cars.Year} onChange={handleyearchange}/><br />
            <input type="text" value={cars.Make} onChange={handlemakechange}/><br />
            <input type="text" value={cars.Model} onChange={handlemodelchange}/>
        </div>
    )
}



export default ObjectUpdator