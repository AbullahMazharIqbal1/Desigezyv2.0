import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';

import GraphicDesigning from './pages/Services/GraphicDesigning/GraphicDesigning';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import VideoEditing from './pages/Services/VideoEditing/VideoEditing';
import WebDevelopment from './pages/Services/WebDevelopment/WebDevelopment';

import CTA from './components/CTA';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/graphic-designing" element={<GraphicDesigning />} />
        <Route path="/services/video-editing" element={<VideoEditing />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        
      </Routes>
      <CTA />
      <Footer />

    </BrowserRouter>
  );
}

// This is the line that was missing!
export default App;