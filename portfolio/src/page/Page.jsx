import Intro from "../component/IntroSection/Intro";
import Navbar from "../component/navbar/Navbar";
import Skills from "../component/skills/Skills.jsx";

import MyPortfolio from "../component/MyPortfolio/MyPortfolio.jsx";
import Contact from "../component/ContactPage/Contact.jsx";

function Page({ children }) {
  return (
    <>
      {children}
      <Intro />
      <Skills />
      <MyPortfolio />
      <Contact />
    </>
  );
}

export default Page;
