import React from "react";
import Banner from "../Banner/Banner";
import Cards from "../Cards/Cards";
import JobCategoryList from "../JobCategoryList/JobCategoryList";

const Home = () => {
  return (
    <>
      <Banner />
      <JobCategoryList />
      <Cards />
    </>
  );
};

export default Home;
