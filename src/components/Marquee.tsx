import { motion } from 'motion/react';

interface MarqueeProps {
  items: string[];
  direction?: 'left' | 'right';
  speed?: number;
}

export const Marquee = ({ items, direction = 'left', speed = 40 }: MarqueeProps) => {
  return (
    // Outer container: Provides the black gap between the two cream sections
    <div className="w-full bg-[#0C0C0C] py-24">
      
      {/* Inner container: Exactly 1120px wide, 110px high, #171717 background */}
      <div className="max-w-[1120px] mx-auto h-[110px] bg-[#171717] flex items-center overflow-x-hidden relative rounded-sm shadow-xl">
        
        <motion.div
          initial={{ x: direction === 'left' ? 0 : '-50%' }}
          animate={{ x: direction === 'left' ? '-50%' : 0 }}
          transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap items-center h-full"
        >
          {/* Tripled the items array to ensure a perfectly seamless infinite scroll */}
          {[...items, ...items, ...items].map((item, i) => (
            <div key={i} className="flex items-center">
              
              {/* The text tag */}
              <span 
                className="text-[#F6F2E7] mx-6"
                style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 500, fontSize: '36px', lineHeight: '82%' }}
              >
                {item}
              </span>
              
              {/* The dash separator */}
              <span 
                className="text-[#F6F2E7] mx-6"
                style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 500, fontSize: '36px', lineHeight: '82%' }}
              >
                -
              </span>
              
            </div>
          ))}
        </motion.div>
        
      </div>
    </div>
  );
};