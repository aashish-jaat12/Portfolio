import Footer from "./Component/footer/Footer";
import Navbar from "./Component/header/Navbar";
import { useEffect } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Route, Routes, useLocation } from "react-router-dom";

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
import WhyBCA from "./Bloges/WhyBCA/WhyBCA";
import Web_developer from "./Bloges/webdeveloper/Web_developer";

function App() {
 const {pathname} = useLocation()

  useEffect(()=>{
    window.scrollTo(0,0)
  },[pathname])
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
        <Route path="/Why-bca-202.." element={<WhyBCA/>} />
        <Route path="/web-developer-2024" element={<Web_developer/>} />
      </Routes>
      <Popups />
      <BlogHome />
      <Footer />
    </>
  );
}

export default App;
