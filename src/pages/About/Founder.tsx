import { motion } from 'motion/react';

export default function Founder() {
  const socials = [
    { name: "INSTAGRAM", link: "#" },
    { name: "FACEBOOK", link: "#" },
    { name: "LINKEDIN", link: "#" },
    { name: "TWITTER", link: "#" },
  ];

  return (
    <section className="bg-[#0C0C0C] py-[120px] w-full overflow-hidden">
      <div className="max-w-[1120px] mx-auto px-6">
        
        {/* --- SECTION HEADER --- */}
        <div className="text-center mb-[100px]">
          <h2 
            className="text-[#F6F2E7] mb-2"
            style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 700, fontSize: 'clamp(50px, 6vw, 82.26px)', lineHeight: '100%' }}
          >
            Meet the <span className="text-[#BCFF03]">Founder</span>!
          </h2>
          <p 
            className="text-[#FFFFFF]"
            style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 700, fontSize: 'clamp(24px, 4vw, 31.42px)', lineHeight: '111%' }}
          >
            Hello there
          </p>
        </div>

        {/* --- FOUNDER CONTENT --- */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 lg:gap-[34px]">
          
          {/* Left Side: Image (550x550 exactly as per Figma) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full max-w-[550px] aspect-square bg-[#171717] rounded-[3px] overflow-hidden shrink-0 shadow-2xl"
          >
            <img 
              src="/aafaq.png" 
              alt="Aafaq Ahmad" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
            />
          </motion.div>

          {/* Right Side: Details */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col w-full md:max-w-[448px] py-4"
          >
            {/* Massive 3-Line Name */}
            <h3 
              className="text-[#F6F2E7] mb-8"
              style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 700, fontSize: 'clamp(50px, 6vw, 82.26px)', lineHeight: '100%' }}
            >
              I’m<br />Aafaq<br />Ahmad<span className="text-[#BCFF03]">*</span>
            </h3>
            
            {/* Bio Paragraph (Highlighted in #BCFF03) */}
            <p 
              className="text-[#F6F2E7] mb-8"
              style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 400, fontSize: '20px', lineHeight: '125%' }}
            >
              <span className="text-[#BCFF03]">Aafaq</span> is a logo and brand identity designer focused on building visual systems that reflect a company’s personality and values. His work includes designing logos that serve as recognizable brand marks, along with shaping a complete brand identity through carefully chosen colors, typography, and other visual elements that create a consistent and professional look.
            </p>

            {/* Social Links */}
            <div className="flex flex-col gap-[8px]">
              <p 
                className="text-[#BCFF03]"
                style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 400, fontSize: '20px', lineHeight: '125%' }}
              >
                Follow me:
              </p>
              <div className="flex flex-wrap items-center gap-x-[24px] gap-y-2">
                {socials.map((social) => (
                  <a 
                    key={social.name} 
                    href={social.link}
                    className="text-[#F6F2E7] hover:text-[#BCFF03] transition-colors"
                    style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 700, fontSize: '18px', lineHeight: '125%' }}
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}