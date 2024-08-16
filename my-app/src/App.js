import Footer from "./Component/footer/Footer";
import Navbar from "./Component/header/Navbar";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomeComponent from "./Component/HomeComponent";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ToastContainer />

        <Routes>
          <Route path="/" element={<HomeComponent />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
