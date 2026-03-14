export default function Hero() {
  return (
    // We add pt-[200px] to push it down below your fixed Navbar!
    <section className="bg-[#0C0C0C] pt-[200px] pb-[100px] w-full">
      <div className="max-w-[1120px] mx-auto px-6 flex flex-col md:flex-row justify-between gap-12 md:gap-8">

        {/* Left Column */}
        <div className="flex flex-col gap-4 w-full md:w-[445px]">
          <h1
            className="text-[#F6F2E7]"
            style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 700, fontSize: 'clamp(50px, 6vw, 82.26px)', lineHeight: '100%' }}
          >
            Graphic <span className="text-[#BCFF03]">Designing</span>!
          </h1>

          <h2
            className="text-[#FFFFFF] mt-2 md:mt-4 w-full md:w-[304px]"
            style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 700, fontSize: '31.42px', lineHeight: '111%' }}
          >
            Building Brands That People Remember
          </h2>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6 w-full md:w-[561px]">
          <p
            className="text-[#F6F2E7]"
            style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 400, fontSize: '18px', lineHeight: '122%' }}
          >
            Good design should make your business clear and memorable. <br />That is what we focus on. <br /><br />
            We create visuals for social media, marketing materials, websites, and more. Every design is crafted with purpose and aligned with your goals. We take time to understand your vision and turn it into work that feels professional and authentic. 
            <br /><br />
          <span className="text-[#BCFF03]">If you are ready to present your brand with confidence, let’s get started.</span>
           
          </p>

          <button
            className="bg-[#BCFF03] text-[#0C0C0C] flex items-center justify-center rounded-[3px] w-[192px] h-[34px] hover:scale-105 transition-transform mt-2"
            style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 500, fontSize: '16px', lineHeight: '20px' }}
          >
            Start Your Project!
          </button>
        </div>

      </div>
    </section>
  );
}