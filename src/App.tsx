import React, { createContext, useState } from 'react'
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import WorkingExperience from "./components/working-experience/WorkingExperience"
// import Service from "./components/service/Service"
import Portofolio from "./components/portofolio/Portofolio"
// import Testimonial from "./components/testimonials/Testimonials"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import Skill from './components/skills/Skill';

interface ActiveContextType {
    active: string;
    setActive: (active: string) => void;
}

export const ActiveContext = createContext<ActiveContextType | undefined>(undefined)

const App = () => {
    const [active, setActive] = useState<string>('#')

    return (
        <>
            <ActiveContext.Provider value={{ active, setActive }}>
                <Header />
                <Nav />
                <WorkingExperience />
                <Skill />
                {/* <Service /> */}
                <Portofolio />
                <Contact />
            </ActiveContext.Provider>
            {/* <Testimonial /> */}
            <Footer />
        </>
    );
};

export default App;