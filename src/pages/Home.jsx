import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Herosection from "./Herosection";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Testmonials from "./Testmonials";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    // If there's a hash in the URL, scroll to that element
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  return (
    <div>
      <Navbar/>
      <Herosection/>
      <Section2/>
      <Section3/>
      <Testmonials/>
      <Footer/>

    </div>
  );
};

export default Home;