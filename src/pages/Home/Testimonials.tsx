import React from 'react';
import { motion } from 'motion/react';

// 1. Define exactly what data a Review holds so TypeScript is happy
interface Review {
  name: string;
  role: string;
  text: string;
}

export default function Testimonials() {
  const reviews: Review[] = [
    { 
      name: "Faiz Ahmad", 
      role: "Branding & Social Media Designs", 
      text: "Great experience with designeezy agency. Provided exactly what I was looking for, high-quality designs delivered on time." 
    },
    { 
      name: "Umair Nadeem", 
      role: "Logo Design", 
      text: "The logo exceeded my expectations. The team understood our brand and delivered exact what we wanted." 
    },
    { 
      name: "Hammad Munir", 
      role: "Social Media Designs", 
      text: "Fantastic experience with designeezy from start to finish. The team worked closely with me to create designs that stand out." 
    }
  ];

  const scrollItems = [...reviews, ...reviews, ...reviews, ...reviews];

  return (
    <section className="py-[70px] bg-[#0C0C0C] overflow-hidden">
      
      {/* Section Header */}
      <div className="max-w-[1120px] mx-auto px-6 mb-[80px] text-center">
        <h2 
          className="text-[#F6F2E7] mb-4"
          style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 700, fontSize: '82.26px', lineHeight: '82%' }}
        >
          See What Our <br /><span className="text-[#BCFF03]">Client Says</span>!
        </h2>
        <p 
          className="text-[#F6F2E7]"
          style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500, fontSize: '19.42px', lineHeight: '82%' }}
        >
          Real feedback from clients who loved the clarity and quality.
        </p>
      </div>

      {/* Sliders Container */}
      <div className="flex flex-col gap-[32px]">
        
        {/* ROW 1: Moving Left */}
        <div className="flex w-full relative">
          <motion.div 
            className="flex gap-[32px] w-max px-[16px]"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {scrollItems.map((rev, i) => (
              <TestimonialCard key={`row1-${i}`} review={rev} />
            ))}
          </motion.div>
        </div>

        {/* ROW 2: Moving Right */}
        <div className="flex w-full relative">
          <motion.div 
            className="flex gap-[32px] w-max px-[16px]"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {scrollItems.map((rev, i) => (
              <TestimonialCard key={`row2-${i}`} review={rev} />
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}

// 2. Wrap the component in React.FC so it automatically accepts the 'key' prop!
const TestimonialCard: React.FC<{ review: Review }> = ({ review }) => {
  return (
    <div className="w-[352px] h-[171px] bg-[#171717] rounded-[3px] p-[24px] relative shrink-0 border border-transparent hover:border-[#BCFF03]/30 transition-colors group cursor-default">
      
      {/* Big Quote Mark */}
      <div 
        className="absolute top-[20px] right-[24px] text-[#BCFF03] opacity-30 group-hover:opacity-100 transition-opacity duration-300"
        style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 500, fontSize: '50px', lineHeight: '82%' }}
      >
        “
      </div>

      {/* Client Name */}
      <h4 
        className="text-[#BCFF03] mb-[6px]"
        style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 500, fontSize: '24px', lineHeight: '82%' }}
      >
        {review.name}
      </h4>

      {/* Client Role */}
      <p 
        className="text-[#F6F2E7] mb-[20px]"
        style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 400, fontSize: '10px', lineHeight: '82%' }}
      >
        {review.role}
      </p>

      {/* Testimonial Text */}
      <p 
        className="text-[#F6F2E7]"
        style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 400, fontSize: '12px', lineHeight: '13px' }}
      >
        {review.text}
      </p>

    </div>
  );
};