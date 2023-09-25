import React from "react";
import '../css/panier.css'
import { plantList } from "../datas/plantList";
import PlantItem from "./plantItem";
import Cart from "./cart";

function ShoppingList (){
    
    return(
        <div className="lmj-cart"> 
            <ul className="cart-list">
                {plantList.map(({id,cover,name,water,light,category}) =>(
                    <PlantItem id={id}
                                category={category}
                               cover={cover}
                               name={name}
                               water={water}
                               light={light}
                               />
                ))}
            </ul>
            <Cart/>
        </div>


    )
    
}
export default ShoppingList;