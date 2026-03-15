import { useEffect } from 'react';
import { motion } from 'motion/react';
import { X } from 'lucide-react';

export interface Project {
  id: number;
  name: string;
  type: string;
  img: string;
  fullImages: string[]; 
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  
  // Lock the background page from scrolling
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      // REDUCED BLUR AND OPACITY HERE: 70% opacity and medium blur
      className="fixed inset-0 z-50 bg-[#0C0C0C]/70 backdrop-blur-md overflow-y-auto"
    >
      {/* Fixed Close Button */}
      <button 
        onClick={onClose}
        className="fixed top-6 right-6 md:top-10 md:right-10 z-[60] bg-[#171717] hover:bg-[#BCFF03] text-[#F6F2E7] hover:text-[#0C0C0C] p-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
      >
        <X size={28} strokeWidth={2.5} />
      </button>

      {/* Main Content Wrapper */}
      <div className="max-w-[1000px] mx-auto px-6 py-[80px] md:py-[120px] flex flex-col items-center">
        
        {/* Project Header */}
        <div className="text-center mb-[60px]">
          <h2 
            className="text-[#BCFF03] mb-4"
            style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 700, fontSize: 'clamp(40px, 6vw, 64px)', lineHeight: '100%' }}
          >
            {project.name}
          </h2>
          <p 
            className="text-[#F6F2E7]"
            style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500, fontSize: '24px', lineHeight: '120%' }}
          >
            {project.type}
          </p>
        </div>

        {/* 16:9 Scrolling Image Gallery */}
        <div className="w-full flex flex-col gap-[40px] md:gap-[80px]">
          {project.fullImages.map((image, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="w-full aspect-video bg-[#171717] rounded-[3px] overflow-hidden shadow-2xl"
            >
              <img 
                src={image} 
                alt={`${project.name} preview ${index + 1}`} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </motion.div>
  );
}