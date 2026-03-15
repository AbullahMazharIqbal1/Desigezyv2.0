import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
 // <--- Import our new clean component!
import ProjectModal, { Project } from './ProjectModal';

export default function PortfolioGrid() {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const filters = [
    "Logo Design", 
    "Logo & Branding", 
    "Print Designs", 
    "Social Media Design", 
    "Brand Identity"
  ];
const projects: Project[] = [
    { 
      id: 1, name: "Neon Surge", type: "Logo Design", img: "https://picsum.photos/seed/p1/800/800", 
      fullImages: ["https://picsum.photos/seed/p1a/1920/1080","https://picsum.photos/seed/p1c/1920/1080", "https://picsum.photos/seed/p1b/1920/1080", "https://picsum.photos/seed/p1c/1920/1080","https://picsum.photos/seed/p1c/1920/1080"] 
    },
    { 
      id: 2, name: "Aura Skincare", type: "Brand Identity", img: "https://picsum.photos/seed/p2/800/800", 
      fullImages: ["https://picsum.photos/seed/p2a/1920/1080", "https://picsum.photos/seed/p2b/1920/1080"] 
    },
    { 
      id: 3, name: "TechNova", type: "Logo & Branding", img: "https://picsum.photos/seed/p3/800/800", 
      fullImages: ["https://picsum.photos/seed/p3a/1920/1080", "https://picsum.photos/seed/p3b/1920/1080", "https://picsum.photos/seed/p3c/1920/1080"] 
    },
    { 
      id: 4, name: "Urban Threads", type: "Print Designs", img: "https://picsum.photos/seed/p4/800/800", 
      fullImages: ["https://picsum.photos/seed/p4a/1920/1080", "https://picsum.photos/seed/p4b/1920/1080"] 
    },
    // Add fullImages arrays to the rest of your dummy projects as needed!
  ];
  const toggleFilter = (clickedFilter: string) => {
    if (activeFilters.includes(clickedFilter)) {
      setActiveFilters(activeFilters.filter(f => f !== clickedFilter));
    } else {
      setActiveFilters([...activeFilters, clickedFilter]);
    }
  };

  const filteredProjects = activeFilters.length === 0 
    ? projects 
    : projects.filter(project => activeFilters.includes(project.type));

  return (
    <section className="w-full bg-[#0C0C0C] pb-[120px] px-6">
      <div className="max-w-[1120px] mx-auto">
        
        {/* FILTER BAR */}
        <div className="flex flex-wrap items-center justify-center gap-[8px] mb-[80px]">
          {filters.map((filter) => {
            const isActive = activeFilters.includes(filter);
            return (
              <button
                key={filter}
                onClick={() => toggleFilter(filter)}
                className={`px-[14px] py-[7px] rounded-[3px] transition-all duration-300 border ${
                  isActive ? 'bg-[#BCFF03] text-[#0C0C0C] border-[#BCFF03]' : 'bg-transparent text-[#F6F2E7] border-[#BCFF03] hover:bg-[#BCFF03]/10'
                }`}
                style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 500, fontSize: '16px', lineHeight: '20px' }}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* PORTFOLIO GRID */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer flex flex-col"
              >
                <div className="w-full aspect-[4/3] bg-[#171717] overflow-hidden mb-5 relative rounded-[3px]">
                  <img src={project.img} alt={project.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-[#0C0C0C]/40 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                </div>
                
                <div className="flex flex-col gap-1">
                  <h3 className="text-[#BCFF03] transition-colors" style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 600, fontSize: '24px', lineHeight: '120%' }}>{project.name}</h3>
                  <p className="text-[#F6F2E7]/70" style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500, fontSize: '16px', lineHeight: '120%' }}>{project.type}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="w-full text-center py-20 text-[#F6F2E7]/50" style={{ fontFamily: "'Satoshi', sans-serif" }}>
            No projects found for this combination.
          </div>
        )}

        {/* RENDER THE CLEAN MODAL COMPONENT */}
        <AnimatePresence>
          {selectedProject && (
            <ProjectModal 
              project={selectedProject} 
              onClose={() => setSelectedProject(null)} 
            />
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}