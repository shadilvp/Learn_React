import { useState } from "react"

const LocalStorage = () => {
    const [add, setAdd] = useState("");

    const HandleAdd = (event) => {
      setAdd(event.target.value);
        
    }
    const HandleClick = () => {
        console.log(add);
        localStorage.setItem('InputValue', add)//Adding data into local storage
        console.log(localStorage.getItem('InputValue'),"*****");//Getting datas from local storage
        setAdd("")

    }
    
    
    
    return(
        <div>
            <input type="text" value={add} onChange={HandleAdd}/>
            <button onClick={HandleClick}>Click</button>
        </div>
    )
}

export default LocalStorage