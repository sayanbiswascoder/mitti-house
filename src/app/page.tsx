"use client"
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

import section1 from "../assets/images/section1.jpg";
import section2 from "../assets/images/section2.jpg";
import { useRef } from "react";

export default function Home() {
  const windowHeight = useRef(window.innerHeight);
  const windowWidth = useRef(window.innerWidth);

  console.log("Window Height:", windowHeight);
  console.log("Window Width:", windowWidth);

  // 
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <section className="w-full h-screen flex flex-col items-center justify-center bg-[url('/background.jpg')] bg-cover bg-center brightness-75 snap-start" data-index={0}>
        <div className="text-center text-white bg-[#041246]/70 w-full h-full flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center opacity-100">
            <Image 
              src="/logo.png"
              alt="Mitti House Logo"
              width={120}
              height={120}
              className="mb-4 brightness-150"
            />
            <h1 className="text-4xl my-6 font-[instrument-serif]">
              Made by <span className="italic">Human Hands</span>,
              <br />
              Designed by <span className="italic">Human Minds</span>.
            </h1>
            <button className="border-2 border-[#EDE8D0] text-[#EDE8D0] px-6 py-3 rounded-full text-xsm font-medium transition-all duration-300 hover:bg-[#EDE8D0] hover:text-[#041246] mb-16">
              EXPLORE COLLECTION 
              <FaArrowRight className="inline-block ml-2" />
            </button>
          </div>
        </div>
      </section>
      <section className="w-full h-screen flex items-center justify-center bg-[#EDE8D0] p-6 lg:p-16 snap-start overflow-hidden" data-index={1}>
        <div className="flex items-start justify-center flex-wrap text-black">
          <div className="flex items-center justify-center rounded" style={{ height: windowWidth.current > windowHeight.current ? 400 : windowWidth.current * 0.8, width: windowWidth.current > windowHeight.current ? 400 : windowWidth.current * 0.8 }}>
            <Image 
              src={section1}
              alt="Section 1"
              className="rounded-2xl h-full w-full"
            />
          </div>
          <div className="w-full h-1/2 lg:w-1/2 lg:h-full flex flex-col items-start justify-center lg:px-8"> 
            <div className="text-xs font-bold px-4 p-2 border-2 border-[#041246] rounded-full text-black mt-2 lg:mt-0">FEATURED ARTIST</div>
            <h2 className="text-4xl mt-6 font-[instrument-serif]">Potter</h2>
            <div className="overflow-y-auto mt-4 mb-6" style={{ maxHeight: windowWidth.current > windowHeight.current ? "auto" : windowWidth.current * 0.4 }}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus leo ex, quis hendrerit arcu faucibus vel. Aliquam erat volutpat. Maecenas vehicula nibh sit amet justo ultrices, varius tempor orci pretium. Integer luctus ex in nibh venenatis scelerisque. Fusce ultricies in ante ut condimentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam nec turpis est. In molestie congue ante. Etiam finibus dictum ipsum vitae finibus. Vivamus quis dui eu metus finibus posuere...</p>
            </div>
            <div className="text-xs font-bold px-4 py-2 border-2 border-[#041246] rounded-full text-black">
              LEARN MORE
              <FaArrowRight className="inline-block ml-2 mb-1 text-xl" />
            </div>
          </div>
        </div>
      </section>  
      <section className="w-full h-screen flex flex-col items-center justify-start bg-[#EDE8D0] p-6 lg:px-12 snap-start text-black" data-index={2}>
        <h1 className="text-4xl pb-2 font-[instrument-serif]">No AI. just us.</h1>
        <div className="flex items-center justify-center flex-wrap">
          {
            [0, 1, 2, 3, 4].map((i) => {
              return (
                <div key={i} className="w-10 h-10 bg-[#041246] rounded-full m-2"></div>
              )
            })
          }
        </div>
        <div className="flex items-start justify-center flex-wrap text-black mt-2">
          <div className="flex items-center justify-center rounded" style={{ height: windowWidth.current > windowHeight.current ? 300 : windowWidth.current * 0.8, width: windowWidth.current > windowHeight.current ? 400 : windowWidth.current * 0.8 }}>
            <Image 
              src={section2}
              alt="Section 2"
              className="rounded-2xl h-full w-full"
            />
          </div>
          <div className="w-full h-1/2 lg:w-1/2 lg:h-full flex flex-col items-start justify-start lg:px-8 p-0"> 
            <div className="overflow-y-auto my-4 lg:mt-0" style={{ maxHeight: windowWidth.current > windowHeight.current ? "auto" : windowWidth.current * 0.4 }}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus leo ex, quis hendrerit arcu faucibus vel. Aliquam erat volutpat. Maecenas vehicula nibh sit amet justo ultrices, varius tempor orci pretium. Integer luctus ex in nibh venenatis scelerisque. Fusce ultricies in ante ut condimentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam nec turpis est. In molestie congue ante. Etiam finibus dictum ipsum vitae finibus. Vivamus quis dui eu metus finibus posuere...</p>
            </div>
            <div className="text-xs font-bold px-4 py-2 border-2 border-[#041246] rounded-full text-black">
              MORE ABOUT US
              <FaArrowRight className="inline-block ml-2 mb-1 text-xl" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
