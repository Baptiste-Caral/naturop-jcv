"use client";
import Image from 'next/image';
import { ChevronDown, MapPinned, PhoneCall, Salad } from 'lucide-react'


export default function Home() {

  const scrollToSection2 = () => {
    const section2 = document.querySelector('.section-2');
    if (section2) {
      section2.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="">
      <section className="section-1 relative h-screen flex flex-col justify-between items-center">
        <div className="absolute inset-0 z-0">
            <Image
              src="/images/spa-still-life.jpg"
              alt="Fond nature"
              layout="fill"
              objectFit="cover"
              quality={100}
              priority
            />
        </div>
        <div className="relative h-screen z-10 flex flex-col items-center justify-center text-white ">
          <div className="p-4 flex flex-col items-center bg-black bg-opacity-50 rounded">
            <h2 className='font-bold'>Justine Caral-Villa</h2>
            <h5>Naturopathie et massage</h5>
          </div>
          <ChevronDown className='cursor-pointer mt-6 animate-pulse hover:animate-ping w-20 h-20' onMouseEnter={scrollToSection2}/>
        </div>
      </section>
      <section className="section-2 py-20 relative flex flex-col items-center">
        <h1 className=''>Le Naturopathe est Lorem ipsum sim ... </h1>
        <h4 className='mt-6 text-[#D3B39A]'>Texte à remplir ici Lorem ipsum sim  </h4>
        <div className="mt-6 relative w-48 sm:w-64 md:w-96">
          <div aria-hidden="true" className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-2 text-gray-500">
              <Salad aria-hidden="true" className="h-5 w-5 text-gray-500" />
            </span>
          </div>
        </div>
        <div className='mt-4'>Je souhaite Lorem Ipsum is simply dummy text of Lorem Ipsum is simply</div>
        <div className='mt-3 px-3 text-black bg-gray-300 rounded'>La naturopathie est lorem.</div>
      </section>
      <section className="section-3 relative min-h-80 flex flex-col items-center">
        <Image
          src="/images/skincare.jpg"
          alt="Fond nature"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="text-gray-700  relative min-h-[500px] z-10 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center px-64 py-24 bg-white bg-opacity-90 rounded">
            <h2 className='font-semibold '>Cabinet situé à Carros</h2>
            <h5 className='mt-4 text-[#D3B39A]'>Prendre RDV</h5>            
            <a target='_blank' href="https://maps.app.goo.gl/8k2jWSqhMsJGTTEw8" className='mt-4'><MapPinned className='mr-2 inline'/>5 rue lieu cabinet, 06000 Carros</a>
            <a href="tel:0123456789" className='mt-4'><PhoneCall className='mr-2 inline'/>06.60.31.31.31</a>
          </div>
        </div>
      </section>
      <section className="section-4 py-20 relative bg-[#D3B39A] flex flex-col items-center">
        <h1 className=''>Le Naturopathe est Lorem ipsum sim ... </h1>
        <h4 className='mt-6 text-[#D3B39A]'>Texte à remplir ici Lorem ipsum sim  </h4>
        <div className="mt-6 relative w-48 sm:w-64 md:w-96">
          <div aria-hidden="true" className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-2 text-gray-500">
              <Salad aria-hidden="true" className="h-5 w-5 text-gray-500" />
            </span>
          </div>
        </div>
        <div className='mt-4'>Je souhaite Lorem Ipsum is simply dummy text of Lorem Ipsum is simply</div>
        <div className='mt-3 px-3 text-black bg-gray-300 rounded'>La naturopathie est lorem.</div>
      </section>
    
    </main>
  )
}
