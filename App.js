import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/home/Home";
import AboutUs from "./pages/aboutUs/AboutUs";
import Team from "./pages/OurTeam/Team";
import "./App.css";
import Faqs from "./pages/FAQ's/Faqs";
import Book from "./pages/booking/Book";
import Error from "./pages/error404/Error";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Contact from "./pages/contact/Contact";
import ServicesPage from "./pages/Services/ServicesPage";
import BlogPage from "./pages/Blog/BlogPage";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index path="/" element={<Home />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/team" element={<Team />} />
      <Route path="/faq's" element={<Faqs />} />
      <Route path="/booking" element={<Book />} />
      <Route path="/error" element={<Error />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/servicespage" element={<ServicesPage />} />
      <Route path="/blogpage" element={<BlogPage />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
