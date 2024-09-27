import ComponentC from "./ComponentC"
function ComponentB(){
    return(
        <div style={{border : "2px solid black" , padding : "10px"}}>
            <h1>ComponentB</h1>
            <ComponentC />
        </div>
    )
}

export default ComponentB