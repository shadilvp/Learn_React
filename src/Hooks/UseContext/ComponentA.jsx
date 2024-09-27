import React,{createContext, useState} from "react"
import ComponentB from "./ComponentB"
export const userContaxt = createContext();

function ComponentA(){
    const [user, setUser] = useState("Shadil")
    return(
        <div style={{border : "2px solid black" , padding : "10px"}}>
            <h1>ComponentA</h1>
            <h2>hello {user}</h2>
            <userContaxt.Provider value={user}>
                <ComponentB/>
            </userContaxt.Provider>             
        </div>
    )
}

export default ComponentA