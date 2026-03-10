import { Marquee } from '../../components/Marquee';
import Hero from './Hero';
import FeaturedWork from './FeaturedWork';
import Services from './Services';
import WhyDesigneezy from './WhyDesigneezy';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import MoreQuestions from './MoreQuestions';
import Newsletter from './Newsletter';
import CTA from './CTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedWork />
      <Services />
      <Marquee 
        direction="right"
        items={[
          "Graphic Designing", 
          "Branding", 
          "Social Media Posts", 
          "Ad Creatives", 
          "Business Card", 
          "Brand Identity", 
          "Print Designs", 
          "Video Editing", 
          "Web Development"
        ]} 
      /> 
      <WhyDesigneezy />
      <Testimonials />
      <FAQ />
      <MoreQuestions />
      <Newsletter />
      <CTA />
      
    </main>
  );
}