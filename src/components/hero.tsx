import React from 'react'
import LiquidCard from './liquid-card'
import Header from './header'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row max-w-4xl sm:max-w-7xl my-2 sm:my-0 sm:p-4 gap-3 sm:gap-6 text-white'>
        <div className='glass-morph w-auto sm:w-96 h-96 rounded-4xl p-4 flex flex-col gap-5 bg-[linear-gradient(120deg,rgba(0,0,0,0.2),rgba(108,102,102,0.3))]'>
            {/* <LiquidCard className='h-20 w-full p-4'> */}
                <div className='flex gap-3 mx-2 items-center h-auto w-full'>
                    <Header />
                    <h1 className='text-md sm:text-xl font-bold font-bbh'>About Me</h1>
                </div>
            {/* </LiquidCard> */}
            {/* <LiquidCard className='h-full w-full p-4 rounded-2xl'> */}
                <div className='flex justify-center h-full w-full px-4 py-2'>
                    <p className='text-sm sm:text-base font-montserrat'>I&apos;m Daniel Alaba, a web developer focused on building clean, responsive, and user-friendly frontend experiences. I enjoy turning designs into interactive, performant websites using modern frameworks like React and Next.js.</p>
                </div>
            {/* </LiquidCard> */}
        </div>
        <div className='glass-morph w-auto sm:w-[50rem] h-auto rounded-4xl p-4 flex flex-col gap-5'>
            <div className='flex mx-2 gap-3 items-center h-auto w-full'>
                <Header />
                <h1 className='text-md sm:text-xl font-bold font-bbh'>Skills</h1>
            </div>
            <div className='w-full h-full flex flex-col sm:flex-row gap-2'>
                <LiquidCard className='flex h-74 sm:h-full w-auto sm:w-60 p-2'>
                    <div className='ml-1'>
                        <h1 className='font-montserrat'>Languages & Markup</h1>
                    </div>
                    <div className='w-full h-auto flex flex-row flex-wrap gap-2 mt-2 font-montserrat'>
                        <p className='text-sm font-bold rounded-full bg-white text-black p-3'>JavaScript</p>
                        <p className='text-sm font-bold rounded-full bg-white text-black p-3'>HTML</p>
                        <p className='text-sm font-bold rounded-full bg-white text-black p-3'>CSS</p>
                        <p className='text-sm font-bold rounded-full bg-white text-black p-3'>JavaScript</p>
                        <p className='text-sm font-bold rounded-full bg-white text-black p-3'>TypeScript</p>
                        <p className='text-sm font-bold rounded-full bg-white text-black p-3'>Node.js</p>
                    </div>
                </LiquidCard>
                <LiquidCard className='flex h-74 sm:h-full w-auto sm:w-60 px-4 py-2'>
                    <div className='ml-1'>
                        <h1 className='font-montserrat'>Frameworks & Libraries</h1>
                    </div>
                    <div className='w-full h-auto flex flex-row flex-wrap gap-2 mt-2 font-montserrat'>
                        <p className='text-sm font-bold rounded-full bg-white text-black p-3'>React.js</p>
                        <p className='text-sm font-bold rounded-full bg-white text-black p-3'>Next JS</p>
                        <p className='text-sm font-bold rounded-full bg-white text-black p-3'>Tailwind CSS</p>
                        <p className='text-sm font-bold rounded-full bg-white text-black p-3'>ShadCN</p>
                    </div>
                </LiquidCard>
                <LiquidCard className='flex h-74 sm:h-full w-auto sm:w-60 px-4 py-2'>
                    <div className='ml-1'>
                        <h1 className='font-montserrat'>Tools</h1>
                    </div>
                    <div className='w-full h-auto flex flex-row flex-wrap gap-2 mt-2 font-montserrat'>
                        <p className='text-sm font-bold rounded-full bg-white text-black p-3'>Github</p>
                        <p className='text-sm font-bold rounded-full bg-white text-black p-3'>Figma</p>
                        <p className='text-sm font-bold rounded-full bg-white text-black p-3'>Trello</p>
                    </div>
                </LiquidCard>
            </div>
        </div>
    </div>
  )
}

export default Hero
