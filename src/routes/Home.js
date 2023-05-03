import React from 'react';
import Navbar from '../components/Navbar';
import Homesection from '../components/Homesection';
import AboutUs from '../components/AboutUs';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
// import WorkCard from '../components/WorkCard';
const Home = () => {
  return (
    <>
    <Navbar />
    <Homesection />
    <AboutUs />
    <Menu />
    <Footer />
    </>
  )
}

export default Home