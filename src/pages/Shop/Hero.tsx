export default function Hero() {
  return (
    <section className="bg-[#0C0C0C] pt-[200px] pb-[80px] w-full flex flex-col items-center justify-center px-6">
      
      {/* Container restricted to 956px exactly per your Figma CSS */}
      <div className="flex flex-col items-center text-center gap-7 max-w-[956px]">
        
        {/* Main Title */}
        <h1 
          className="text-[#F6F2E7]"
          style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 700, fontSize: 'clamp(44px, 6vw, 82.26px)', lineHeight: '98%' }}
        >
          Design Like a Pro With <br className="hidden md:block" />
          <span className="text-[#BCFF03]">Premium Design Tools!</span>
        </h1>
        
        {/* Subtitle */}
        <p 
          className="text-[#F6F2E7] max-w-[676px]"
          style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500, fontSize: 'clamp(16px, 3vw, 19.42px)', lineHeight: '113%' }}
        >
          This collection of design tools helps you save time, grow your design business 
          and give you the freedom to focus on the creative work you love.
        </p>

      </div>
      
    </section>
  );
}