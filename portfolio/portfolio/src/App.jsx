import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./component/navbar/Navbar";
import Intro from "./component/introsection/Intro";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Intro />
    </BrowserRouter>
  );
}

export default App;
