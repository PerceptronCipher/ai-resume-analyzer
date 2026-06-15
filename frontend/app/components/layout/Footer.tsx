'use client'

import React from 'react'
import Link from 'next/link'


export const XIcon = ({ size = 24, color = "currentColor", ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      stroke="none"
      {...props}
    >
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  );
};
const footerLinks = [
  {
    category: 'Product',
    links: [
      { name: 'Features', href: '#features' },
      { name: 'Templates', href: '#' },
      { name: 'Pricing', href: '#' },
    ],
  },
  {
    category: 'Company',
    links: [
      { name: 'About Us', href: '#' },
      { name: 'Contact Us', href: '#' },
      { name: 'Careers', href: '#' },
    ],
  },
  {
    category: 'Legal',
    links: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className='w-full bg-[#F8FAFC] pt-4 pb-12 px-8 md:px-16 lg:px-32'>
      <div className='max-w-[1440px] mx-auto'>
        {/* Top Section: Brand + Links Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-16 mb-24'>
          {/* Brand Column - Updated text per Footer (1).png */}
          <div className='lg:col-span-3 space-y-8'>
            <Link
              href='/'
              className='text-2xl font-bold text-[#111111] tracking-tight'
            >
              JobBit AI
            </Link>
            <p className='text-slate-500 font-medium max-w-sm leading-relaxed text-[15px]'>
              An Al tool that improves resumes, analyzes content, and gives ATS
              scores to help users get job-ready and noticed.
            </p>

            {/* Round Social/Action Icons from Footer (1).png */}
            <div className='flex gap-4 pt-4'>
              
              <Link href='https://x.com/bitkinart?s=21' className='w-12 h-12 bg-[#E2E8F0] rounded-full flex items-center justify-center text-slate-600 hover:bg-[#CBD5E1] transition-colors'>
                <XIcon />
              </Link>
            </div>
          </div>

          {/* Link Columns - Categories updated per Footer (1).png */}
          {footerLinks.map((item) => (
            <div key={item.category} className='flex flex-col gap-6'>
              <h4 className='font-bold text-[#111111] text-[16px]'>
                {item.category}
              </h4>
              <nav className='flex flex-col gap-4'>
                {item.links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className='text-slate-500 hover:text-[#074799] text-[15px] font-medium transition-colors'
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        {/* Bottom Section: Copyright + Trusted By per Footer (1).png */}
        <div className='pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6'>
          <p className='text-slate-500 text-[14px] font-medium'>
            © {new Date().getFullYear()} Resume Analyzer AI. All rights
            reserved.
          </p>

          <p className='text-slate-400 text-[14px] font-medium italic'>
            Trusted by HR professionals worldwide.
          </p>
        </div>
      </div>
    </footer>
  )
}



