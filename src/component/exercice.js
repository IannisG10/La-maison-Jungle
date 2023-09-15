import React from "react";
import logo from "../assets/leaf.png"

function Banniere (){
     const tittle = "La maison jungle";
     const monImage = logo;

    
    return(
        <div className="lmj">
            <img src={monImage} alt="La maison jungle" className="monImage"/>
            <h1 className="lmj-tittle">{tittle} </h1>
            
        </div>
    )
}
export default Banniere

