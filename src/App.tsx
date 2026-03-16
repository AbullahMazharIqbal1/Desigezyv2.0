import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';

import GraphicDesigning from './pages/Services/GraphicDesigning/GraphicDesigning';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import VideoEditing from './pages/Services/VideoEditing/VideoEditing';
import WebDevelopment from './pages/Services/WebDevelopment/WebDevelopment';
import Portfolio from './pages/Portfolio/Portfolio';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import CTA from './components/CTA';
import ScrollToTop from './components/ScrollToTop';
import Shop from './pages/Shop/Shop';
import ProductPage from './pages/Shop/ProductPage';

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/graphic-designing" element={<GraphicDesigning />} />
        <Route path="/services/video-editing" element={<VideoEditing />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<ProductPage />} />
      </Routes>
      <CTA />
      <Footer />

    </BrowserRouter>
  );
}

// This is the line that was missing!
export default App;