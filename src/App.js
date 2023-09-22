
import './css/cart.css';
import './css/panier.css';
import Banniere from './component/Banniere';
import Footer from './component/footer';
// import Cart from './component/cart';
import ShoppingList from './component/shoppingList';

// export default App;
function App(){
  return(
    <div>
      <Banniere/>
      {/* <Cart/> */}
      <ShoppingList/>
      <Footer/>
     
      
    </div>
  )
}
export default App
