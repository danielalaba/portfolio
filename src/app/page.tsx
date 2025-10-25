import VantaBackground from '@/components/vantabg'
import Hero from '@/components/hero'
import Nav from '@/components/nav';
import Projects from '@/components/projects';

export default function Home() {
  return (
    <div className="max-w-4xl sm:max-w-7xl flex min-h-screen mx-auto relative p-10 text-white">
        <VantaBackground />
        <div className='w-full'>
            <nav>
                <Nav />
            </nav>
            <Hero />
            <Projects />
        </div>
    </div>
  );
}
