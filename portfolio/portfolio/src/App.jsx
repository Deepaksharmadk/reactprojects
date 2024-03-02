import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./component/navbar/Navbar";
import Intro from "./component/introsection/Intro";
import Skills from "./component/skills/Skills";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Intro />
      <Skills />
    </BrowserRouter>
  );
}

export default App;
