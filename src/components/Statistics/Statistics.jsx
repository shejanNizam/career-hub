import React from "react";
import { Pie, PieChart, Tooltip } from "recharts";

const Statistics = () => {
  const data = [
    {
      name: "Assignment-01",
      value: 60,
    },
    {
      name: "Assignment-02",
      value: 57,
    },
    {
      name: "Assignment-03",
      value: 29,
    },
    {
      name: "Assignment-04",
      value: 38,
    },
    {
      name: "Assignment-05",
      value: 42,
    },
    {
      name: "Assignment-06",
      value: 50,
    },
    {
      name: "Assignment-07",
      value: 60,
    },
    {
      name: "Assignment-08",
      value: 60,
    },
  ];

  return (
    <>
      <h2 className="text-center text-4xl font-bold mt-8">
        All Assignment Marks
      </h2>
      <div className="ms-96 ps-12">
        <PieChart width={1000} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
      </div>
    </>
  );
};

export default Statistics;
