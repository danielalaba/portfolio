'use client'
import React, { useState } from 'react'
import { Github, FileUser, Linkedin } from 'lucide-react';
import Link from 'next/link';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className='w-full'>
      <div className='w-full h-16 sm:h-10 flex items-center justify-between px-6 sm:px-10 rounded-full'>
        <h1 className='text-xl sm:text-2xl font-bold font-bbh pr-4'>daniel.dev</h1>

        {/* Desktop Icons */}
        <div className='hidden lg:flex gap-4 items-center'>
          <Tooltip>
            <TooltipTrigger className='text-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out p-2 rounded-full'>
              <Link href="https://github.com/danielalaba" target='_blank' rel='noopener noreferrer'>
                <Github />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Github</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger className='text-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out p-2 rounded-full'>
              <Link href="https://www.linkedin.com/in/daniel-alaba-6b26a7232/" target='_blank' rel='noopener noreferrer'>
                <Linkedin />
              </Link>
            </TooltipTrigger>
            <TooltipContent className='bg-white'>
              <p>Linkedin Profile</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger className='text-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out p-2 rounded-full'>
              <Link href="/CV_Alaba-4.pdf" target='_blank' rel='noopener noreferrer'>
                <FileUser />
              </Link>
            </TooltipTrigger>
            <TooltipContent className='bg-white'>
              <p>View my CV</p>
            </TooltipContent>
          </Tooltip>
        </div>

        {/* Mobile Menu Button */}
        <button
          className='lg:hidden flex flex-col justify-center items-center w-8 h-8 flex-shrink-0'
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
        >
          <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
          <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-48 opacity-100 bg-white rounded-2xl' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className='px-6 sm:px-10 py-4 flex flex-col gap-3'>
          <Link href="https://github.com/danielalaba" target='_blank' rel='noopener noreferrer' className='flex items-center gap-3 text-black hover:text-gray-300 transition-colors py-2'>
            <Github size={20} />
            <span>Github</span>
          </Link>
          <Link href="https://www.linkedin.com/in/daniel-alaba-6b26a7232/" target='_blank' rel='noopener noreferrer' className='flex items-center gap-3 text-black hover:text-gray-300 transition-colors py-2'>
            <Linkedin size={20} />
            <span>Linkedin Profile</span>
          </Link>
          <Link href="/CV_Alaba-4.pdf" target='_blank' rel='noopener noreferrer' className='flex items-center gap-3 text-black hover:text-gray-300 transition-colors py-2'>
            <FileUser size={20} />
            <span>View my CV</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Nav
