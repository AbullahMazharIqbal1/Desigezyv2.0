import { motion } from 'motion/react';

export default function FeaturedWork() {
  const projects = [
    { name: "Project Name", type: "Project Type", img: "https://picsum.photos/seed/p1/800/600" },
    { name: "Project Name", type: "Project Type", img: "https://picsum.photos/seed/p2/800/600" },
    { name: "Project Name", type: "Project Type", img: "https://picsum.photos/seed/p3/800/600" },
    { name: "Project Name", type: "Project Type", img: "https://picsum.photos/seed/p4/800/600" },
    { name: "Project Name", type: "Project Type", img: "https://picsum.photos/seed/p5/800/600" },
    { name: "Project Name", type: "Project Type", img: "https://picsum.photos/seed/p6/800/600" },
  ];

  return (
   <section id="portfolio" className="pt-10 pb-32 bg-[#0C0C0C]">
      <div className="max-w-[1120px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-[70px]">
          <h2 
            className="text-[#F6F2E7] mb-4"
            style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 700, fontSize: '82.26px', lineHeight: '82%' }}
          >
            Featured <span className="text-[#BCFF03]">Work</span>!
          </h2>
          <p 
            className="text-[#F6F2E7]"
            style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500, fontSize: '19.42px', lineHeight: '82%' }}
          >
            Recent highlights, clean and results-driven work.
          </p>
        </div>

        {/* Portfolio Grid (2 Columns, 32px gap to match 544px boxes in 1120px container) */}
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-20">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.1 }}
              className="group cursor-pointer flex flex-col"
            >
              {/* Image Box (Figma: 544px x 336px, bg: #171717) */}
              <div className="w-full h-[336px] bg-[#171717] overflow-hidden mb-4 relative">
                <img 
                  src={project.img} 
                  alt={project.name} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Project Text */}
              <div className="flex flex-col gap-1">
                <h3 
                  className="text-[#BCFF03]"
                  style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 600, fontSize: '31.42px', lineHeight: '39px' }}
                >
                  {project.name}
                </h3>
                <p 
                  className="text-[#F6F2E7]"
                  style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 400, fontSize: '19.42px', lineHeight: '26px' }}
                >
                  {project.type}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Buttons */}
        <div className="flex flex-wrap justify-center gap-6 mt-[100px]">
          {/* Button 1 */}
          <button 
            className="bg-[#BCFF03] text-[#0C0C0C] flex items-center justify-center rounded-[3px] w-[193px] h-[34px] hover:scale-105 transition-transform"
            style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 500, fontSize: '16px', lineHeight: '20px' }}
          >
            View Full Portfolio
          </button>
          
          {/* Button 2 */}
          <button 
            className="border border-[#F6F2E7] text-[#BCFF03] flex items-center justify-center rounded-[3px] w-[192px] h-[34px] hover:bg-[#F6F2E7]/10 transition-colors"
            style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 500, fontSize: '16px', lineHeight: '20px' }}
          >
            Let's Work Together!
          </button>
        </div>

      </div>
    </section>
  );
}