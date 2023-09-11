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
                <li>Monstera : {monsteraPrice}</li>
                <li>Lierre : {lierrePrice}</li>
                <li>Bouquet de fleur : {FlowerPrice}</li>
            </ul>
            <p>Total :{monsteraPrice+lierrePrice+FlowerPrice}</p>
        </div>
    )
}
export default Cart;