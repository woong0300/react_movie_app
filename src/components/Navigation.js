import React from "react";
import { Link } from "react-router-dom";

//Link는 Router안에서 쓰여야 한다!!

function Navigation(){
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>            
    );
}

export default Navigation;
