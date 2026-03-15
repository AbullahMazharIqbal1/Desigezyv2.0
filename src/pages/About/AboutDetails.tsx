import { motion } from 'motion/react';

export default function AboutDetails() {
  const sections = [
    {
      id: 1,
      title: "Who we are?",
      text: "We are a creative graphic design agency focused on helping brands communicate clearly and stand out in a crowded market. Our goal is simple: to turn ideas into visuals that feel premium, consistent, and memorable. Whether you are a startup building your identity from scratch or an established business looking to refresh your brand, we bring creativity, clarity, and attention to detail into every project.",
      imageRight: true, // Image on the right, Text on the left
      imgPlaceholder: "https://picsum.photos/seed/about1/800/600"
    },
    {
      id: 2,
      title: "Our story?",
      text: "Our agency started with one simple belief: good design should do more than just look attractive. It should tell a story, build trust, and make a brand feel more valuable. What began as a passion for creative work grew into a design agency dedicated to helping businesses present themselves with confidence. Over time, we have worked on a wide range of visual projects, always with the same focus, clean design, strong communication, and results that make a real difference.",
      imageRight: false, // Image on the left, Text on the right
      imgPlaceholder: "https://picsum.photos/seed/about2/800/600"
    },
    {
      id: 3,
      title: "What we do?",
      // For this one, I split the text into an array so we can render the list cleanly!
      text: "We provide creative design solutions for businesses that want to look more polished, more consistent, and more professional. Our services include:",
      list: [
        "Logo Design",
        "Brand Identity Design",
        "Social Media Creatives",
        "Marketing Materials",
        "Print Design",
        "Website & Digital Visuals"
      ],
      footerText: "Every project is approached with both creativity and purpose, so the final design aligns with your brand, your audience, and your goals.",
      imageRight: true,
      imgPlaceholder: "https://picsum.photos/seed/about3/800/600"
    }
  ];

  return (
    <section className="bg-[#0C0C0C] py-[100px] w-full overflow-hidden">
      <div className="max-w-[1120px] mx-auto px-6 flex flex-col gap-[120px]">
        
        {sections.map((section, index) => (
          <div 
            key={section.id} 
            // This flex-row-reverse logic handles the "Zig-Zag" automatically!
            className={`flex flex-col gap-12 lg:gap-[100px] items-center ${
              section.imageRight ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            
            {/* Text Column */}
            <motion.div 
              initial={{ opacity: 0, x: section.imageRight ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="w-full md:w-[456px] flex flex-col"
            >
              <h2 
                className="text-[#F6F2E7] mb-6"
                style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 600, fontSize: 'clamp(40px, 5vw, 52px)', lineHeight: '110%' }}
              >
                {section.title}
              </h2>
              
              <p 
                className="text-[#F6F2E7]"
                style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 400, fontSize: '18px', lineHeight: '150%' }}
              >
                {section.text}
              </p>

              {/* Render the bulleted list specifically for the "What we do?" section */}
              {section.list && (
                <ul className="text-[#BCFF03] mt-4 mb-4 flex flex-col gap-1 ml-4 list-disc" style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500, fontSize: '18px' }}>
                  {section.list.map((item, i) => (
                    <li key={i}>
                      <span className="text-[#F6F2E7]">{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Render the footer text for the "What we do?" section */}
              {section.footerText && (
                <p 
                  className="text-[#F6F2E7]"
                  style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 400, fontSize: '18px', lineHeight: '150%' }}
                >
                  {section.footerText}
                </p>
              )}
            </motion.div>

            {/* Image Column */}
            <motion.div 
              initial={{ opacity: 0, x: section.imageRight ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              // Dimensions mapped directly from your Figma: 544px width, 294px height
              className="w-full md:w-[544px] h-[294px] bg-[#171717] rounded-[3px] overflow-hidden shrink-0 shadow-2xl"
            >
              <img 
                src={section.imgPlaceholder} 
                alt={section.title} 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>

          </div>
        ))}

      </div>
    </section>
  );
}