import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Complaints from "./components/Complaints";
import FAQS from "./components/FAQS";
import Companies from "./components/Companies";
import Footer from "./components/Footer";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/companies" element={<Companies />} />
        <Route path="/complaints" element={<Complaints />} />
        <Route path="/faqs" element={<FAQS />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
