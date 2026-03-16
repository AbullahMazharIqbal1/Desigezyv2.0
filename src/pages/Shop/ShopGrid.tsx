import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function ShopGrid() {
  // Dummy data based on the PDF texts
  const products = [
    { 
      id: 1, 
      title: "Ultimate Case Study Template", 
      price: "$2.00", 
      img: "https://picsum.photos/seed/shop1/800/800" 
    },
    { 
      id: 2, 
      title: "Ultimate Brand Identity Template", 
      price: "$2.00", 
      img: "https://picsum.photos/seed/shop2/800/800" 
    },
    { 
      id: 3, 
      title: "Ultimate Case Study Template", 
      price: "$2.00", 
      img: "https://picsum.photos/seed/shop3/800/800" 
    },
    { 
      id: 4, 
      title: "Ultimate Brand Identity Template", 
      price: "$2.00", 
      img: "https://picsum.photos/seed/shop4/800/800" 
    },
    { 
      id: 5, 
      title: "Ultimate Case Study Template", 
      price: "$2.00", 
      img: "https://picsum.photos/seed/shop5/800/800" 
    },
    { 
      id: 6, 
      title: "Ultimate Brand Identity Template", 
      price: "$2.00", 
      img: "https://picsum.photos/seed/shop6/800/800" 
    },
  ];

  return (
    <section className="bg-[#0C0C0C] pb-[160px] w-full px-6 overflow-hidden">
      <div className="max-w-[1120px] mx-auto">
        
        {/* The 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-[80px] md:gap-y-[120px]">
          {products.map((product, index) => (
            <Link 
              to={`/shop/${product.id}`} 
              key={product.id}
              className="group flex flex-col block"
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index % 2 === 0 ? 0 : 0.2 }}
              >
                {/* Product Image Box (544x544 Aspect Ratio) */}
                <div className="w-full aspect-square bg-[#171717] rounded-[3px] overflow-hidden mb-6 relative">
                  <img 
                    src={product.img} 
                    alt={product.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle dark overlay that removes on hover */}
                  <div className="absolute inset-0 bg-[#0C0C0C]/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                </div>
                
                {/* Product Details */}
                <div className="flex flex-col gap-2">
                  <h3 
                    className="text-[#BCFF03] transition-colors"
                    style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 600, fontSize: 'clamp(24px, 3vw, 31.42px)', lineHeight: '120%' }}
                  >
                    {product.title}
                  </h3>
                  <p 
                    className="text-[#F6F2E7]"
                    style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 400, fontSize: 'clamp(24px, 3vw, 31.42px)', lineHeight: '130%' }}
                  >
                    {product.price}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}