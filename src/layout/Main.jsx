import React, { createContext, useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export const ProductContext = createContext([]);
export const cartContext = createContext([]);

const Main = () => {
  const { initialCart, products } = useLoaderData();
  const [cart, setCart] = useState(initialCart);

  return (
    <ProductContext.Provider value={products}>
      <cartContext.Provider value={[cart, setCart]}>
        <Header />
        <Outlet />
        <Footer />
      </cartContext.Provider>
    </ProductContext.Provider>
  );
};

export default Main;
