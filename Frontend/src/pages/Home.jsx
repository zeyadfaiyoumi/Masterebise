import Navbar from "../componants/navbar/Navbar";
import Footer from "../componants/footer/Footer";
import Hero from "../componants/home/herosection";
import Whyour from "../componants/home/Whyour";
import Mainsection from "../componants/home/Mainsection";
import Fedback from "../componants/home/Fedback";
import FQA from "../componants/home/FQA";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Whyour />
      <Mainsection />
      <Fedback />
      <FQA />
      <Footer />
    </>
  );
}

export default Home;
