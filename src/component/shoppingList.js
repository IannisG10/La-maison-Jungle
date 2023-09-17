import React from "react";
import '../css/panier.css'
import { plantList } from "../datas/plantList";




function ShoppingList (){
    const categories = plantList.reduce((acc,plant)=> 
        acc.includes(plant.category)?acc :acc.concat(plant.category),[]);
    return(
        <div className="lmj-cart">
            <ul className="">
                {categories.map(x=>(<li key={x}>{x}</li>))}
            </ul>
            <ul className="cart-list">
                {plantList.map(plant=>(
                    <li key={plant.id} className="lmj-item">
                         {plant.name}{plant.isBestSell ?<span>🔥</span>:null}{plant.isSpecialOffer? 
                        <div className="lmj-sales">Solde</div>:null}
                     
                    </li>))}     
            </ul>
        </div>
    )
    
}
export default ShoppingList;