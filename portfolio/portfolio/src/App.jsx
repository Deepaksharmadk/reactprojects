import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./component/navbar/Navbar";
import Intro from "./component/introsection/Intro";
import Skills from "./component/skills/Skills";
import Myportfolio from "./component/myportfolio/Myportfolio";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Intro />
      <Skills />
      <Myportfolio />
    </BrowserRouter>
  );
}

export default App;
