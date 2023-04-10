import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { cartContext } from "../../layout/Main";
import CartItem from "./CartItem";

const AppliedJobs = () => {
  // const { initialCart, products } = useLoaderData();
  const [cart, setCart] = useContext(cartContext);

  //   Delete Shopping Cart
  const deleteCartHandler = () => {
    if (cart.length > 0) {
      setCart([]);
      deleteShoppingCart();
      return toast.error("All Items Removed! 🔥");
    }
    return toast.error("Cart is empty! 🔥");
  };

  //   Place Order
  const orderHandler = () => {
    if (cart.length) {
      setCart([]);
      deleteShoppingCart();
      return toast.success("Order Placed! 👍");
    }
    return toast.error("Cart is empty! 🔥");
  };

  return (
    <div className="flex min-h-screen items-start justify-center bg-gray-100 text-gray-900">
      <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 ">
        <h2 className="text-xl font-semibold">
          {cart.length ? "Review Cart Items" : "Cart is EMPTY!"}
        </h2>
        <ul className="flex flex-col divide-y divide-gray-700">
          {cart.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
        </ul>
        <div className="flex justify-end space-x-4">
          {cart.length > 0 ? (
            <>
              <button
                type="button"
                onClick={deleteCartHandler}
                className="btn-outlined"
              >
                Clear <span className="sr-only sm:not-sr-only">Cart</span>
              </button>
            </>
          ) : (
            <>
              <Link to="/">
                <button
                  type="button"
                  onClick={deleteCartHandler}
                  className="btn-outlined"
                >
                  Back <span className="sr-only sm:not-sr-only">To Shop</span>
                </button>
              </Link>
            </>
          )}

          <button onClick={orderHandler} type="button" className="btn-primary">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
