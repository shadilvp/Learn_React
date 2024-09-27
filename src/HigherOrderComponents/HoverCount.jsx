import { useState } from "react"

function HoverCount(){

    const [count, setCount] = useState(0);
    
    const HandleCount = () => {
        setCount(c => c + 1);
    }

    return(
        <h2 onMouseOver={HandleCount}>touch me to add {count}</h2>
    )

}
export default HoverCount