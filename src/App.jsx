import React, { createContext, useState } from 'react'
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience"
import Service from "./components/service/Service"
import Portofolio from "./components/portofolio/Portofolio"
import Testimonial from "./components/testimonials/Testimonials"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"

export const ActviveContext = createContext()

const App = () => {
  const [active, setActive] = useState('#')
  return (
    <>
      <ActviveContext.Provider value={{ active, setActive }}>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Service />
        <Portofolio />
        <Contact />
      </ActviveContext.Provider>
      {/* <Testimonial /> */}
      <Footer />
    </>
  );
};

export default App;
