import React,{useReducer, useState} from "react";

function RedFun(state,value){
    switch (value.type) {
        case 'increment':
            return state + 1 ;
        case 'decrement' :
            return state > 0 ? state - 1 : 0
        case 'reset':
            return  0 ;
        default:
            return state;
    }
}

function UseReducer(){
    const [state, dispatch] = useReducer(RedFun,0)
    
    return(
        <div>
            <p>{state}</p>
            <button onClick={()=> dispatch({type : 'increment'})}>add</button>
            <button onClick={()=> dispatch({type : 'decrement'})}>subtract</button>
            <button onClick={()=> dispatch({type : 'reset'})}>Reset</button>
            {state === 5 && <h1>hello</h1> }
        </div>
    )
}

export default UseReducer ;