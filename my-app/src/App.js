
import Contact from "./Component/contact/Contact";
import Educations from "./Component/Education/Educations";
import Footer from "./Component/footer/Footer";
import Navbar from "./Component/header/Navbar";
import Home from "./Component/Home/Home";
import Projact from "./Component/projact/Projact";
import Service from "./Component/services/Service";

function App() {
  return (
   <>
   <Navbar/>
   <Home/>
   <Educations/>
   <Service/>
   <Projact/>
   <Contact/>
   <Footer/>
   </>
  )
}

export default App;
