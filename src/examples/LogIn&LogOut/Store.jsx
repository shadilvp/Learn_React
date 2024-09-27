import {  useState,createContext} from "react";
import Show from "./Show";
export const userContext = createContext();

function Store(){

    const [user, setUser] =useState("");

    const HandleUser = (event) => {
        setUser(event.target.value);
    }

    return(
        <div>
            <input type="text" value={user} onChange={(e)=>HandleUser(e)}/>
            <userContext.Provider value={user}>
                <Show/>
            </userContext.Provider>
        </div>
    )
}

export default Store ;