import React from "react";
import '../css/panier.css';

function Cart(){
    const monsteraPrice =8;
    const lierrePrice =10;
    const FlowerPrice =15;
    return(
        <div className="lmj-cart">
            <h2>Panier</h2>
            <ul className="cart-list">
                
                <li>Monstera : {monsteraPrice} Ar</li>
                <li>Lierre : {lierrePrice} Ar</li>
                <li>Bouquet de fleur : {FlowerPrice} Ar</li>
            </ul>
            <p>Total :{monsteraPrice+lierrePrice+FlowerPrice}</p>
        </div>
    )
}
export default Cart;