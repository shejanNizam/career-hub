import React from "react";
import { useLoaderData } from "react-router-dom";

const CardDetails = () => {
  const card = useLoaderData();
  console.log(card);

  return (
    <div>
      <h3>Card Details</h3>
    </div>
  );
};

export default CardDetails;
