import { createBrowserRouter } from "react-router-dom";
import AppliedJobs from "../../components/AppliedJobs/AppliedJobs";
import Blogs from "../../components/Blogs/Blogs";
import Error from "../../components/Error/Error";
import CardDetails from "../../components/FeaturedJobs/CardDetails";
import Home from "../../components/Home/Home";
import Statistics from "../../components/Statistics/Statistics";
import Main from "../../layout/Main";
import { productsAndCartData } from "../../loaders/getCart&ProductsData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    loader: productsAndCartData,
    children: [
      {
        path: "/",
        element: <Home />,
        // loader: () => productsAndCartData,
      },
      {
        path: "statistics",
        element: <Statistics />,
      },
      {
        path: "feature/:featureId",
        element: <CardDetails />,
      },
      {
        path: "applied_jobs",
        element: <AppliedJobs />,
        // loader: productsAndCartData,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
    ],
  },
]);

export default router;
