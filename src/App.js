import React from 'react';
import Navbar from './component/navbar/Navbar';
import Hero from './component/hero/Hero';
import About from './component/about/About';
import Project from './component/project/Project';
import Contact from './component/contact/Contact';
import Footer from './component/footer/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
