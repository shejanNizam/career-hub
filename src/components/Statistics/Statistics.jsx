import React from "react";
import { Bar, BarChart, CartesianGrid, Cell, XAxis, YAxis } from "recharts";

const colors = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "red",
  "pink",
  "gray",
  "#00C49F",
];

const data = [
  {
    name: "Assignment 01",
    uv: 60,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Assignment 02",
    uv: 57,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Assignment 03",
    uv: 29,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Assignment 04",
    uv: 38,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Assignment 05",
    uv: 42,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Assignment 06",
    uv: 50,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Assignment 07",
    uv: 60,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Assignment 08",
    uv: 60,
    pv: 1398,
    amt: 2210,
  },
];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export const Statistics = () => {
  return (
    <>
      <h2 className="text-center text-4xl font-bold mt-8">
        All Assignment Marks
      </h2>
      <div className="my-20 ms-32">
        <BarChart
          width={1000}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar
            dataKey="uv"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </div>
    </>
  );
};

Statistics.demoUrl =
  "https://codesandbox.io/s/bar-chart-with-customized-shape-dusth";
