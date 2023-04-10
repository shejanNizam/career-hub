import { createBrowserRouter } from "react-router-dom";
import AppliedJobs from "../../components/AppliedJobs/AppliedJobs";
import Blogs from "../../components/Blogs/Blogs";
import Error from "../../components/Error/Error";
import FeaturedJobs from "../../components/FeaturedJobs/FeaturedJobs";
import Home from "../../components/Home/Home";
import Statistics from "../../components/Statistics/Statistics";
import Main from "../../layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/features",
        element: <FeaturedJobs />,
      },
      {
        path: "/applied_jobs",
        element: <AppliedJobs />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
    ],
  },
]);

export default router;
