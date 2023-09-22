import React from "react";
import CareScale from "./CareScale";


function PlantItem ({name,cover,id,light,water,category}){
    const quantityLabel = {
        1:'peu',
        2:'modérement',
        3:'beaucoup'
    }
    return(
        <li key={id} className="lmj-liste"> 
            <img src={cover} alt={name} className="lmj-cover"/>
            <div>
                {name}
            </div>
            <div className="plantCategory">
                {category}
            </div>

            <div onClick={()=>{alert(`${name} a besoin de ${quantityLabel[light]} de lumière 🌞` )}}>
                <CareScale scaleValue={light} careType="light" />
            </div>

            <div onClick={()=>{alert(`${name} a besoin de ${quantityLabel[water]} d'eau 💧`)}}>
                <CareScale scaleValue={water} careType="water"/>
            </div>
        </li>
    )
}


 
export default PlantItem;