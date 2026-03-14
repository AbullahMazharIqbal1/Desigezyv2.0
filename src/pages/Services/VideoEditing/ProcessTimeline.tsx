import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const steps = [
    { id: 1, title: "Discovery" },
    { id: 2, title: "Concept" },
    { id: 3, title: "Discovery" },
    { id: 4, title: "Concept" },
    { id: 5, title: "Discovery" },
    { id: 6, title: "Concept" },
  ];

  const dummyText = "We start with a briefing to define the requirements and goals. Then we determine the best approach, timeline, and budget, as these factors shape the pricing and direction. From there, we craft something great while ensuring every step aligns with your vision.";

  return (
    <section ref={containerRef} className="bg-[#0C0C0C] py-[100px] relative overflow-hidden">
      
      <div className="max-w-[1120px] mx-auto px-6 relative">
        
        {/* --- THE MIDDLE TRACK --- */}
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[4px] bg-[#171717] hidden md:block" />
        
        <motion.div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[4px] bg-[#F6F2E7] hidden md:block z-10"
          style={{ height: lineHeight }}
        >
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[16px] h-[16px] bg-[#F6F2E7] rounded-full shadow-[0_0_15px_#F6F2E7]" />
        </motion.div>

        {/* --- THE TIMELINE ITEMS --- */}
        <div className="flex flex-col gap-[120px]">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;

            return (
              <div key={step.id} className="relative flex flex-col md:flex-row items-start justify-between w-full group pt-4">
                
                {/* Center Tracking Dot - Viewport Fixed! */}
                <motion.div 
                  initial={{ scale: 0, backgroundColor: "#171717" }}
                  whileInView={{ scale: 1, backgroundColor: "#F6F2E7" }}
                  transition={{ duration: 0.3 }}
                  viewport={{ margin: "1000px 0px -50% 0px" }} 
                  className="absolute top-6 left-1/2 -translate-x-1/2 w-[16px] h-[16px] rounded-full z-20 hidden md:block border-[3px] border-[#0C0C0C] transition-colors duration-300"
                />

                {/* LEFT COLUMN - Viewport Fixed! */}
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  viewport={{ margin: "1000px 0px -50% 0px" }}
                  className={`w-full md:w-[448px] flex flex-col ${isEven ? 'md:items-end text-right' : 'md:items-start text-left order-last md:order-none'}`}
                >
                  {isEven ? (
                    <h3 
                      className="text-[#F6F2E7]"
                      style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 600, fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: '82%' }}
                    >
                      {step.title}
                    </h3>
                  ) : (
                    <>
                      <p 
                        className="text-[#F6F2E7]"
                        style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500, fontSize: '24px', lineHeight: '120%' }}
                      >
                        {dummyText}
                      </p>
                      <div className="w-full h-[485px] bg-[#171717] rounded-[3px] overflow-hidden mt-8">
                        <img src={`https://picsum.photos/seed/processL${step.id}/800/800`} alt="Process" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                      </div>
                    </>
                  )}
                </motion.div>

                {/* RIGHT COLUMN - Viewport Fixed! */}
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  viewport={{ margin: "1000px 0px -50% 0px" }}
                  className="w-full md:w-[448px] flex flex-col items-start text-left"
                >
                  {!isEven ? (
                    <h3 
                      className="text-[#F6F2E7] mt-12 md:mt-0"
                      style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 600, fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: '82%' }}
                    >
                      {step.title}
                    </h3>
                  ) : (
                    <>
                      <p 
                        className="text-[#F6F2E7] mt-8 md:mt-0"
                        style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500, fontSize: '24px', lineHeight: '120%' }}
                      >
                        {dummyText}
                      </p>
                      <div className="w-full h-[485px] bg-[#171717] rounded-[3px] overflow-hidden mt-8">
                        <img src={`https://picsum.photos/seed/processR${step.id}/800/800`} alt="Process" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                      </div>
                    </>
                  )}
                </motion.div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}