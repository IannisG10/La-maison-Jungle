
import './css/cart.css';
import './css/panier.css';
import Banniere from './component/exercice';
// import Cart from './component/cart';
import ShoppingList from './component/shoppingList';

// export default App;
function App(){
  return(
    <div>
      <Banniere/>
      {/* <Cart/> */}
      <ShoppingList/>
     
      
    </div>
  )
}
export default App
