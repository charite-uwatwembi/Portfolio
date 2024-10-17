import React from 'react';
import charite from './images/charite.jpg';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import codsoft from './images/codsoft.png';
import certa from './images/certa.png';
import oasis from './images/oasis.png';
import green from './images/green.png';
import baho from './images/baho.png';
import alu from './images/ALU.png';
import career from './images/careersprint.png';



function App() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-black text-white">
      {/* Bio and Image section */}
      <div className="flex flex-col md:flex-row justify-between items-stretch w-4/5 mb-10 mt-10 mx-auto">
  {/* Bio Section */}
  <header className="bg-black p-5 pt-10 pb-0 rounded-3xl shadow-md border border-gray-600 flex-grow md:mr-5 mb-5 md:mb-0">
    <div className="flex flex-col space-y-6">
      <div className="lg:flex place-items-center justify-between  ">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">Hey, I'm Charite</h1>
          <p className="text-sm m-2">Product (UX) Designer</p>
        </div>
        <div className="flex space-x-4 ml-5 items-center mt-5">
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
          <button className="bg-black text-white px-4 rounded-xl font-medium border border-gray-600 py-2 shadow">
            Get In Touch
          </button>
        </div>
      </div>

      <h2 className="text-4xl m-0 font-semibold">
        Obsessed with creating <em className="font-thin">timeless</em> digital products experiences for <em className="font-thin">You-sers</em>
      </h2>
      <p className="text-lg">Hey 👋, I'm Charite, welcome to my world. I love building beautiful, timeless web apps & digital products experiences for users</p>
    </div>
  </header>

  {/* Image Section */}
  <div className="bg-black rounded-3xl shadow-md border border-gray-600 flex-none md:w-1/3 flex justify-center items-center w-full">
    <img src={charite} alt="Charite" className="w-full h-full object-cover rounded-3xl" />
  </div>
</div>


      {/* The animation div (below the content) */}
      <div className="animation px-4 md:px-20 lg:px-40">
  <h3 className="text-center text-lg md:text-xl mb-5 md:mb-10">Worked with the best of the best</h3>
  <div className="slider overflow-hidden">
    <div className="slider-track flex items-center space-x-4">
      <div className="logo p-2 md:p-5">
        <img src={green} alt="Green" className="w-24 md:w-32 lg:w-40" />
      </div>
      <div className="logo p-2 md:p-5">
        <img src={oasis} alt="Oasis" className="w-24 md:w-32 lg:w-40" />
      </div>
      <div className="logo p-2 md:p-5">
        <img src={alu} alt="ALU" className="w-24 md:w-32 lg:w-40" />
      </div>
      <div className="logo p-2 md:p-5">
        <img src={certa} alt="Certa" className="w-24 md:w-32 lg:w-40" />
      </div>
      <div className="logo p-2 md:p-5"> 
        <img src={codsoft} alt="CodSoft" className="w-24 md:w-32 lg:w-40" />
      </div>
      <div className="logo flex p-2 md:p-5 items-center pr-16 md:pr-32">
        <img src={baho} alt="Baho" className="w-24 md:w-32 lg:w-40" />
        <em className="font-serif hidden md:block">BahoRwanda</em>
      </div>
      <div className="logo flex p-2 md:p-5">
        <img src={career} alt="Career" className="w-24 md:w-32 lg:w-40" />
      </div>
      {/* Duplicate the logos to create a seamless loop */}
      <div className="logo p-2 md:p-5">
        <img src={green} alt="Green" className="w-24 md:w-32 lg:w-40" />
      </div>
      <div className="logo p-2 md:p-5">
        <img src={oasis} alt="Oasis" className="w-24 md:w-32 lg:w-40" />
      </div>
      <div className="logo p-2 md:p-5">
        <img src={alu} alt="ALU" className="w-24 md:w-32 lg:w-40" />
      </div>
      <div className="logo p-2 md:p-5">
        <img src={certa} alt="Certa" className="w-24 md:w-32 lg:w-40" />
      </div>
      <div className="logo p-2 md:p-5"> 
        <img src={codsoft} alt="CodSoft" className="w-24 md:w-32 lg:w-40" />
      </div>
      <div className="logo flex p-2 md:p-5 items-center pr-16 md:pr-32">
        <img src={baho} alt="Baho" className="w-24 md:w-32 lg:w-40" />
        <em className="font-serif hidden md:block">BahoRwanda</em>
      </div>
      <div className="logo flex p-2 md:p-5">
        <img src={career} alt="Career" className="w-24 md:w-32 lg:w-40" />
      </div>
    </div>
  </div>
</div>

<style jsx>{`
  .slider {
    width: 100%;
    position: relative;
  }
  .slider-track {
    display: flex;
    width: calc(200%); /* Wider track to ensure smooth scrolling */
    animation: scroll 20s linear infinite;
  }
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`}</style>

    </div>
  );
}

export default App;
