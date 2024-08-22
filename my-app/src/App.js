import Footer from "./Component/footer/Footer";
import Navbar from "./Component/header/Navbar";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomeComponent from "./Component/HomeComponent";
import Web from "./Component/Webdevelipment/Web";
import Apps from "./Component/Appdevelipmeny/Apps";
import Ui from "./Component/Ui/Ui";
import Exprence from "./Component/Exprence/Exprence";
import AboutAs from "./Component/AboutAs/AboutAs";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ToastContainer />

        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/webdevelipment" element={<Web />} />
          <Route path="/appdevelipment" element={<Apps />} />
          <Route path="/softweardevelipment" element={<Ui />} />
          <Route path="/exprence" element={<Exprence/>} />
          <Route path="/AboutAs" element={<AboutAs/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
