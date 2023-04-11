import { Link } from "react-router-dom";

const Card = ({ product }) => {
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
        <button className="btn-outlined">View details</button>
      </Link>
    </div>
  );
};

export default Card;
