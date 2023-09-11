import React from "react";
function Cart(){
    const monsteraPrice =8;
    const lierrePrice =10;
    const FlowerPrice =15;
    return(
        <div className="lmj">
            <h2>Panier</h2>
            <ul>
                <li>Monstera : {monsteraPrice}</li>
                <li>Lierre : {lierrePrice}</li>
                <li>Bouquet de fleur : {FlowerPrice}</li>
            </ul>
            <p>Total :{monsteraPrice+lierrePrice+FlowerPrice}</p>
        </div>
    )
}
export default Cart;