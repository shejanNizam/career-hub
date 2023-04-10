import React from "react";
import { Link } from "react-router-dom";

const Card = ({ product, handleAddToCart }) => {
  const {
    id,
    logo,
    title,
    company,
    job_category,
    job_duration,
    location,
    salary,
    job_description,
    job_responsibility,
    job_requirements,
    experience,
  } = product;
  return (
    <div className="border rounded p-8 m-8">
      <img className="w-28 h-8" src={logo} alt="" />
      <h4 className="font-semibold"> {title} </h4>
      <p> {company} </p>
      <div className="flex gap-4 my-2">
        <p className="border px-1 rounded text-purple-400"> {job_category} </p>
        <p className="border px-1 rounded text-purple-400"> {job_duration} </p>
      </div>
      <div className="flex gap-4 mb-2">
        <p> {location} </p>
        <p> Salary: {salary} </p>
      </div>
      <Link to={`/feature/${id}`}>
        <button
          onClick={() => handleAddToCart(product)}
          className="btn-info px-4 py-2 rounded text-white"
        >
          View details
        </button>
      </Link>
    </div>
  );
};

export default Card;
