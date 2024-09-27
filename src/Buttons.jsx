
function Buttons(){
    let count = 0 ;
    const eventclick = () => {
        if(count < 3){
            count ++ ;
            console.log(`${name} u beat me ${count} times `);
            
        }else{
            console.log("divya don't shout");
            
        }
    };    
    
    return( <button onClick={() => eventclick("shadil")}>Click Me</button>);
}

export default Buttons 