import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Herosection from "./Herosection";
import Section2 from "./Section2";
import Section3 from "./Section3";
 

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Herosection/>
      <Section2/>
      <Section3/>
      <Footer/>

    </div>
  );
};

export default Home;