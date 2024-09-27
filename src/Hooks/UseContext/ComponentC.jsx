import ComponentD from "./ComponentD"
import { userContaxt } from "./ComponentA"
import { useContext } from "react"

function ComponentC(){
    const user = useContext(userContaxt);
    return(
        <div style={{border : "2px solid black" , padding : "10px"}}>
            <h1>ComponentC</h1>
            <h2>{`hello again ${user}`}</h2>
            <ComponentD />
        </div>
    )
}

export default ComponentC