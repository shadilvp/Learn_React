


import React, { useContext } from "react"
import { nameContext } from "./Parent"

function Child(){

    const name = useContext(nameContext);


    console.log("rendering Child");
    
    return(
        <div>
            <h1>{name}</h1>
        </div>
    )

}
const MemoChild = React.memo(Child);

export default MemoChild