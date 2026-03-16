import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function ProductPage() {
  const { id } = useParams(); // Gets the /shop/:id from the URL

  // Scroll to top when loading a new product
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Dummy Images for the gallery
  const galleryImages = [
    "https://picsum.photos/seed/main/800/800",
    "https://picsum.photos/seed/thumb1/400/400",
    "https://picsum.photos/seed/thumb2/400/400",
    "https://picsum.photos/seed/thumb3/400/400",
    "https://picsum.photos/seed/thumb4/400/400",
    "https://picsum.photos/seed/thumb5/400/400",
    "https://picsum.photos/seed/thumb6/400/400",
  ];

  const relatedProducts = [
    { id: 101, title: "The Ultimate Brand Identity Template.", price: "$2.00", img: "https://picsum.photos/seed/rel1/400/400" },
    { id: 102, title: "The Ultimate Brand Identity Template.", price: "$2.00", img: "https://picsum.photos/seed/rel2/400/400" },
    { id: 103, title: "The Ultimate Brand Identity Template.", price: "$2.00", img: "https://picsum.photos/seed/rel3/400/400" },
    { id: 104, title: "The Ultimate Brand Identity Template.", price: "$2.00", img: "https://picsum.photos/seed/rel4/400/400" },
  ];

  return (
    <div className="bg-[#0C0C0C] min-h-screen pt-[160px]">
      
      {/* --- MAIN PRODUCT SECTION --- */}
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col lg:flex-row gap-[60px] lg:gap-[100px] mb-[120px]">
        
        {/* LEFT COLUMN: Sticky Image Gallery */}
        <div className="w-full lg:w-[640px] shrink-0">
          <div className="sticky top-[120px] flex flex-col gap-6">
            {/* Main Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full aspect-[640/604] bg-[#171717] rounded-[3px] overflow-hidden"
            >
              <img src={galleryImages[0]} alt="Product Main" className="w-full h-full object-cover" />
            </motion.div>
            
            {/* 3-Column Thumbnails */}
            <div className="grid grid-cols-3 gap-4 md:gap-6">
              {galleryImages.slice(1).map((img, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className="w-full aspect-square bg-[#171717] rounded-[3px] overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <img src={img} alt={`Thumbnail ${i+1}`} className="w-full h-full object-cover" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Product Details & Description */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full flex flex-col pt-4"
        >
          <h1 
            className="text-[#F6F2E7] mb-6"
            style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 600, fontSize: 'clamp(40px, 5vw, 52.42px)', lineHeight: '98%' }}
          >
            The Ultimate Logo<br />Case Study Template
          </h1>
          
          <p 
            className="text-[#F6F2E7] mb-[40px]"
            style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500, fontSize: '31.42px', lineHeight: '113%' }}
          >
            $2.00
          </p>

          <a 
            href="#" 
            className="bg-[#FF90E8] text-[#0C0C0C] w-fit px-[40px] py-[16px] rounded-[3px] hover:scale-105 transition-transform mb-[60px]"
            style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 600, fontSize: '19.42px', lineHeight: '98%' }}
          >
            Buy On Gumroad
          </a>

          <p className="text-[#F6F2E7] mb-2" style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500, fontSize: '19.42px' }}>Description:</p>
          <h2 className="text-[#BCFF03] mb-8" style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500, fontSize: '24px', lineHeight: '121%' }}>
            The Ultimate Logo Case Study Template For Graphic Designers. (Adobe Illustrator)
          </h2>

          {/* Formatted Description Text */}
          <div className="text-[#FFFFFF] flex flex-col gap-6" style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 400, fontSize: '16px', lineHeight: '150%' }}>
            <p>This isn’t just a presentation template. It’s a tried-and-tested storytelling system designed specifically for logo designers and brand identity creators who want to sell their ideas with confidence, not just show them.</p>
            <p>Built from years of real client experience, presentation failures, and design wins, this template helps you present your logo concepts in a way that gets heads nodding, not confused frowns. It’s the exact format I use to get those golden responses: “We love it. No amends.”</p>
            
            <h3 className="text-[#BCFF03] font-bold mt-4 uppercase">Why This Template Is Different</h3>
            <ul className="list-disc pl-5 flex flex-col gap-2">
              <li><strong>Built on storytelling, not just slides:</strong> It’s based on the proven presentation framework I teach in my mini-course, using a three-act storytelling structure that builds clarity, excitement and client buy-in.</li>
              <li><strong>Created by a designer, for designers:</strong> This is for freelance logo designers and brand identity specialists, not UI designers, not packaging pros.</li>
              <li><strong>Educates your client while you pitch:</strong> Most clients aren’t visual thinkers. This template gives you the structure and language to translate your creative process.</li>
              <li><strong>Real project layers included:</strong> Every page includes toggle-on tips, guidance and a real logo project from me.</li>
            </ul>

            <h3 className="text-[#BCFF03] font-bold mt-4 uppercase">What You Get</h3>
            <ul className="list-disc pl-5 flex flex-col gap-2">
              <li>30-page professionally designed Adobe Illustrator file</li>
              <li>Built-in layer Hints & Tips guidance on each key section</li>
              <li>Real project examples to help you see the full flow</li>
              <li>A clean, modern design system built to let your work shine</li>
              <li>Free & paid mockup suggestions for showcasing your projects</li>
            </ul>
          </div>
        </motion.div>

      </div>

      {/* --- RELATED PRODUCTS SECTION (Light Background) --- */}
      <section className="bg-[#F6F2E7] py-[100px] w-full px-6">
        <div className="max-w-[1280px] mx-auto">
          <h2 
            className="text-[#0C0C0C] mb-[60px] text-center"
            style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 600, fontSize: 'clamp(40px, 6vw, 82.26px)', lineHeight: '82%' }}
          >
            Other Design Stuff!
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((prod) => (
              <Link to={`/shop/${prod.id}`} key={prod.id} className="group flex flex-col cursor-pointer">
                <div className="w-full aspect-square bg-[#171717] rounded-[3px] mb-4 overflow-hidden">
                  <img src={prod.img} alt={prod.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 hover:scale-105" />
                </div>
                <h3 className="text-[#0C0C0C] font-bold mb-1 line-clamp-2" style={{ fontFamily: "'Satoshi', sans-serif", fontSize: '16px' }}>
                  {prod.title}
                </h3>
                <p className="text-[#171717] font-medium" style={{ fontFamily: "'Satoshi', sans-serif", fontSize: '14px' }}>
                  {prod.price}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}