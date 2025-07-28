'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import PopupBtn from './PopupBtn';

const HeaderSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    {
      name: 'Services',
      href: '/Services',
      subLinks: [
        { name: 'App Development', href: '/mobile-application-development-company-in-jaipur' },
        { name: 'Shopify Development', href: '/web-development-company-in-jaipur' },
        { name: 'Ecommerce', href: '/ecommerce-marketing-services' },
        { name: 'SEO', href: '/best-seo-company-in-jaipur' },
       
 { name: 'Performance Marketing', href: '/performance-marketing-agency' },
      ],
    },
    //  { name: 'Marketing', href: '#' },
    { name: 'Portfolio', href: '/Portfolio' },
   { name: 'About Us', href: '/About' },
   { name: 'Blog', href: '/Blog' },
    { name: 'Contact', href: 'Contact' },
  ];

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  return (
    <div className='h_ead'>
      <header className="main-header w-[85%] m-auto py-6 flex items-center justify-between relative z-50">
        {/* Logo */}
        <div className="logo">
          <div className="relative w-[100px] h-[60px]">
            <Link href="/">
              <Image
                src="/landing-logo.webp"
                alt="Logo"
                fill
                style={{ objectFit: 'contain' }}
                quality={85}
                priority
                sizes="(max-width: 768px) 90px, 160px"
              />
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(true)} className="text-3xl text-black">
            <FiMenu />
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex md:w-[50%] bg-[#302E2E] p-3 rounded-[10px] items-center justify-between">
          <nav className="w-full">
            <ul className="flex justify-between w-full">
              {navLinks.map((link, index) => (
                <li key={index} className="relative group">
                  <Link
                    href={link.href}
                    className="text-white p-2 hover:rounded-[6px] hover:bg-[#4F3DFE]"
                  >
                    {link.name}
                  </Link>

                  {/* Submenu (Desktop) */}
                  {link.subLinks && (
                    <ul className="w-[200px] absolute top-full left-0 bg-[#302E2E] rounded-md py-2 px-4 mt-2 hidden group-hover:block z-50">
                      {link.subLinks.map((subLink, subIdx) => (
                        <li key={subIdx}>
                          <Link
                            href={subLink.href}
                            className="block text-white hover:text-[#4F3DFE] py-1"
                          >
                            {subLink.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* CTA for Desktop */}
        <PopupBtn
        
        btnclass={"hidden md:block w-auto"}
        
        />
        {/* <div className="hidden md:block w-auto">
          <button className="bg-[linear-gradient(to_right,_#7163FD,_#4132d1cc,_#3C31A5)] text-lg text-white font-medium py-3 px-4 rounded-[30px] w-full">
            Start a Project
          </button>
        </div> */}
   
        
       
        {/* Mobile Slide-in Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="overflow-x-scroll w-[80%] fixed top-0 right-0 h-full bg-[#302E2E] text-white flex flex-col items-center justify-start pt-5 px-6 z-50"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-6 right-6 text-3xl text-white"
              >
                <FiX />
              </button>

              {/* Nav Links (Mobile) */}
              <nav className="w-full mt-10">
                <ul className="flex flex-col items-center gap-6 text-xl">
                  {navLinks.map((link, index) => (
                    <li key={index} className="w-full text-left">
                      {!link.subLinks ? (
                        <Link
                          href={link.href}
                          className="hover:text-[#4F3DFE] transition block py-[10px] border-b border-white"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {link.name}
                        </Link>
                      ) : (
                        <div className='py-[10px] border-b border-white flex justify-between items-center flex-wrap'>
                        

 <Link
                          href={link.href}
                          className="hover:text-[#4F3DFE] transition block py-[10px] flex-1"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {link.name}
                        </Link>
                      
                          <button
                            className="text-white font-medium w-auto "
                            onClick={() =>
                              setMobileDropdownOpen((prev) => !prev)
                            }
                          >
                            
                            <span>{mobileDropdownOpen ? '▲' : '▼'}</span>
                          </button>
                          {mobileDropdownOpen && (
                            <ul className="mt-2 space-y-2 pl-[15px] border-l border-white w-[100%]">
                              {link.subLinks.map((subLink, subIdx) => (
                                <li key={subIdx}>
                                  <Link
                                    href={subLink.href}
                                    className="block text-white text-base"
                                    onClick={() => setIsMenuOpen(false)}
                                  >
                                    {subLink.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>

              {/* CTA Button (Mobile) */}
  <PopupBtn
        
        btnclass={"block md:hidden w-[100%] mt-10"}
        
        />
              
              {/* <button
                className="mt-10 bg-[linear-gradient(to_right,_#7163FD,_#4132d1cc,_#3C31A5)] text-white text-lg font-medium py-3 px-6 rounded-[30px] w-full max-w-[300px]"
                onClick={() => setIsMenuOpen(false)}
              >
                Start a Project
              </button> */}
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
};

export default HeaderSection;
