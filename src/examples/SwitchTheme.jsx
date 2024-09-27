import React,{useState} from "react"

function SwitchTheme(){
    const [style , setStyle] = useState("white");

    const eventitem = () => {
        if(style === "white"){
            setStyle("black")
        }else if(style === "black"){
            setStyle("blue")
        }else{
            setStyle("white")
        }
    }

    return(
        <body style={{backgroundColor : style, height : "100vh"}}>
            <button onClick={eventitem}>click</button>
        </body>
    );
}

export default SwitchTheme