import React from 'react';
import charite from './images/charite.jpg';
import { FaGithub, FaLinkedin } from 'react-icons/fa';


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
      <div className="animation">
        <h3 className="text-center text-xl mb-10">Worked with the best of the best</h3>
        <div className="slider">
          <div className="slider-track flex animate-scroll">
            <div className="logo p-5">InternQuest</div>
            <div className="logo p-5">Theo</div>
            <div className="logo p-5">Mulla</div>
            <div className="logo p-5">Kayko</div>
            <div className="logo p-5">Upwork</div>
            {/* Add more logos if needed */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
