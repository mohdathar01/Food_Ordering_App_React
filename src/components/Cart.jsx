import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

 const cartItems = useSelector((store) => store.cart.items);

  // both below are do same thing but the above is targating a small portion of the store so always go with above when using redux
  // const store = useSelector((store) => store.cart.items);
  // const cartItems=store.cart.items;

  const dispatch=useDispatch();

const handleClearCart=()=>{
  dispatch(clearCart());
}


  return (
    <div className="cartmaindiv">
      <div className="mcontainercart">
         <h3>Your Cart
          </h3>
          <button className="clrcaartbtn" onClick={handleClearCart}>
       Clear Cart
        </button>
          </div>
          {cartItems.length===0 &&(<h1>Cart is empty.please Add Item into the Cart🍔🍕🍟</h1>)}

      
      <div className="cardaddeditems">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
