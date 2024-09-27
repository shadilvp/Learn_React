import React, { createContext, useCallback, useEffect, useMemo, useState } from "react"
import MemoChild from "./Child";

export const nameContext = createContext();

function Parent(){
    const [name, setName] = useState("");

        // const HandleInput = (event) => {
        //     setName(event.target.value)
        // }

        // const HandleInput =useMemo(()=>{
        //     return  (event) => {
        //         setName(event.target.value)
        //     }
        // },[])

        const HandleInput = useCallback((event) => {
            setName(event.target.value)
        },[]) 


        // const value = useMemo(()=>{name},[name])

       
        console.log("rendering Parent");
        
    return(
        <div>
            <input type="text" onChange={(e)=>HandleInput(e)} value={name}/>
            <nameContext.Provider value={name}> 
            <MemoChild/>  
            </nameContext.Provider>

            
            
        </div>
    )

}

const MemoParent = React.memo(Parent)
export default MemoParent;