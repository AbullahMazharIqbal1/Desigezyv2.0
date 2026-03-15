export default function Hero() {
  return (
    <section className="bg-[#0C0C0C] pt-[200px] pb-[100px] w-full">
      {/* Expanded max-width to 1280px to push the left and right columns further apart */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-start gap-12 md:gap-[100px]">
        
        {/* Left Column: Heading & Subtitle */}
        {/* Added shrink-0 so it claims its full space and stays firmly on the left */}
        <div className="flex flex-col gap-4 w-full md:max-w-[662px] shrink-0">
          <h1 
            className="text-[#F6F2E7]"
            style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 700, fontSize: 'clamp(50px, 6vw, 82.26px)', lineHeight: '100%' }}
          >
            We Are Not<br /><span className="text-[#BCFF03]">Just Designers</span>!
          </h1>
          
          <h2 
            className="text-[#FFFFFF] mt-2 w-full"
            style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 700, fontSize: 'clamp(24px, 4vw, 31.42px)', lineHeight: '111%' }}
          >
            We are creators and problem solvers!
          </h2>
        </div>

        {/* Right Column: Paragraph */}
        {/* Added a slight top margin on desktop if you want it vertically aligned a bit better, and shrink-0 */}
        <div className="flex flex-col w-full md:w-[384px] shrink-0 md:pt-4">
          <p 
            className="text-[#F6F2E7]"
            style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 400, fontSize: '18px', lineHeight: '122%' }}
          >
            At <span className="text-[#BCFF03]">Designeezy</span>, we help businesses build a <br />
             stronger visual presence through thoughtful, creative, and strategic design. <br />
             <br />
              From logos and brand identity to social media creatives and marketing materials, we create designs that not only look good but also support real business growth.
          </p>
        </div>

      </div>
    </section>
  );
}