import React from "react";
import CareScale from "./CareScale";


function PlantItem ({name,cover,id,light,water}){
    
    return(
        <li key={id} className="lmj-liste"onClick={()=>{handleClick(name)} } > 
            <img src={cover} alt={name} className="lmj-cover"/>
            <div>
                {name}
            </div>
            <CareScale scaleValue={light} careType="light"/>
            <CareScale scaleValue={water} careType="water"/>
        </li>
    )
}
 function handleClick(plantName){
    alert(`Vous avez choisi ${plantName}? tres bon choix`);
 }


export default PlantItem;