import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import OpeningTimes from './components/OpeningTimes';
import Banner from './components/Banner';
import Slider from './components/Slider';
import HelpSection from './components/HelpSection';
import ServiceSection from './components/ServiceSection';
import ContactSection from './components/ContactSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';





function App() {
  return (
    <>
    
      <Banner />
      <Navbar />
      <Slider />
      <HelpSection />
      <ServiceSection />
      <ContactSection />
      <ContactForm />
      <Footer />
      <div className=" text-center text-xl text-gray-700">
        <Routes>
          <Route path="/"/>
          <Route path="/about" element={<h1>About Us</h1>} />
          <Route path="/services" element={<h1>Our Services</h1>} />
          <Route path="/projects" element={<h1>Our Projects</h1>} />
          <Route path="/contact" element={<h1>Contact Us</h1>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
