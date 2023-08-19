import "./App.css";
import About from "./component/About";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Hairstylist from "./component/Hairstylist";
import HomePage from "./component/HomePage";
import Nav from "./component/Nav";
import { Route, Routes } from "react-router-dom";
import Men from "./component/Men";
import Women from "./component/Women";
import Login from "./component/Login";
import Register from "./component/Register";
import Dashboard from "./component/Dashboard";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/about" element={<About />} />
        <Route path="/hairstylist" element={<Hairstylist />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
