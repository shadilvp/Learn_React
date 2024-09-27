import CustomHook from "./CustomedHooks";

function Example(){

    const [count, setCount] = CustomHook("");

    const AddCount = () => {
        setCount("shadil")
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={AddCount}>add</button>
        </div>
    )
    
}

export default Example