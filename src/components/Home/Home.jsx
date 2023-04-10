import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { ProductContext, cartContext } from "../../layout/Main";
import { addToDb } from "../../utils/fakeDB";
import Banner from "../Banner/Banner";
import Card from "../FeaturedJobs/Card";
import JobCategoryList from "../JobCategoryList/JobCategoryList";

const Home = () => {
  const [showAll, setShowAll] = useState(false);
  const products = useContext(ProductContext);
  const [cart, setCart] = useContext(cartContext);

  const handleShowAll = () => {
    setShowAll(true);
  };

  const handleAddToCart = (product) => {
    let newCart = [];
    const exists = cart.find(
      (existingProduct) => existingProduct.id === product.id
    );
    if (!exists) {
      products.quantity = 1;
      newCart = [...cart, product];
    } else {
      const rest = cart.filter(
        (existingProduct) => existingProduct.id !== product.id
      );
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    toast.success("Product Added! 🛒");
    setCart(newCart);
    addToDb(product.id);
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
          <Card
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Card>
        ))}
      </div>
      {!showAll && (
        <div onClick={handleShowAll} className="text-center my-4">
          <button className="btn-primary">Show All</button>
        </div>
      )}
    </>
  );
};

export default Home;
