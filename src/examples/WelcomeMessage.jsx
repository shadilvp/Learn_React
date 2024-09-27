import React,{useState} from "react"

function Message(){
    const [name,setName] = useState("welcome visitor");
    const eventitems = (e) => {
        setName("Thank You")
    }
    return(
        <div>
            <h1 >{name}</h1>
            <button onClick={eventitems}>Click Me!</button>
        </div>
        
        
    );
}

export default Message