export default function ProcessHeading() {
  return (
    <section className="w-full bg-[#0C0C0C] pt-[40px] pb-[40px] px-6 flex justify-center">
      
      {/* Container constrained to exact Figma width (871px) */}
      <div className="max-w-[871px] w-full flex flex-col items-center">
        
        {/* The Process! Heading */}
        <h2 
          className="text-[#F6F2E7] mb-[18px] text-center"
          style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 700, fontSize: 'clamp(50px, 6vw, 82.26px)', lineHeight: '82%' }}
        >
          The <span className="text-[#BCFF03]">Process</span>!
        </h2>

        {/* Subtitle Paragraph */}
        <p 
          className="text-[#F6F2E7] text-center"
          style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500, fontSize: 'clamp(18px, 3vw, 24px)', lineHeight: '120%' }}
        >
          We start with a briefing to define the requirements and goals. Then we determine the best approach, timeline, and budget, as these factors shape the pricing and direction. From there, we craft something great while ensuring every step aligns with your vision.
        </p>
        
      </div>
      
    </section>
  );
}