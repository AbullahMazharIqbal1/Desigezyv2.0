import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { AnimatedNumber } from '../../components/AnimatedNumber'; // Adjust path if needed

export default function Hero() {
  // Placeholder images for the slider (replace with Aafaq's actual portfolio images later!)
  const images = [
    "https://picsum.photos/seed/d1/400/600",
    "https://picsum.photos/seed/d2/400/600",
    "https://picsum.photos/seed/d3/400/600",
    "https://picsum.photos/seed/d4/400/600",
    "https://picsum.photos/seed/d5/400/600",
  ];

  return (
    <section className="relative pt-[180px] pb-15 overflow-hidden min-h-screen bg-[#0C0C0C] flex flex-col justify-between">
      
      {/* --- BACKGROUND SLIDESHOW (Design Pickle Effect) --- */}
      <div 
        className="absolute top-0 right-0 w-full md:w-[65%] h-full z-0 flex items-center overflow-hidden opacity-60 md:opacity-100"
        style={{
          // This gradient mask makes the left side of the slider completely transparent, fading into solid on the right
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, transparent 15%, black 60%)',
          maskImage: 'linear-gradient(to right, transparent 0%, transparent 15%, black 60%)'
        }}
      >
        <motion.div
          className="flex gap-6 mt-[100px]"
          animate={{ x: [0, -1500] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        >
          {/* Tripled the array so the infinite scroll never runs out of images */}
          {[...images, ...images, ...images].map((img, i) => (
            <div key={i} className="min-w-[300px] md:min-w-[350px] h-[450px] md:h-[550px] rounded-[20px] overflow-hidden shadow-2xl">
              <img 
                src={img} 
                className="w-full h-full object-cover" 
                referrerPolicy="no-referrer"
                alt={`Portfolio Design ${i}`}
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* --- HERO TEXT CONTENT --- */}
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 mt-10">
        
        {/* Main Headline */}
        <h1 
          className="text-[#F6F2E7] w-full md:w-[683px]"
          style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 700, fontSize: 'clamp(50px, 6vw, 82.26px)', lineHeight: '82%' }}
        >
          We Build Brands<br />That Stand Out!
        </h1>
        
        {/* Subheadline */}
        <p 
          className="text-[#BCFF03] w-full md:w-[560px] mt-8 mb-10"
          style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500, fontSize: '19.42px', lineHeight: '22px' }}
        >
          We are a Graphic Design Agency that Provides Highly Effective,<br className="hidden md:block"/>
          Creative, and Unique Design Services.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-2">
          {/* Button 1 */}
          <button 
            className="bg-[#BCFF03] text-[#0C0C0C] flex items-center justify-center rounded-[3px] w-[192px] h-[34px] hover:scale-105 transition-transform"
            style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 500, fontSize: '16px', lineHeight: '20px' }}
          >
            Let's Work Together
          </button>
          
          {/* Button 2 */}
          <button 
            className="border border-[#F6F2E7] text-[#BCFF03] flex items-center justify-center rounded-[3px] w-[155px] h-[34px] hover:bg-[#F6F2E7]/10 transition-colors"
            style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 500, fontSize: '16px', lineHeight: '20px' }}
          >
            View Portfolio →
          </button>
        </div>
      </div>

      {/* --- TRUST BAR --- */}
    {/* --- TRUST BAR --- */}
      <div className="relative z-8 mt-13 md:mt-14 mb-8 px-4 w-full">
        
        {/* Helping brands text */}
        <p 
          className="text-center text-[#BCFF03] mb-6"
          style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500, fontSize: '19.42px', lineHeight: '82%' }}
        >
          Helping brands grow through impactful visual design.
        </p>
        
        {/* Trust Bar Container */}
        <div className="w-full max-w-[1120px] mx-auto min-h-[110px] bg-[#171717] rounded-sm flex items-center justify-center py-6 md:py-0 overflow-hidden shadow-2xl">
          
          {/* Inner Flex Row - Using wrap for mobile, gap-134px on desktop */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-[134px]">
            <StatItem value={300} suffix="+" label="Projects Completed" />
            <StatItem value={150} suffix="+" label="Happy Clients" />
            <StatItem value={6} suffix="+" label="Years Design Experience" />
            
            {/* 24/7 Support doesn't need the animated number component usually */}
            <div className="flex flex-col items-center">
              <span className="text-[#F6F2E7]" style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 600, fontSize: '50.84px', lineHeight: '82%' }}>
                24/7
              </span>
              <span className="text-[#BCFF03] mt-[6px]" style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500, fontSize: '12px', lineHeight: '82%' }}>
                Support Available
              </span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

// Sub-component for the stats
interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
}

const StatItem = ({ value, suffix, label }: StatItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  return (
    <div ref={ref} className="flex flex-col items-center">
      {/* Numbers (Clash Display, 600, 50.84px) */}
      <span className="text-[#F6F2E7]" style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 600, fontSize: '50.84px', lineHeight: '82%' }}>
        {isInView ? <AnimatedNumber value={value} suffix={suffix} /> : `0${suffix}`}
      </span>
      {/* Label (Satoshi, 500, 12px) */}
      <span className="text-[#BCFF03] mt-[6px]" style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500, fontSize: '12px', lineHeight: '82%' }}>
        {label}
      </span>
    </div>
  );
};