import React,{useState} from "react";

function OnChange(){
    const [name, setName] = useState("enter your name")
    const [quantity , setQuantity] = useState(1)
    const [commennt , setComment] = useState()
    const [payment , setPayment] = useState()
    const [shipping , setShiping] = useState()

    const eventitem = (event) => {
        setName(event.target.value);
    }

    const eventitem2 = (event) => {
        setQuantity(event.target.value)
    }

    const eventitem3 = (event) => {
        setComment(event.target.value)
    }

    const eventitem4 = (event) => {
        setPayment(event.target.value)
    }

    const eventitem5 = (event) => {
        setShiping(event.targegt.value)
    }

    return(
        <div>
            <input placeholder={name} type="text" onChange={eventitem}/>
            <p>Name : {name}</p>

            <input type="number" value={quantity} onChange={eventitem2} />
            <p>Quantity : {quantity}</p>

            <textarea value={commennt} onChange={eventitem3} placeholder="Enter Delivary Instructions" />
            <p> Command : {commennt}</p>

            <select value={payment} onChange={eventitem4}>
                <option value="">Select an card</option>
                <option value="visa">VISA</option>
                <option value="cash on delivary">Cash On Delivaary</option>
                <option value="emi">EMI</option>
            </select>
            <p>Payment option : {payment}</p>

            <label>
                <input type="radio" value="pickup"
                 checked={shipping === "pickup"}
                 onChange={eventitem5}/>
                 PICKUP
            </label>
            <label>
                <input type="radio" value="delivery"
                 checked={shipping === "delivery"}
                 onChange={eventitem5} />
                 Delivery
            </label>
            <p>shipping : {shipping}</p>
        </div>
    )
}

export default OnChange 