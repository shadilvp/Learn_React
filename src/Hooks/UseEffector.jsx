import React,{useState,useEffect} from "react";

function UseEffecter(){
    const [count, setCount] = useState(0);

    useEffect( () => {
        document.title =`count ${count}`
    },[count])

    const handleCountAdd = () => {
        setCount(c => c + 1)
    }
    const handleCountReset = () => {
        setCount(0)
    }
    const handleCountSub = () => {
        if(count > 0){
            setCount(c => c - 1)
        }
        
    }

    return(
        <div>
            <p>counr : {count}</p>
            <button onClick={handleCountAdd}>add</button>
            <button onClick={handleCountReset}>reset</button>
            <button onClick={handleCountSub}>subtract</button>
        </div>
    )

}

export default UseEffecter