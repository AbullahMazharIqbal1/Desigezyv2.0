import { motion } from 'motion/react';

export default function WhyDesigneezy() {
  const gridItems = [
    { id: 1, spanClass: "md:col-span-1 md:row-span-1" },
    { id: 2, spanClass: "md:col-span-1 md:row-span-1" },
    { id: 3, spanClass: "md:col-span-1 md:row-span-2" }, 
    { id: 4, spanClass: "md:col-span-1 md:row-span-1" },
    { id: 5, spanClass: "md:col-span-1 md:row-span-1" },
  ];

  return (
    <section className="py-[120px] bg-[#F6F2E7]">
      <div className="max-w-[1120px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-[80px]">
          <h2 
            className="text-[#0C0C0C] mb-4"
            style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 700, fontSize: '82.26px', lineHeight: '82%' }}
          >
            Why Designeezy!
          </h2>
          <p 
            className="text-[#0C0C0C]"
            style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500, fontSize: '19.42px', lineHeight: '82%' }}
          >
            Fixed Pricing, premium output, and consistent design across everything.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px] auto-rows-[217px]">
          {gridItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`bg-[#171717] rounded-[3px] overflow-hidden relative group cursor-pointer transition-all duration-500 hover:-translate-y-2 ${item.spanClass}`}
            >
              {/* IMAGE: Original color with zoom  */}
              <img 
                src={`https://picsum.photos/seed/why${item.id}/800/800`} 
                alt="Why Us" 
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ease-in-out"
                referrerPolicy="no-referrer"
              />
              
              <div className="absolute inset-0 bg-[#0C0C0C]/5 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />

              {/* --- HIGH-INTENSITY EDGE SPLASH --- */}
              {/* Top Edge: Increased to 4px with drop-shadow glow  */}
              <div className="absolute top-0 left-0 w-full h-[4px] bg-[#BCFF03] -translate-x-full group-hover:animate-edge-top z-30 shadow-[0_0_15px_#BCFF03]" />
              
              {/* Right Edge */}
              <div className="absolute top-0 right-0 h-full w-[4px] bg-[#BCFF03] -translate-y-full group-hover:animate-edge-right z-30 shadow-[0_0_15px_#BCFF03]" />
              
              {/* Bottom Edge */}
              <div className="absolute bottom-0 right-0 w-full h-[4px] bg-[#BCFF03] translate-x-full group-hover:animate-edge-bottom z-30 shadow-[0_0_15px_#BCFF03]" />
              
              {/* Left Edge */}
              <div className="absolute top-0 left-0 h-full w-[4px] bg-[#BCFF03] translate-y-full group-hover:animate-edge-left z-30 shadow-[0_0_15px_#BCFF03]" />

            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes edge-top {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes edge-right {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        @keyframes edge-bottom {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes edge-left {
          0% { transform: translateY(100%); }
          100% { transform: translateY(-100%); }
        }
        
        /* High-speed intensity triggers */
        .group:hover .group-hover\\:animate-edge-top { animation: edge-top 0.3s linear forwards; }
        .group:hover .group-hover\\:animate-edge-right { animation: edge-right 0.3s linear 0.1s forwards; }
        .group:hover .group-hover\\:animate-edge-bottom { animation: edge-bottom 0.3s linear 0.2s forwards; }
        .group:hover .group-hover\\:animate-edge-left { animation: edge-left 0.3s linear 0.3s forwards; }
      `}</style>
    </section>
  );
}