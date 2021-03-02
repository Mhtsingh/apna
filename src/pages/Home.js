import {useState} from "react";
import Sidebar from '../components/Sidebar/Sidebar'
import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero";
import Process from "../components/Process/Process";
import Footer from "../components/Footer/Footer";
import Warning from "../components/Warning/Warning";
import About from "../components/About";
import { homeObjOne } from "../components/About/Data";
import Contact from '../components/ContactUs/Contact';



const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () =>
    {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Header toggle={toggle} />
            <Hero/>
            <About {...homeObjOne}/>
            <Process/>
            <Contact/>
            <Warning/>
            <Footer/>
        </>
    )
}

export default Home
