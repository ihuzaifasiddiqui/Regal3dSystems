  import React from 'react';
  import { Link } from 'react-router';
  import Navbar from './navbar';
import QuoteButton from './quoteButton';
import logo from '../assets/Regal3dhorizontal.png';

  const HeroSection = () => {
      return (
        <>
            <Navbar/>
        
          <div
          className="w-full h-screen bg-linear-to-b bg-[url(./assets/herosection2.png)] bg-cover bg-fixed bg-center bg-no-repeat z-0"> 
            <div className='absolute inset-0 bg-gradient-to-b from-black/40 to-black/20 z-10'></div>

          {/* Logo in top left corner */}
          <div className="absolute top-4 left-4 z-20">
            <Link to="/">
              <img src={logo} alt="Regal 3D Logo" className="h-12 w-auto md:h-12 m-1" />
            </Link>
          </div>

          {/* Your other content goes here */}
          <div className="hero-text relative z-10 flex flex-col items-start justify-center h-full w-1/2 text-white text-left space-y-4 px-3 animate-slide-in-left transition-transform duration-300 md:px-8 ">
            <h1 className="text-5xl leading-tight  md:text-7xl font-medium ">Shaping the world with 3D printing!!</h1>
            <p className="mt-4 text-lg whitespace-nowrap ">Professional 3D Solutions Under One Roof</p>
            <QuoteButton/>
          </div>
        </div>
        </>
      );
  };

  export default HeroSection;