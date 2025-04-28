import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import BlogsDetails from "./pages/BlogsDetails";
import Home from "./pages/Home";
import Nopage from "./pages/Nopage";
import PlaceRoute from "./pages/PlaceRoute";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/blogs',
        element: <Blogs />,
      },
      {
        path: '/blogsDetails',
        element: <BlogsDetails />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/noPages',
        element: <Nopage />,
      },
      {
        path: '/placeRoute',
        element: <PlaceRoute/>,
      },
    ]
  }
])


const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;