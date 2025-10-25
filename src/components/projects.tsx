import React from 'react'
import Header from './header'
import LiquidCard from './liquid-card'
import Link from 'next/link'
import { Link2, Camera } from 'lucide-react'

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const Projects = () => {
  return (
    <div className='flex flex-col sm:flex-row max-w-4xl sm:max-w-7xl my-2 sm:my-0 sm:p-4 gap-3 sm:gap-10'>
        <div className='glass-morph w-auto sm:w-full h-auto sm:h-96 rounded-4xl p-4 flex flex-col gap-5 bg-[linear-gradient(120deg,rgba(0,0,0,0.2),rgba(108,102,102,0.3))]'>
            {/* <LiquidCard className='h-20 w-full p-4'> */}
                <div className='flex gap-3 mx-2 items-center h-auto w-full'>
                    <Header />
                    <h1 className='text-md sm:text-xl font-bold font-bbh'>Projects</h1>
                </div>
            {/* </LiquidCard> */}
            {/* <LiquidCard className='h-full w-full p-4 rounded-2xl'> */}
                <div className='flex flex-col sm:flex-row h-auto sm:h-full w-full justify-evenly gap-2'>
                    <LiquidCard className='flex h-74 sm:h-full w-auto sm:w-[23.5rem] px-4 py-2'>
                        <h1 className='font-bbh text-center '>ClipCraft</h1>
                        <div className='mt-4'>
                            <p className='font-montserrat'>
                                Made a landing page for a video editing SaaS using React, Tailwind CSS, and Framer Motion for animations. With SMTP integration for contact forms.
                            </p>
                        </div>
                        <div className='mt-5 sm:mt-10'>
                            <Tooltip>
                                <TooltipTrigger>
                                    <Link href="https://clipcraft.net" target='_blank' rel='noopener noreferrer' className='text-sm font-montserrat w-auto'>
                                        <Link2 className='inline-block'/>
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Visit Website</p>
                                </TooltipContent>
                            </Tooltip>
                        </div>
                    </LiquidCard>
                    <LiquidCard className='flex h-74 sm:h-full w-auto sm:w-[23.5rem] px-4 py-2'>
                        <h1 className='font-bbh text-center'>Frontend Demo Site</h1>
                        <div className='mt-4'>
                            <p className='font-montserrat'>
                                Developed a responsive realtor landing page using React and Tailwind CSS for a frontend technical assessment.
                            </p>
                        </div>
                        <div className='mt-10'>
                            <Tooltip>
                                <TooltipTrigger>
                                    <Link href="https://tech-assessment-psi.vercel.app/" target='_blank' rel='noopener noreferrer' className='text-sm font-montserrat w-auto'>
                                        <Link2 className='inline-block'/>
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Visit Website</p>
                                </TooltipContent>
                            </Tooltip>
                        </div>
                    </LiquidCard>
                    <LiquidCard className='flex h-auto sm:h-full w-auto sm:w-[22.5rem] px-4 py-2'>
                        <h1 className='font-bbh text-center'>E-Lista</h1>
                        <div className='mt-4 h-70 sm:h-auto'>
                            <p className='font-montserrat'>
                                An inventory management system. I helped create the Remittance module, and Web BLE functionality using Bluefy browser for connecting thermal printers and print receipts. (Private System, Only Screenshots Available)
                            </p>
                        </div>
                        <div className='mt-2 sm:mt-10'>
                            <Tooltip>
                                <TooltipTrigger>
                                    <Link href="https://drive.google.com/drive/folders/1XnQCQqEeQMspplwGBaAmYyxsE3NwPyIv?usp=sharing" target='_blank' rel='noopener noreferrer' className='text-sm font-montserrat w-auto'>
                                        <Camera className='inline-block'/>
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>See Screenshots</p>
                                </TooltipContent>
                            </Tooltip>
                        </div>
                    </LiquidCard>
                </div>
            {/* </LiquidCard> */}
        </div>
    </div>
  )
}

export default Projects
