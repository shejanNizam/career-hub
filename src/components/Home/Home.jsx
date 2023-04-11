import React, { useContext, useState } from "react";
import { ProductContext } from "../../layout/Main";
import Banner from "../Banner/Banner";
import Card from "../FeaturedJobs/Card";
import JobCategoryList from "../JobCategoryList/JobCategoryList";

const Home = () => {
  const [showAll, setShowAll] = useState(false);
  const products = useContext(ProductContext);

  const handleShowAll = () => {
    setShowAll(true);
  };

  return (
    <>
      <Banner />
      <JobCategoryList />
      <div className="text-center mt-16 ">
        <h2 className="font-bold text-4xl"> Featured Jobs </h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4 px-20">
        {products.slice(0, showAll ? 6 : 4).map((product) => (
          <Card key={product.id} product={product}></Card>
        ))}
      </div>
      {!showAll && (
        <div onClick={handleShowAll} className="text-center my-4">
          <button className="btn-primary">Show All Jobs</button>
        </div>
      )}
    </>
  );
};

export default Home;
