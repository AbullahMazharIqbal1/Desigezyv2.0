export default function Newsletter() {
  return (
    <section className="w-full bg-[#0C0C0C] py-[100px] flex items-center justify-center">
      
      {/* Dark Newsletter Box */}
      <div className="bg-[#171717] w-full max-w-[608px] min-h-[283px] mx-6 rounded-[3px] flex flex-col items-center justify-center px-6 py-10 shadow-2xl">
        
        <h2 
          className="text-[#F6F2E7] mb-[20px] text-center"
          style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 700, fontSize: 'clamp(32px, 5vw, 55px)', lineHeight: '95%' }}
        >
          Subscribe To Our<br />Newsletter!
        </h2>
        
        <p 
          className="text-[#F6F2E7] mb-[30px] text-center"
          style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500, fontSize: '16px', lineHeight: '82%' }}
        >
          Get latest updates, offers and sales from designeezy.
        </p>
        
        {/* Input Box Area */}
        <div className="w-full max-w-[544px] h-[68px] bg-[#0C0C0C] rounded-[5px] flex items-center justify-between p-2 pl-6">
          <input 
            type="email" 
            placeholder="Enter your email here" 
            className="bg-transparent outline-none w-full text-[#F6F2E7] placeholder:text-[#7F7F7F]"
            style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 500, fontSize: '19.42px', lineHeight: '82%' }}
          />
          <button 
            className="bg-[#BCFF03] text-[#0C0C0C] flex items-center justify-center rounded-[3px] h-[34px] px-[28px] hover:scale-105 transition-transform whitespace-nowrap"
            style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 500, fontSize: '16px', lineHeight: '20px' }}
          >
            Get started
          </button>
        </div>

      </div>
    </section>
  );
}