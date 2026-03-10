import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home/Home';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#BCFF03] selection:text-black">
      <Navbar />
      <Home /> 
      <Footer />
    </div>
  );
}