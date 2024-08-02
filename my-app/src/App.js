import Contact from "./Component/contact/Contact";
import Educations from "./Component/Education/Educations";
import Footer from "./Component/footer/Footer";
import Navbar from "./Component/header/Navbar";
import Home from "./Component/Home/Home";
import Projact from "./Component/projact/Projact";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Service from "./Component/services/Service";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      
      <Router>
        <Navbar />
        <ToastContainer/>
        <Home />
        <Educations />
        <Service />
        <Projact />
        <Contact />

        <Footer />
      </Router>
    </>
  );
}

export default App;
