import "./App.css";
import { useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Complaints from "./components/Complaints";
import FAQS from "./components/FAQS";
import Footer from "./components/Footer";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import JoinNow from "./components/JoinNow";
import Alert from "./components/Alert";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, color) => {
    setAlert({
      msg: message,
      color: color,
    });
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };

  return (
    <Router>
      <Navbar />
      <Alert alert={alert} setAlert={setAlert} />
      <Routes>
        <Route path="/joinnow" element={<JoinNow showAlert={showAlert} />} />
        <Route
          path="/complaints"
          element={<Complaints showAlert={showAlert} />}
        />
        <Route path="/faqs" element={<FAQS />} />
        <Route path="/signin" element={<SignIn showAlert={showAlert} />} />
        <Route path="/signup" element={<SignUp showAlert={showAlert} />} />
        <Route path="/" element={<Home showAlert={showAlert} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
