import React ,{useState}from "react";
import '../css/cart.css'

function Cart(){
    const monsteraPrice =8;
    const [cart,setOpenCart] = useState(0);
    const [isOpen,setIsOpen] = useState(true);
    return isOpen ?(
        <div>
            <button onClick={()=>{setIsOpen(false)}} className="lmj-toggle-button">Fermer le Panier </button>
            <h2>Panier</h2>
            <div>
                Monstera :{monsteraPrice} $
                <button onClick={()=>{setOpenCart(cart + 1)}} className="add-button">Ajouter au Panier</button>
                <button onClick={()=>{setOpenCart(0)}}>Vider le Panier </button>
                <h3>Total :{cart * monsteraPrice}</h3>
            </div>
        </div>
        
    ): (
        <button onClick={()=>{setIsOpen(true)}}>Ouvrir le Panier</button>
    )
}
export default Cart;