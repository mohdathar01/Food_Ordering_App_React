import { useSelector } from "react-redux";
import ItemList from "./ItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="cartmaindiv">
      <div className="mcontainercart"> Your Cart</div>
      <div className="cardaddeditems">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
