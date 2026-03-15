export default function Hero() {
  return (
    // We add generous top padding (pt-[200px]) to push it cleanly below your global Navbar
    <section className="w-full bg-[#0C0C0C] pt-[200px] pb-[40px] flex flex-col items-center justify-center px-6">
      
      <div className="flex flex-col items-center text-center gap-[14px] max-w-[600px]">
        {/* Main Title */}
        <h1 
          className="text-[#F6F2E7]"
          style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 700, fontSize: 'clamp(50px, 6vw, 82.26px)', lineHeight: '82%' }}
        >
          Our <span className="text-[#BCFF03]">Work</span>!
        </h1>
        
        {/* Subtitle */}
        <p 
          className="text-[#F6F2E7]"
          style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500, fontSize: 'clamp(16px, 3vw, 19.42px)', lineHeight: '82%' }}
        >
          Recent highlights, clean and results-driven work.
        </p>
      </div>

    </section>
  );
}