import React from "react";
import { Link } from "react-router-dom";

const CartItem = ({ product }) => {
  // console.log(product);

  const {
    id,
    logo,
    title,
    company,
    job_category,
    job_duration,
    location,
    salary,
    quantity,
  } = product;
  return (
    <>
      <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
        <div className="flex w-full space-x-2 sm:space-x-4">
          <img
            className="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none sm:w-32 sm:h-32 bg-gray-500"
            src={logo}
            alt="Polaroid camera"
          />
          <div className="flex flex-col justify-between w-full pb-4">
            <div className="flex justify-between w-full pb-2 space-x-2">
              <div className="space-y-1">
                <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                  {title}
                </h3>
                <p>
                  {company}{" "}
                  <span className="ms-2 font-semibold">
                    Quantity: {quantity}
                  </span>
                </p>
                <div className="flex gap-4 my-2">
                  <p className="border px-1 rounded text-purple-400">
                    {job_category}
                  </p>
                  <p className="border px-1 rounded text-purple-400">
                    {job_duration}
                  </p>
                </div>
                <div className="flex gap-4 mb-2">
                  <p> {location} </p>
                  <p>Salary: {salary}</p>
                </div>
              </div>

              <div className="text-right flex justify-center items-center">
                <Link to={`/feature/${id}`}>
                  <button className="btn-outlined"> View Details</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default CartItem;
