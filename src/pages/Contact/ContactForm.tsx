import { useState } from 'react';
import { motion } from 'motion/react';

export default function ContactForm() {
  // State for the interactive selection pills
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null);

  const services = [
    "Logo Design", 
    "Logo & Branding", 
    "Social Media Design", 
    "Print Designs", 
    "Video Editing", 
    "Web Development"
  ];

  const budgets = [
    "<10k", 
    "10k-20k", 
    "20k-30k", 
    "30k+"
  ];

  // Logic to toggle multiple services
  const toggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter(s => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  return (
    <section className="bg-[#0C0C0C] pb-[120px] w-full overflow-hidden">
      <div className="max-w-[1120px] mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-16 md:gap-[60px]">
        
        {/* LEFT COLUMN: Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full md:w-[394px] flex flex-col shrink-0"
        >
          <p 
            className="text-[#BCFF03] mb-2"
            style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500, fontSize: '18px', lineHeight: '110%' }}
          >
            Get in touch with us!
          </p>
          <h2 
            className="text-[#F6F2E7]"
            style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 600, fontSize: 'clamp(28px, 4vw, 36px)', lineHeight: '110%' }}
          >
            info@designeezy.com<br />
            +92-313-4733827
          </h2>
        </motion.div>

        {/* RIGHT COLUMN: The Form */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full md:w-[544px] flex flex-col gap-[40px]"
        >
          
          {/* Inputs Section */}
          <div className="flex flex-col gap-[30px]">
            {/* Name Input */}
            <div className="flex flex-col gap-2 relative">
              <label className="text-[#F6F2E7]" style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500, fontSize: '19.42px' }}>Your name *</label>
              <input type="text" placeholder="John Doe" className="bg-transparent border-b border-[#4E4E4E] focus:border-[#BCFF03] outline-none py-2 text-[#4E4E4E] focus:text-[#F6F2E7] transition-colors" style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500, fontSize: '24px' }} />
            </div>

            {/* Email Input */}
            <div className="flex flex-col gap-2 relative">
              <label className="text-[#F6F2E7]" style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500, fontSize: '19.42px' }}>Your email *</label>
              <input type="email" placeholder="john@company.com" className="bg-transparent border-b border-[#4E4E4E] focus:border-[#BCFF03] outline-none py-2 text-[#4E4E4E] focus:text-[#F6F2E7] transition-colors" style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500, fontSize: '24px' }} />
            </div>

            {/* Phone Input */}
            <div className="flex flex-col gap-2 relative">
              <label className="text-[#F6F2E7]" style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500, fontSize: '19.42px' }}>Phone/WhatsApp (optional)</label>
              <input type="tel" placeholder="+92-123-4567890" className="bg-transparent border-b border-[#4E4E4E] focus:border-[#BCFF03] outline-none py-2 text-[#4E4E4E] focus:text-[#F6F2E7] transition-colors" style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500, fontSize: '24px' }} />
            </div>
          </div>

          {/* Services Selector */}
          <div className="flex flex-col gap-4">
            <label className="text-[#F6F2E7]" style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500, fontSize: '19.42px' }}>Services you need *</label>
            <div className="flex flex-wrap gap-[8px]">
              {services.map((service) => {
                const isActive = selectedServices.includes(service);
                return (
                  <button
                    key={service}
                    onClick={() => toggleService(service)}
                    className={`px-[14px] py-[7px] rounded-[3px] transition-all duration-300 border ${
                      isActive ? 'bg-[#BCFF03] text-[#0C0C0C] border-[#BCFF03]' : 'bg-transparent text-[#F6F2E7] border-[#BCFF03] hover:bg-[#BCFF03]/10'
                    }`}
                    style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 500, fontSize: '16px' }}
                  >
                    {service}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Budget Selector */}
          <div className="flex flex-col gap-4">
            <label className="text-[#F6F2E7]" style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500, fontSize: '19.42px' }}>Your budget *</label>
            <div className="flex flex-wrap gap-[8px]">
              {budgets.map((budget) => (
                <button
                  key={budget}
                  onClick={() => setSelectedBudget(budget)}
                  className={`px-[14px] py-[7px] rounded-[3px] transition-all duration-300 border ${
                    selectedBudget === budget ? 'bg-[#BCFF03] text-[#0C0C0C] border-[#BCFF03]' : 'bg-transparent text-[#F6F2E7] border-[#BCFF03] hover:bg-[#BCFF03]/10'
                  }`}
                  style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 500, fontSize: '16px' }}
                >
                  {budget}
                </button>
              ))}
            </div>
          </div>

          {/* Project Details Input */}
          <div className="flex flex-col gap-2 relative mt-4">
            <label className="text-[#F6F2E7]" style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500, fontSize: '19.42px' }}>Project details</label>
            <textarea 
              placeholder="Tell us about your project" 
              rows={1}
              className="bg-transparent border-b border-[#4E4E4E] focus:border-[#BCFF03] outline-none py-2 text-[#4E4E4E] focus:text-[#F6F2E7] transition-colors resize-none overflow-hidden" 
              style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500, fontSize: '24px' }} 
              onInput={(e) => {
                const target = e.target as HTMLTextAreaElement;
                target.style.height = 'auto';
                target.style.height = `${target.scrollHeight}px`;
              }}
            />
          </div>

          {/* Submit Button */}
          <button 
            className="mt-6 bg-[#BCFF03] text-[#0C0C0C] w-fit px-[14px] py-[7px] rounded-[3px] hover:scale-105 transition-transform flex items-center gap-2"
            style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 500, fontSize: '16px', lineHeight: '20px' }}
          >
            Submit Now →
          </button>

        </motion.div>

      </div>
    </section>
  );
}