import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import BlogsDetails from "./pages/BlogsDetails";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Nopage from "./pages/Nopage";
import PlaceRoute from "./pages/PlaceRoute";

// import { PlaceRoute } from "./pages/PlaceRoute";



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blogs/:id" element={<BlogsDetails />} />
          <Route path="places" element={<PlaceRoute />} />
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;