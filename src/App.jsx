import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Slider from './components/Slider';
import HelpSection from './components/HelpSection';
import ServiceSection from './components/ServiceSection';
import ContactSection from './components/ContactSection';
import ContactForm from './components/ContactForm';
import FreeShower from './components/FreeShower';
import FreeTicker from './components/FreeTicker';
import ServicesOverview from './components/ServiceOverview';

function App() {
  return (
    <>
      {/* Common layout: Always shown */}
      <Banner />
      <Navbar />

      {/* Page-specific content via routes */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <FreeShower />
              <FreeTicker />
              <Slider />
              <HelpSection />
              <ContactSection />
              <ContactForm />
            </>
          }
        />
        <Route
          path="/about"
          element={<h1></h1>}
        />
        <Route
          path="/services"
          element={<ServicesOverview />}
        />
        <Route
          path="/projects"
          element={<h1 ></h1>}
        />
        <Route
          path="/contact"
          element={<ContactForm />}
        />
      </Routes>

      {/* Footer always visible */}
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
