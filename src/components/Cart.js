import { useDispatch, useSelector } from "react-redux";
import FoodCard from "./FoodCard";
import { clearCart } from "../Utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  // clear cart 
  const dispatch = useDispatch();
  const handleClearCart = () =>{
    dispatch(clearCart());
  }

  return (
    <div className="grid justify-content-center md:px-60 ">
      <div className="container border rounded-md p-3">
        <div className="grid col-span-2">
          <div className="col-span">
          <h1>Cart</h1>
          </div>
          <div className="text-right col-span">
          <button className="bg-red text-whiie" onClick={handleClearCart}>Clear Cart</button>
          </div>
        </div>
        <hr></hr>
        {cartItems.length > 0 && <h1>Your Cart is Empty!!! </h1>}
        
        {cartItems.length > 0 &&
          cartItems.map((cartItems) => (
            <FoodCard key={cartItems?.id} data={cartItems} />
          ))
          }
      </div>
    </div>
  );
};
export default Cart;
