import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Split into exact Left and Right columns based on your Figma design
  const leftFaqs = [
    { id: 0, q: "What services do you offer?", a: "We offer Graphic Design, Video Editing, and Web Development services tailored to your brand's needs." },
    { id: 1, q: "How do I get started?", a: "Simply click 'Let's Work Together' and fill out the form. We'll get back to you within 24 hours." },
    { id: 2, q: "Do you offer fixed pricing?", a: "Yes, we provide transparent, fixed pricing for most of our standard service packages." },
    { id: 3, q: "What’s your typical process?", a: "Our process involves Briefing, Strategy, Design, Feedback, and Final Delivery." },
    { id: 4, q: "How long does a project take?", a: "Timeline varies by project scope, but standard designs usually take 3-7 business days." },
    { id: 5, q: "How many revisions do I get?", a: "We offer unlimited revisions until you are 100% satisfied with the final result." },
  ];

  const rightFaqs = [
    { id: 6, q: "What do you need from me to begin?", a: "We need your brand guidelines, project goals, and any specific assets you want included." },
    { id: 7, q: "Will I receive the source/editable files?", a: "Yes, all our packages include high-quality source files (AI, PSD, Figma, etc.)." },
    { id: 8, q: "What’s your pricing structure?", a: "We offer flat-rate project pricing or a monthly subscription model depending on your continuous needs." },
    { id: 9, q: "How do we communicate during project?", a: "We primarily use Slack, email, and scheduled Zoom calls to keep you updated every step of the way." },
    { id: 10, q: "What happens if I do not like the design?", a: "We collaborate closely to ensure alignment, but if it misses the mark, we pivot and revise based on your direct feedback." },
    { id: 11, q: "Can you redesign or improve the brands?", a: "Absolutely! Brand refreshes and redesigns are a core part of our graphic design services." },
  ];

  // Helper function to render a single FAQ item to keep code clean
  const renderFaq = (faq: { id: number, q: string, a: string }) => (
    <div 
      key={faq.id} 
      className="bg-[#171717] rounded-[3px] overflow-hidden transition-colors border border-transparent hover:border-[#BCFF03]/30"
    >
      <button
        onClick={() => setOpenIndex(openIndex === faq.id ? null : faq.id)}
        className="w-full min-h-[60px] px-[24px] py-[10px] flex items-center justify-between text-left group"
      >
        <span 
          className={`transition-colors duration-300 ${openIndex === faq.id ? 'text-[#BCFF03]' : 'text-[#F6F2E7] group-hover:text-[#BCFF03]'}`}
          style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 500, fontSize: '21px', lineHeight: '110%' }}
        >
          {faq.q}
        </span>
        
        <ChevronDown 
          className={`text-[#F6F2E7] transition-transform duration-300 shrink-0 ml-4 ${openIndex === faq.id ? 'rotate-180 text-[#BCFF03]' : ''}`} 
          size={20} 
          strokeWidth={2.5}
        />
      </button>
      
      <AnimatePresence>
        {openIndex === faq.id && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p 
              className="px-[24px] pb-[20px] pt-[10px] text-[#F6F2E7]/70"
              style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 400, fontSize: '16px', lineHeight: '150%' }}
            >
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <section className="py-[70px] bg-[#0C0C0C]">
      <div className="max-w-[1120px] mx-auto px-6">
        
        <div className="text-center mb-[80px]">
          <h2 
            className="text-[#F6F2E7] mb-4"
            style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 700, fontSize: '82.26px', lineHeight: '82%' }}
          >
            FAQ'<span className="text-[#BCFF03]">s</span>!
          </h2>
          <p 
            className="text-[#F6F2E7]"
            style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500, fontSize: '19.42px', lineHeight: '82%' }}
          >
            Quick answers to the most common questions before you start.
          </p>
        </div>

        {/* 2-Column Independent Grid */}
        <div className="grid md:grid-cols-2 gap-[32px] items-start">
          
          {/* Left Column (Only pushes itself down) */}
          <div className="flex flex-col gap-[32px]">
            {leftFaqs.map(renderFaq)}
          </div>

          {/* Right Column (Only pushes itself down) */}
          <div className="flex flex-col gap-[32px]">
            {rightFaqs.map(renderFaq)}
          </div>

        </div>

        

      </div>
    </section>
  );
}