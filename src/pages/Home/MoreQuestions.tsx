export default function MoreQuestions() {
  return (
    <section className="w-full bg-[#F6F2E7] py-[70px] flex items-center justify-center">
      <div className="max-w-[1120px] mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Headline */}
        <h2 
          className="text-[#0C0C0C] w-full md:w-[477px]"
          style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 700, fontSize: 'clamp(40px, 6vw, 82.26px)', lineHeight: '82%' }}
        >
          Have More Questions?
        </h2>
        
        {/* Right Text & Button */}
        <div className="flex flex-col gap-[30px] w-full md:w-[476px]">
          <p 
            className="text-[#000000]"
            style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500, fontSize: '24px', lineHeight: '115%' }}
          >
            Our team is available 24/7 with responses in 10-15 minutes or less.
          </p>
          <button 
            className="bg-[#0C0C0C] text-[#BCFF03] flex items-center justify-center rounded-[3px] w-fit px-[28px] py-[7px] hover:scale-105 transition-transform"
            style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 500, fontSize: '16px', lineHeight: '20px' }}
          >
            Send us a message!
          </button>
        </div>
        
      </div>
    </section>
  );
}