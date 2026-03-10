import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      title: "01. Graphic Designing",
      tags: ["Logo Design", "Brand Identity", "Brand Guidelines", "Print Media Designs", "Digital Media Designs", "Packaging & Label", "Social Media Posts", "Ad Creatives", "Stationery Design", "Flyer, Brochure Designs"],
      button: "Graphic Design Services"
    },
    {
      id: 1,
      title: "02. Video Editing",
      tags: ["Cashcow Video", "Long-Form", "Shorts/Reels", "Motion Graphics", "Animation", "Vlogs Editing", "Faceless Video", "Ad Creatives", "UGC Video", "Educational Videos", "Testimonial Videos"],
      button: "Video Editing Services"
    },
    {
      id: 2,
      title: "03. Web Development",
      tags: ["UI/UX Design", "Responsive Web", "E-commerce", "Custom CMS", "Landing Pages", "Web Applications", "SEO Optimization", "Maintenance"],
      button: "Web Development Services"
    }
  ];

  return (
    <section id="services" className="py-10 bg-[#F6F2E7]">
      <div className="max-w-[1120px] mx-auto px-6">

        {/* Section Header - Gap Reduced here (mb-[50px] instead of mb-[100px]) */}
        <div className="text-center mb-[50px]">
          <h2
            className="text-[#0C0C0C] mb-6"
            style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 700, fontSize: '82.26px', lineHeight: '82%' }}
          >
            Our Services!
          </h2>
          <p
            className="text-[#0C0C0C]"
            style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500, fontSize: '19.42px', lineHeight: '82%' }}
          >
            Elevate your brand with our professional services.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center">

          {/* Left Column: Interactive Tabs */}
          <div className="flex flex-col gap-10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full text-left transition-all duration-500 flex items-center ${activeTab === tab.id
                    ? 'text-[#0C0C0C] md:translate-x-6'
                    : 'text-[#808080] hover:text-[#0C0C0C]/60'
                  }`}
                style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 700, fontSize: '31.42px', lineHeight: '82%' }}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Right Column: Tags & Button Container */}
          <div className="min-h-[350px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="w-full"
              >
                {/* Interactive Service Tags */}
                <div className="flex flex-wrap gap-[8px] mb-12">
                  {tabs[activeTab].tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-[#0C0C0C] text-[#F6F2E7] px-[16px] py-[7px] rounded-[3px] flex items-center justify-center shadow-md hover:bg-[#BCFF03] hover:text-[#0C0C0C] hover:-translate-y-1 hover:shadow-lg hover:shadow-[#BCFF03]/20 transition-all duration-300 cursor-pointer"
                      style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 500, fontSize: '16px', lineHeight: '20px' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Call to Action Button */}
                <button
                  className="bg-[#BCFF03] text-[#0C0C0C] px-[25px] py-[7px] rounded-[3px] flex items-center gap-2 group hover:scale-105 transition-transform shadow-lg shadow-[#BCFF03]/20"
                  style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 500, fontSize: '16px', lineHeight: '20px' }}
                >
                  {tabs[activeTab].button}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}