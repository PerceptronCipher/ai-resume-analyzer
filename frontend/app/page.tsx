'use client'

import React from 'react'
import { Toaster } from 'react-hot-toast'
import HeroSection from '@/app/components/home/HeroSection'
import FeatureSection from '@/app/components/home/FeatureSection'
import UploadZone from '@/app/components/home/UploadZone'
import Steps from '@/app/components/home/Steps'
import FAQ from '@/app/components/home/FAQ'

export default function Home() {
  return (
    /* Main wrapper with a clean slate background to separate white/tinted sections */
    <div className='flex flex-col bg-[#F8FAFC] min-h-screen'>
      {/* 1. Global Toast Notifications 
          Ensures that 'toast.success' or 'toast.error' from UploadZone 
          can be seen regardless of scroll position.
      */}
      <Toaster position='top-center' reverseOrder={false} />

      {/* 2. Hero: The Hook & Primary CTA */}
      <HeroSection />

      {/* 3. Features: Detailed breakdown of the AI capabilities */}
      <FeatureSection />

      {/* 4. The Interactive Core (UploadZone)
          We wrap this in a distinct container to make the interactive 
          analysis feel like the "main event" of the page.
      */}
      <section className='w-full py-20 px-6 md:px-12 bg-white border-y border-slate-100'>
        <div className='max-w-6xl mx-auto'>
          <UploadZone />
        </div>
      </section>

      {/* 5. Steps: Visual guide on how the process works */}
      <Steps />

      {/* 6. FAQ: Addressing common concerns (ATS, Privacy, etc.) */}
      <FAQ />

      {/* 7. Bottom Spacer: Breathing room before the site footer */}
      <div className='py-16' />
    </div>
  )
}