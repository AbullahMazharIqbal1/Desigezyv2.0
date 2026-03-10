import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0C0C0C] border-t border-[#FFFFFF]">
      
      {/* Main Footer Content */}
      <div className="max-w-[1120px] mx-auto px-6 py-[80px] flex flex-col md:flex-row justify-between gap-16 md:gap-8">
        
        {/* Left Side: Contact Info */}
        <div className="flex flex-col">
          <p 
            className="text-[#BCFF03] mb-2"
            style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500, fontSize: '18px', lineHeight: '110%' }}
          >
            Want to ask something or just say hi?
          </p>
          
          <h3 
            className="text-[#F6F2E7] mb-12 hover:text-[#BCFF03] transition-colors cursor-pointer"
            style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 600, fontSize: 'clamp(28px, 4vw, 45px)', lineHeight: '110%' }}
          >
            info@designeezy.com<br />
            +92-313-4733827
          </h3>
          
          <div>
            <p 
              className="text-[#BCFF03] mb-4"
              style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500, fontSize: '18px', lineHeight: '110%' }}
            >
              Follow us
            </p>
            {/* "Asset 8" Social Icons Replacement */}
            <div className="flex items-center gap-6 text-[#F6F2E7]">
              <a href="#" className="hover:text-[#BCFF03] hover:-translate-y-1 transition-all"><Instagram size={28} strokeWidth={1.5} /></a>
              <a href="#" className="hover:text-[#BCFF03] hover:-translate-y-1 transition-all"><Facebook size={28} strokeWidth={1.5} /></a>
              <a href="#" className="hover:text-[#BCFF03] hover:-translate-y-1 transition-all"><Twitter size={28} strokeWidth={1.5} /></a>
              <a href="#" className="hover:text-[#BCFF03] hover:-translate-y-1 transition-all"><Linkedin size={28} strokeWidth={1.5} /></a>
            </div>
          </div>
        </div>

        {/* Right Side: Links */}
        <div className="flex gap-[60px] md:gap-[100px]">
          
          {/* Services Column */}
          <div className="flex flex-col gap-6">
            <h4 
              className="text-[#BCFF03]"
              style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 500, fontSize: '24px', lineHeight: '110%' }}
            >
              Services
            </h4>
            <ul 
              className="text-[#F6F2E7] flex flex-col gap-4"
              style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500, fontSize: '16px', lineHeight: '150%' }}
            >
              <li><a href="#" className="hover:text-[#BCFF03] hover:translate-x-1 inline-block transition-transform">Graphic Designing</a></li>
              <li><a href="#" className="hover:text-[#BCFF03] hover:translate-x-1 inline-block transition-transform">Video Editing</a></li>
              <li><a href="#" className="hover:text-[#BCFF03] hover:translate-x-1 inline-block transition-transform">Web Development</a></li>
            </ul>
          </div>

          {/* Designeezy Column */}
          <div className="flex flex-col gap-6">
            <h4 
              className="text-[#BCFF03]"
              style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 500, fontSize: '24px', lineHeight: '110%' }}
            >
              Designeezy
            </h4>
            <ul 
              className="text-[#F6F2E7] flex flex-col gap-4"
              style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500, fontSize: '16px', lineHeight: '150%' }}
            >
              <li><a href="#about" className="hover:text-[#BCFF03] hover:translate-x-1 inline-block transition-transform">About</a></li>
              <li><a href="#portfolio" className="hover:text-[#BCFF03] hover:translate-x-1 inline-block transition-transform">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-[#BCFF03] hover:translate-x-1 inline-block transition-transform">Contact</a></li>
              <li><a href="#shop" className="hover:text-[#BCFF03] hover:translate-x-1 inline-block transition-transform">Shop</a></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div className="w-full bg-[#BCFF03] h-[48px] flex items-center justify-center px-6 mt-8">
        <p 
          className="text-[#0C0C0C] text-center"
          style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 400, fontSize: '18px', lineHeight: '24px' }}
        >
          Copyright © | Designeezy all rights reserved
        </p>
      </div>

    </footer>
  );
}