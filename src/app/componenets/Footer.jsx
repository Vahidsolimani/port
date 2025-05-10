import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='bg-[#0a1f26] border-t border-blue-600 rounded '>
      <div className='max-w-6xl mx-auto p-4'>
        <div className='flex flex-col items-center gap-6 md:flex-row md:justify-between'>
          {/* Connect with me text - centered on mobile */}
          <div className='bg-gradient-to-r from-[#2b5876] to-[#fea55f] bg-clip-text hidden md:block text-center md:text-left'>
            <h3 className='text-transparent  font-medium text-lg'>Connect with me:</h3>
          </div>
          
          {/* Name and Social icons - stacked on mobile */}
          <div className='flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-6'>
            {/* Your name with @ symbol */}
            <div className='flex items-center bg-gradient-to-r from-[#2b5876] to-[#fea55f] bg-clip-text'>
              <span className='text-[#fea55f] mr-1'>@</span>
              <span className='text-transparent font-medium text-lg'>vahid solimani</span>
            </div>
            
            {/* Social icons divider - hidden on mobile */}
            <div className='hidden md:block h-6 w-px bg-[#1e2d3d]'></div>
            
            {/* Social icons */}
            <div className='flex space-x-6'>
              <Link 
                href="https://linkedin.com" 
                target="_blank"
                className="text-[#607B96] hover:text-[#fea55f] transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
              
              <Link 
                href="https://github.com" 
                target="_blank"
                className="text-[#607B96] hover:text-[#fea55f] transition-colors duration-300"
                aria-label="GitHub"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </Link>
              
              <Link 
                href="https://instagram.com" 
                target="_blank"
                className="text-[#607B96] hover:text-[#fea55f] transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright text - always centered */}
        <div className='mt-6 hidden  text-center text-[#607B96] text-sm'>
          © {new Date().getFullYear()} Vahid Solimani. All rights reserved.
        </div>
      </div>
    </footer>
  )
}