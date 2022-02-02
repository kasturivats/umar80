import React from "react";
import {Link} from "react-router-dom";
function LinkRouter(){
    return(
        <>
            <Link to="/">Home Page</Link>
            <Link to="/footer">Footer Page</Link>
        </>
    )
}
export default LinkRouter;