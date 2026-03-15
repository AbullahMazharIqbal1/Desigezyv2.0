export default function Hero() {
  return (
    // We use pt-[200px] to clear the global Navbar, and pb-[60px] to give it breathing room before the form
    <section className="bg-[#0C0C0C] pt-[200px] pb-[60px] w-full">
      <div className="max-w-[1120px] mx-auto px-6 flex flex-col gap-4">
        
        {/* Main Heading */}
        <h1 
          className="text-[#F6F2E7] w-full md:max-w-[775px]"
          style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 700, fontSize: 'clamp(50px, 6vw, 82.26px)', lineHeight: '98%' }}
        >
          Let’s Discuss Your<br /><span className="text-[#BCFF03]">Next Project</span>!
        </h1>
        
        {/* Subtitle */}
        <p 
          className="text-[#F6F2E7]"
          style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500, fontSize: '19.42px', lineHeight: '113%' }}
        >
          Got project details ready? Fill out a short form
        </p>
        
      </div>
    </section>
  );
}