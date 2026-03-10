export default function CTA() {
  return (
    <section className="w-full bg-[#F6F2E7] min-h-[410px] flex flex-col items-center justify-center px-6 text-center">
      
      <p 
        className="text-[#0C0C0C] mb-6"
        style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 700, fontSize: '36px', lineHeight: '82%' }}
      >
        Get in touch
      </p>
      
      <h2 
        className="text-[#0C0C0C] max-w-[775px] mb-12"
        style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 700, fontSize: 'clamp(50px, 6vw, 82.26px)', lineHeight: '82%' }}
      >
        Let’s Discuss Your Great Project!
      </h2>
      
      <button 
        className="bg-[#0C0C0C] text-[#BCFF03] flex items-center justify-center rounded-[3px] w-[213px] h-[44px] hover:scale-105 transition-transform mx-auto"
        style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 500, fontSize: '24px', lineHeight: '30px' }}
      >
        Contact Us →
      </button>

    </section>
  );
}