import { useContext } from "react";
import { userContext } from "./Store";
function Show(){

    const user = useContext(userContext);
    return(
        <h1>{user}</h1>
    )
}

export default Show ;
