import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./component/navbar/Navbar";
import Intro from "./component/IntroSection/Intro";
import Skills from "./component/skills/Skills";
import Contact from "./component/ContactPage/Contact";
import Footer from "./component/Footer/Footer";
import MyPortfolio from "./component/MyPortfolio/MyPortfolio";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Intro />
      <Skills />
      <MyPortfolio />
      <Contact />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
