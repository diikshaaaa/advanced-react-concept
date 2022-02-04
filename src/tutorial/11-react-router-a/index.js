import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Blogs from "./Blogs";
import Contact from "./Contact";
import NoPage from "./NoPage";

export default function RouterExample() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    // We wrap our content first with <BrowserRouter>.It is the parent component that is used to store all of the other components.
    // Then we define our <Routes>. An application can have multiple <Routes>. 
    // <Route> can be nested(eg in this case).
    // nested <Route> inherit and add to the parent route. So the blogs path is combined with the parent and becomes /blogs. 
    // Home component route does not have a path but has an index attribute. That specifies this route as the default route for the parent route, which is /.
    //  the path to * will act as a catch-all for any undefined URLs. This is great for a 404 error page.
  );
}

