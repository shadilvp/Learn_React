import React,{useState} from "react";

function ArrayUpdator(){

    const [fruits , setFruits] = useState(["apple","mango","banana"]);

    const handleAddFruits = () => {
        const newFood = document.getElementById("input-box").value;
        document.getElementById("input-box").value = " ";

        setFruits(f =>[...f,newFood])
    }

    const handleRemoveFoods = (index) => {
        setFruits(fruits.filter((_,i)=> i !== index))
    }

    return (
        <div>
            <h2>List of Fruits</h2>
            <ul>
                {fruits.map((fruits,index)=> <li key={index} onClick={() => handleRemoveFoods(index)}>{fruits}</li>)}
            </ul>
            <input type="text" id="input-box" placeholder="Enter Text" />
            <button onClick={handleAddFruits}>Add food</button>
        </div>
    )

}

export default ArrayUpdator