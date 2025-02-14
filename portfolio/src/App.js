import React from 'react';
// import charite from './images/charite.jpg';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import codsoft from './images/codsoft.png';
import certa from './images/certa.png';
import oasis from './images/oasis.png';
import meta from './images/meta.webp';
import green from './images/green1.png';
import cinetie from './images/cinetie.png';
import baho from './images/baho.png';
import aisfm from './images/aisfm.png';
import alu from './images/ALU.png';
import aisfmbg from './images/aisfm-bg.png';
import career from './images/careersprint.png';
import charite2 from './images/charite2.png';
import charite1 from './images/charite1.png';
import charite3 from './images/charite3.png';
import video from './images/video.mp4';
import cine from './images/cine.png';
// import { useEffect, useRef } from 'react';
import greenRwanda from './images/green.png';
import Baho from './images/bahoF.png';
import produce from './images/produce.webp';
import lasles from './images/lasles.png';
import cafe from './images/cafe.png';
import wallet from './images/wallet.png';
import thinkgreen from './images/thinkgreen.png';
import cropdisease from './images/home-dec.png';
import think from './images/thinkg.png';



function App() {
  
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-black text-white">
      {/* Bio and Image section */}
      <div  className="flex flex-col md:flex-row justify-between items-stretch w-4/5 mb-10  mt-10 mx-auto">
  {/* Bio Section */}
  <header className="bg-black px-10 pt-10 pb-10 rounded-3xl shadow-md border border-gray-600 flex-grow md:mr-5 mb-5 md:mb-0">
  <div className="flex flex-col space-y-6">
    <div className="lg:flex place-items-center justify-between">
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold animate-slide-up">Hey, I'm Charite</h1>
        <p className="text-sm m-2 animate-slide-up">  Software Engineer | Web Developer</p>
      </div>
      <div className="flex space-x-4 ml-5 items-center animate-slide-up mt-5">
        <div className="py-1 border border-gray-600 px-1 rounded-xl">
          <a href="https://github.com/charite-uwatwembi" target="_blank" rel="noopener noreferrer" className="text-white">
            <FaGithub size={30} />
          </a>
        </div>
        <div className="py-1 border border-gray-600 px-1 rounded-xl">
          <a href="https://www.linkedin.com/in/uwatwembi-charite/" target="_blank" rel="noopener noreferrer" className="text-white">
            <FaLinkedin size={30} />
          </a>
        </div>
        <button
  className="bg-black text-white px-4 rounded-xl font-medium border border-gray-600 py-2 shadow hover:bg-gray-700 hover:scale-105 transition-transform duration-300"
  onClick={() => window.location.href = 'mailto:chariteuwatwembi@gmail.com?subject=Get%20in%20Touch&body=Hello%20Charite%2C%20I%27d%20like%20to%20get%20in%20touch%20with%20you!'}
>
  Get In Touch
</button>

      </div>
    </div>

    <h2 className="text-4xl m-0 font-semibold animate-slide-up">
      Obsessed with creating <em className="font-thin">timeless</em> digital products experiences for <em className="font-thin">You-sers</em>
    </h2>
    <p className="text-base animate-slide-up">Hey 👋, I'm Charite, welcome to my world. I love building beautiful, timeless web apps & digital products experiences for users</p>
  </div>
</header>

  {/* Image Section */}
  <div className="relative bg-black rounded-3xl shadow-md border border-gray-600 flex-none md:w-1/3 flex justify-center items-center w-full star-background overflow-hidden">
  <video className="absolute hidden sm:block inset-0 object-cover rounded-3xl z-0" autoPlay muted loop>
    <source src={video} type="video/mp4" />
  </video>
  <img src={charite2} alt="Charite" className="object-cover md:rounded-3xl z-10 scale-90 top-6 animate-slide-up-image" />
</div>


</div>


      {/* The animation div (below the content) */}




      <div   className="animation px-4 md:px-10 lg:px-40">
  <h3 className="text-center text-lg md:text-xl mb-5 md:mb-10">Worked with the best of the best</h3>
  <div className="slider overflow-hidden">
    <div className="slider-track flex items-center space-x-4">
      {/* Logos */}
      <div className="logo p-2 md:p-5">
        <img src={green} alt="Green" className="w-20 md:w-28 lg:w-32" />
      </div>

      <div className="logo p-2 md:p-5">
        <img src={oasis} alt="Oasis" className="w-20 md:w-28 lg:w-32" />
      </div>
      <div className="logo p-2 md:p-5">
        <img src={alu} alt="ALU" className="w-20 md:w-28 lg:w-32" />
      </div>
      <div className="logo p-2 md:p-5">
        <img src={certa} alt="Certa" className="w-20 md:w-28 lg:w-32" />
      </div>
      <div className="logo p-2 md:p-5">
        <img src={cinetie} alt="Green" className="w-20 mt-5 md:w-28 lg:w-32" />
      </div>
      <div className="logo p-2 md:p-5">
        <img src={aisfm} alt="Green" className="w-20 md:w-28 lg:w-32" />
      </div>
      <div className="logo p-2 md:p-5">
        <img src={think} alt="Green" className="w-20 md:w-28 lg:w-32" />
      </div>
      
      <div className="logo p-2 md:p-5">
        <img src={codsoft} alt="CodSoft" className="w-20 md:w-28 lg:w-32" />
      </div>
      <div className="logo flex p-2 md:p-5 items-center pr-8 md:pr-16 lg:pr-20">
        <img src={baho} alt="Baho" className="w-20 md:w-28 lg:w-32" />
        <em className="font-serif hidden md:block">BahoRwanda</em>
      </div>
      
      <div className="logo flex p-2 md:p-5">
        <img src={career} alt="Career" className="w-20 md:w-28 lg:w-32" />
      </div>
      {/* Repeat logos for infinite scroll */}
      <div className="logo p-2 md:p-5">
        <img src={green} alt="Green" className="w-20 md:w-28 lg:w-32" />
      </div>
      <div className="logo p-2 md:p-5">
        <img src={oasis} alt="Oasis" className="w-20 md:w-28 lg:w-32" />
      </div>
      <div className="logo p-2 md:p-5">
        <img src={alu} alt="ALU" className="w-20 md:w-28 lg:w-32" />
      </div>
    </div>
  </div>
</div>

<style>{`
  .slider {
    width: 100%;
    overflow: hidden;
    position: relative;
  }

  .slider-track {
    display: flex;
    width: 200%; /* Enough width for smooth scrolling */
    animation: scroll 30s linear infinite;
  }

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%); /* Moves logos by 50% of container */
    }
  }
`}</style>


{/* what makes me different */}
<div   className="flex flex-col md:flex-row justify-between items-center bg-black text-white space-x-14 p-8 md:p-12 rounded-3xl shadow-lg w-4/5 border border-gray-600 mx-auto my-10">
      {/* Avatar/Image Section */}
      <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-6">
        <img src={charite1} alt="Avatar" className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover" />
      </div>
      
      {/* Text Section */}
      <div className="items-center md:text-left overflow-hidden animate-slide-up-content">
  <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up-h2">
    What makes me <em className="italic font-thin">different?</em>
  </h2>
  <p className="text-base animate-slide-up-p mb-4">
    <span>I craft unique product experiences that reflect a brand's personality and objectives. With a solid background in software engineering, I blend innovation with practicality, staying on top of design trends to ensure all projects are visually stunning and functionally flawless.</span>
  </p>
  <button
  className="bg-black text-white border border-gray-600 py-2 px-4 rounded-xl font-medium shadow hover:bg-gray-700 transition duration-300 animate-slide-up-button"
  onClick={() => document.getElementById('work-section').scrollIntoView({ behavior: 'smooth' })}
>
  <span>Browse My Work &rarr;</span>
</button>

</div>
    </div>

    {/* my work */}
    <div id="work-section" className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-28 py-10">
  {/* First Work Item */}
  

  <a href="https://www.cinetie.com/" target="_blank" rel="noopener noreferrer" className="block">
    <div className="group relative bg-black rounded-3xl border border-gray-600 shadow-lg overflow-hidden h-80">
      <div className="relative h-full w-full ">
        <img src={cine} alt="Meta Clone" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      </div>
      <div className="absolute bottom-4 left-0 w-full p-6 space-y-3 bg-gradient-to-t from-bottom-black to-transparent">
        <h3 className="text-white font-extrabold text-xl"><italic>cinetie</italic></h3>
        <p className="text-gray-200 font-semibold text-sm hidden md:block">
          A well designed platform for users to stream movies online in Africa.
        </p>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-b from-transparent to-black"></div> {/* Darkish Shadow at Bottom */}
    </div>
  </a>
  {/* Second Work Item */}
  <a href="https://develop.di25v93ak8arx.amplifyapp.com/" target="_blank" rel="noopener noreferrer" className="block">
    <div className="group relative bg-black rounded-3xl border border-gray-600 shadow-lg overflow-hidden h-80">
      <div className="relative h-full w-full ">
        <img src={aisfmbg} alt="Meta Clone" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      </div>
      <div className="absolute bottom-4 left-0 w-full p-6 space-y-3 bg-gradient-to-t from-bottom-black to-transparent">
        <h3 className="text-white font-extrabold text-xl"><italic>Aisfm</italic></h3>
        <p className="text-gray-200 font-semibold text-sm hidden md:block">
          A well designed platform for users to buy and showcase movies in Africa.
        </p>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-b from-transparent to-black"></div> {/* Darkish Shadow at Bottom */}
    </div>
  </a>
  {/* third Work Item */}
  <a href="https://thinkgreenafrika.org/" target="_blank" rel="noopener noreferrer" className="block">
    <div className="group relative bg-black rounded-3xl border border-gray-600 shadow-lg overflow-hidden h-80">
      <div className="relative h-full w-full ">
        <img src={thinkgreen} alt="Meta Clone" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      </div>
      <div className="absolute bottom-6 left-0 w-full p-6 bg-gradient-to-t from-bottom-black to-transparent">
        <h3 className="text-black font-extrabold text-xl"><italic>ThinkGreen Africa</italic></h3>
        <p className="text-black font-semibold text-sm hidden md:block">
        A platform for connecting top talent with premier opportunities for sustainable growth.
        </p>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-b from-transparent to-black"></div> {/* Darkish Shadow at Bottom */}
    </div>
  </a>
  {/* 4th Work Item */}
  <a href="https://github.com/charite-uwatwembi/crop_disease_prediction" target="_blank" rel="noopener noreferrer" className="block">
    <div className="group relative bg-black rounded-3xl border border-gray-600 shadow-lg overflow-hidden h-80">
      <div className="relative h-full w-full ">
        <img src={cropdisease} alt="Meta Clone" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      </div>
      <div className="absolute bottom-0 left-0 w-full p-6 space-y-2 bg-gradient-to-t from-bottom-black to-transparent">
        <h3 className="text-black font-extrabold text-xl"><italic>Crop Disease Prediction</italic></h3>
        <p className="text-black font-semibold text-sm hidden md:block">
        A machine learning model to classify crop diseases from images, addressing agricultural challenges  through AI.
        </p>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-b from-transparent to-black"></div> {/* Darkish Shadow at Bottom */}
    </div>
  </a>
{/* 5t Work Item */}
  <a href="https://wallet-web-app-22kq.vercel.app/" target="_blank" rel="noopener noreferrer" className="block">
    <div className="group relative bg-black rounded-3xl border border-gray-600 shadow-lg overflow-hidden h-80">
      <div className="relative h-full w-full aspect-[16/9]">
        <img src={wallet} alt="Meta Clone" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      </div>
      <div className="absolute bottom-8 left-0 w-full p-6 space-y-2 bg-gradient-to-t from-bottom-black to-transparent">
        <h3 className="text-black font-extrabold text-xl"><italic>wallet</italic></h3>
        <p className="text-black font-semibold text-sm hidden md:block">
          
        A wallet app for tracking expenses, budgets, and financial reports.
        </p>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-b from-transparent to-black"></div> {/* Darkish Shadow at Bottom */}
    </div>
  </a>

  {/* 6th Work Item */}
  
  <a href="https://charitecloned.netlify.app/" target="_blank" rel="noopener noreferrer" className="block">
    <div className="group relative bg-black rounded-3xl border border-gray-600 shadow-lg overflow-hidden h-80">
      <div className="relative h-full w-full aspect-[16/9]">
        <img src={meta} alt="Meta Clone" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      </div>
      <div className="absolute bottom-6 left-0 w-full p-6 space-y-3 bg-gradient-to-t from-bottom-black to-transparent">
        <h3 className="text-white font-extrabold text-xl">Meta Clone</h3>
        <p className="text-gray-200 font-semibold text-sm hidden md:block">
          A clone of Meta's interface with modern design and functionality.
        </p>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-b from-transparent to-black"></div> {/* Darkish Shadow at Bottom */}
    </div>
  </a>

  {/* 7th Work Item */}
  <a href="https://drive.google.com/file/d/1Xqi8ULCyy4Kjuy0ynbKeWq03A-5kbMsY/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="block">
    <div className="group relative bg-black rounded-3xl border border-gray-600 shadow-lg overflow-hidden h-80">
      <div className="relative h-full w-full aspect-[16/9]">
        <img src={Baho} alt="Baho App" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      </div>
      <div className="absolute bottom-6 left-0 w-full p-6 space-y-3 bg-gradient-to-t from-bottom-black to-transparent">
        <h3 className="text-black font-extrabold text-xl">Baho App</h3>
        <p className="text-black font-semibold text-sm hidden md:block">
          A beautiful mobile application designed to simplify booking appointments with healthcare professionals in Rwanda.
        </p>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-b from-transparent to-black"></div> {/* Darkish Shadow at Bottom */}
    </div>
  </a>

  {/* 8th Work Item */}
  

  <a href="https://lslsvpn.netlify.app/" target="_blank" rel="noopener noreferrer" className="block">
    <div className="group relative bg-black rounded-3xl border border-gray-600 shadow-lg overflow-hidden h-80">
      <div className="relative h-full w-full aspect-[16/9]">
        <img src={lasles} alt="Meta Clone" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      </div>
      <div className="absolute bottom-6 left-0 w-full p-6 space-y-3 bg-gradient-to-t from-bottom-black to-transparent">
        <h3 className="text-black font-extrabold text-xl">LaslesVPN Clone</h3>
        <p className="text-black font-semibold text-sm hidden md:block">
          A clone of LaslesVPN's interface with modern design and functionality.
        </p>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-b from-transparent to-black"></div> {/* Darkish Shadow at Bottom */}
    </div>
  </a>

  {/* seventh Work Item */}
  <a href="https://github.com/charite-uwatwembi/demo_rise360" target="_blank" rel="noopener noreferrer" className="block">
    <div className="group relative bg-black rounded-3xl border border-gray-600 shadow-lg overflow-hidden h-80">
      <div className="relative h-full w-full aspect-[16/9]">
        <img src={produce} alt="RiseFarmer360" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      </div>
      <div className="absolute bottom-6 left-0 w-full p-6 space-y-3 bg-gradient-to-t from-bottom-black to-transparent">
        <h3 className="text-white font-extrabold text-xl">RiseFarmer360</h3>
        <p className="text-gray-200 font-semibold text-sm hidden md:block">
          An application designed to empower farmers in Sub-Saharan Africa by addressing key challenges they face in modernizing farming practices.
        </p>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-b from-transparent to-black"></div> {/* Darkish Shadow at Bottom */}
    </div>
  </a>
  {/* 8th Work Item */}
  <a href="https://greenrwanda.netlify.app/" target="_blank" rel="noopener noreferrer" className="block">
    <div className="group relative bg-black rounded-3xl border border-gray-600 shadow-lg overflow-hidden h-80">
      <div className="relative h-full w-full aspect-[16/9]">
        <img src={greenRwanda} alt="GreenRwanda" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      </div>
      <div className="absolute bottom-6 left-0 w-full p-6 space-y-3 bg-gradient-to-t from-bottom-black to-transparent">
        <h3 className="text-white font-extrabold text-xl">GreenRwanda</h3>
        <p className="text-gray-200 font-semibold text-sm hidden md:block">
          A platform that connects individuals passionate about environmental sustainability, offering resources and opportunities to promote a greener Rwanda.
        </p>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-b from-transparent to-black"></div> {/* Darkish Shadow at Bottom */}
    </div>

    
  </a>
  
</div>





{/* what i am good at */}
<div   className="flex flex-col space-y-3  md:flex-row justify-between items-center bg-black text-white space-x-4 p-8 md:p-12 rounded-3xl shadow-lg w-4/5 border border-gray-600 mx-auto my-10">
      
      
      {/* Text Section */}
      <div className="text-center md:text-left space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What i am <em className="italic font-thin">good at?</em>
        </h2>
        
        <div className="flex flex-col items-center space-y-6 md:flex-row md:space-x-1 md:space-y-0">
  <div className="border border-gray-600 p-4 rounded-lg bg-black w-full md:w-1/2 lg:w-1/3">
    <h1 className="font-bold text-2xl text-white mb-4 text-center">Front-End Web Development</h1>
    <ul className="text-sm text-white space-y-1 list-disc list-inside">
      <h2 className="font-bold">Languages/Frameworks:</h2>
      <li>React.js</li>
      <li>Tailwind</li>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>Next.Js</li>
    </ul>
  </div>

  <div className="border border-gray-600 p-4 rounded-lg bg-black w-full md:w-1/2 lg:w-1/3">
    <h1 className="font-bold text-2xl text-white mb-4 text-center">Back-End Development</h1>
    <ul className="text-sm text-white space-y-1 list-disc list-inside">
      <h2 className="font-bold">Languages/Frameworks:</h2>
      <li>FastAPI (Python)</li>
      <li>Firebase</li>
      <li>Express.JS</li>
      <li>REST APIs</li>
      <li>Node.JS</li>
    </ul>
  </div>

  <div className="border border-gray-600 p-4 rounded-lg bg-black w-full md:w-1/2 lg:w-1/3">
    <h1 className="font-bold text-2xl text-white mb-4 text-center">Machine Learning & AI</h1>
    <ul className="text-sm text-white space-y-1 list-disc list-inside">
      <h2 className="font-bold">Languages/Frameworks:</h2>
      <li>Python (scikit-learn, TensorFlow)</li>
      <li>pandas</li>
      <li>NumPy</li>
      <li>FastAPI (for ML model deployment)</li>
    </ul>
  </div>

  <div className="border border-gray-600 p-4 rounded-lg bg-black w-full md:w-1/2 lg:w-1/3">
    <h1 className="font-bold text-2xl text-white mb-4 text-center">Mobile App Development</h1>
    <ul className="text-sm text-white space-y-1 list-disc list-inside">
      <h2 className="font-bold">Languages/Frameworks:</h2>
      <li>Flutter (for mobile apps)</li>
      <li>Firebase (backend)</li>
      <li>Dart (Flutter)</li>
      <li>React Native (for mobile apps)</li>
    </ul>
  </div>
</div>


        <button className="bg-black text-white border border-gray-600 py-2 px-4  md:px-64 rounded-xl font-medium shadow hover:bg-gray-700 transition duration-300"
        onClick={() => window.location.href = 'mailto:chariteuwatwembi@gmail.com?subject=Get%20in%20Touch&body=Hello%20Charite%2C%20I%27d%20like%20to%20get%20in%20touch%20with%20you!'}
        >
          Get in touch &rarr;
        </button>
      </div>

      {/* Avatar/Image Section */}
      <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-4">
        <img src={charite3} alt="Avatar" className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover" />
      </div>
    </div>

{/* footer */}
    <div   className='text-center space-y-10 mb-20'>
      <div className='text-center space-y-1'>
        <em className='text-xl font-serif '>U.Charite</em>
        // <p className='text-sm' >February, 2025</p>
        <p className='text-xs'>Kigali, Rwanda</p>
      </div>
      <div><p className='text-sm font-semibold'> Kigali, Rwanda ©2025 • Proudly Built With React.JS • Designed & Developed by Charite</p></div>
    </div>


    </div>
  );
}

export default App;
