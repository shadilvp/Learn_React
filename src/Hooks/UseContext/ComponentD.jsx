import { useContext } from "react"
import { userContaxt } from "./ComponentA"

function ComponentD(props){

    const user = useContext(userContaxt)
    return(
        <div style={{border : "2px solid black" , padding : "10px"}}>
            <h1>ComponentD</h1>
            <h2>{`bye ${user}`}</h2>
        </div>
    )
}

export default ComponentD