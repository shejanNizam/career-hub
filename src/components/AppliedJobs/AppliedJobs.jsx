import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { cartContext } from "../../layout/Main";
import CartItem from "./CartItem";

const AppliedJobs = () => {
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

  return (
    <div className="flex min-h-screen items-start justify-center bg-gray-100 text-gray-900">
      <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 ">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">
            {cart.length ? "Review Cart Items" : "Cart is EMPTY!"}
          </h2>
          <div className="dropdown">
            <label tabIndex={0} className="btn-outlined m-1">
              Filter By
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Remote</a>
              </li>
              <li>
                <a>Onsite 2</a>
              </li>
            </ul>
          </div>
        </div>
        <ul className="flex flex-col divide-y divide-gray-700">
          {cart.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
        </ul>
        <div className="flex justify-end space-x-4">
          <Link to="/">
            <button type="button" className="btn-outlined">
              Back <span className="sr-only sm:not-sr-only">To Home</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
