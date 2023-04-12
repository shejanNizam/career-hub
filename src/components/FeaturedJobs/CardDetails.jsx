import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";
import { ProductContext, cartContext } from "../../layout/Main";
import { addToDb } from "../../utils/fakeDB";

const CardDetails = () => {
  const products = useContext(ProductContext);
  const [cart, setCart] = useContext(cartContext);
  const data = useParams();
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    fetch(`/products.json`)
      .then((res) => res.json())
      .then((data) => setCardData(data));
  }, []);

  const details = cardData.find((dt) => dt.id === data.featureId) || {};
  // console.log(details);
  const {
    id,
    job_description,
    job_responsibility,
    job_requirements,
    experience,
    salary,
    title,
    location,
  } = details;

  const handleAddToCart = (details) => {
    let newCart = [];
    const exists = cart.find(
      (existingProduct) => existingProduct.id === details.id
    );
    if (!exists) {
      products.quantity = 1;
      newCart = [...cart, details];
    } else {
      const rest = cart.filter(
        (existingProduct) => existingProduct.id !== details.id
      );
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    toast.success("Applied Successfully!👍");
    setCart(newCart);
    addToDb(details.id);
  };

  return (
    <>
      <h1 className="text-center text-4xl mt-4">Job Details</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="ms-20 my-16">
          <p className="my-4">
            <span className="font-semibold">Job Description:</span>
            {job_description}
          </p>
          <p className="my-4">
            <span className="font-semibold">Job Responsibility:</span>
            {job_responsibility}
          </p>
          <p className="my-4">
            <span className="font-semibold">
              Educational Requirements: <br />
            </span>
            {job_requirements}
          </p>
          <p className="my-4">
            <span className="font-semibold">
              Experiences: <br />
            </span>
            {experience}
          </p>
        </div>
        <div className=" mx-32 my-16 p-8 rounded-md bg-slate-100">
          <h3 className="text-xl font-bold mb-4">Job Details</h3>
          <hr />
          <p>
            <span className="font-semibold">Salary:</span> {salary}
          </p>
          <p>
            <span className="font-semibold">Job Title :</span> {title}
          </p>
          <h3 className="text-xl font-bold my-4 ">Contact Information</h3>
          <hr />
          <p>
            <span className="font-semibold">Phone:</span> 017......55
          </p>
          <p>
            <span className="font-semibold">Email:</span> ....@gmail.com
          </p>
          <p>
            <span className="font-semibold">Address:</span> {location}
          </p>
          <div className="text-center mt-8">
            <button
              onClick={() => handleAddToCart(details)}
              className="btn-primary"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDetails;
