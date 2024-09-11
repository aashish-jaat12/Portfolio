import Footer from "./Component/footer/Footer";
import Navbar from "./Component/header/Navbar";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Route, Routes } from "react-router-dom";

import HomeComponent from "./Component/HomeComponent";
import Web from "./Component/Webdevelipment/Web";
import Apps from "./Component/Appdevelipmeny/Apps";
import Ui from "./Component/Ui/Ui";
import Exprence from "./Component/Exprence/Exprence";
import AboutAs from "./Component/AboutAs/AboutAs";
import Popups from "./Component/Popup/Popups";
import Allblog from "./Bloges/Allblog/Allblog";
import BlogHome from "./Bloges/blogScroler/BlogHome";
import Collagelife from "./Bloges/Collagelifeblog/Collagelife";

function App() {
  return (
    <>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/webdevelipment" element={<Web />} />
        <Route path="/appdevelipment" element={<Apps />} />
        <Route path="/softweardevelipment" element={<Ui />} />
        <Route path="/exprence" element={<Exprence />} />
        <Route path="/AboutAs" element={<AboutAs />} />
        <Route path="/blog" element={<Allblog />} />
        <Route path="/Collage-Life-Blog" element={<Collagelife/>} />
      </Routes>
      <Popups />
      <BlogHome />
      <Footer />
    </>
  );
}

export default App;
