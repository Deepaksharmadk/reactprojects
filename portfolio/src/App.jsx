import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import About from "./component/IntroSection/Intro";

import Page from "./page/Page";
import Navbar from "./component/navbar/Navbar";
import MyPortfolio from "./component/MyPortfolio/MyPortfolio";
import Contact from "./component/ContactPage/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Page />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/portfolio" element={<MyPortfolio />}></Route>
        <Route path="/github" element={<h2>github page</h2>}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
