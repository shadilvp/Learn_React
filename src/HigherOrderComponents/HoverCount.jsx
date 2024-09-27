import { useState } from "react"
import UpdatedComponent from "./WithCounter";

const HoverCount = (props) => {

    const [count, setCount] = useState(0);
    
    const HandleCount = () => {
        setCount(c => c + 1);
    }      

    return(
        <h2 onMouseOver={HandleCount}>{props.name} touch me to add {count}</h2>
    )

}
export default UpdatedComponent(HoverCount) 