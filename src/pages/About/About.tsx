import Hero from './Hero';
import Testimonials from '../Home/Testimonials'; // Reusing your global sections
import AboutDetails from './AboutDetails';
import WhyDesigneezy from './WhyDesigneezy';
import Founder from './Founder';


export default function About() {
  return (
    <div className="min-h-screen bg-[#0C0C0C]">
      <main>
        <Hero />
        <AboutDetails />
        <WhyDesigneezy/>
        <Founder />
      </main>
      
     
      <Testimonials />
  
    </div>
  );
}