import React from "react";

export default function CareScale({scaleValue,careType}){
    const range = [1,2,3];
    const type = careType === "light"?'🌞' : '💧';
    
    // <div>{range.map(rangeElem=> scaleValue >= rangeElem?type : null)}</div> 
    return(
        <div>
            {range.map(rangeElement=>
                 scaleValue >= rangeElement ? (
                    <span>{type}</span>
                 ):null)}
        </div>
    )
}