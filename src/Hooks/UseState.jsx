import React, {useState} from "react"

function Mycomponent(){
    const [name, setName] = useState();

    const [age , setAge] = useState(0);

    const [isemployed , setIsemployed] =useState(false);

    const eventclick3 = () => {
        setIsemployed(!isemployed)
    }

    const eventclick = () => {
        setName("shadil");
    }

    const eventclick2 = ()=>{
        setAge (age + 1);
    }

    return (<div>

        <p>Name : {name}</p>
        <button onClick={eventclick}>Click Me!</button>

        <p>Age:{age}</p>
        <button onClick={eventclick2}>click Me</button>

        <p>is employed : {isemployed ? "yes" : "no"}</p>
        <button onClick={eventclick3}>Toggle status</button>
    </div>);
}

export default Mycomponent