import React, { useEffect, useState } from "react";
import robotImage from "../assets/robot.png"; // for reference path
import cubeImage from "../assets/cube.svg";
import precisionImage from "../assets/precision.svg";
import rollPaperImage from "../assets/rollpaper.svg";
import gearIcon from "../assets/gear.svg";
export default function WhatWeOffer() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scale value based on scroll position
  //   const scale = 1 - scrollY * 0.0003; // tweak the multiplier for speed
  //   const scale = Math.max(1.15 - scrollY * 0.005, 1); // starts at 1.15, zooms out
  // const scale = Math.min(1 + scrollY * 0.0004, 1.15); // zoom in a bit
  const translateX = Math.min(scrollY * 0.005, 100); // max 60px left
  const translateY = Math.min(scrollY * 0.005, 100); // max 60px up

  const features = [
    {
      title: "Custom 3D Printers",
      description:
        "We design and build custom 3D printers tailored to your production needs — from desktop units to industrial-scale machines. Each printer is carefully assembled, tested, and optimized to deliver high performance right out of the box.",
      icon: <img src={precisionImage} alt="" />,
    },
    {
      title: "High-Quality Materials",
      description:
        "We supply top-grade 3D printing materials including PLA, ABS, PETG, TPU, and engineering blends like carbon fiber. All materials are stored in ideal conditions to ensure consistent, reliable print quality.",
      icon: <img src={cubeImage} alt="" />,
    },
    {
      title: "Professional 3D Printer Maintenance",
      description:
        " Our certified technicians offer scheduled maintenance, troubleshooting, and repair services for all major 3D printer models. We keep your machines running at peak performance with minimal downtime.",
      icon: <img src={gearIcon} alt="" />,
    },
    {
      title: "Experienced Service Advisor",
      description:
        "Get expert guidance from seasoned professionals who understand 3D printing inside out. We offer personalized support, honest advice, and ongoing assistance to help you get the most from your equipment.",
      icon: <img src={rollPaperImage} alt="" />,
    },
  ];

  return (
    <section className="bg-[#0F3F63] min-h-screen relative overflow-hidden flex items-center px-6 sm:px-12 lg:px-20 text-white">
      <div className="absolute top-0 left-4 sm:left-10 bg-white px-4 sm:px-10 py-2 rounded-b-xl shadow text-[#0F3F63] font-semibold z-20 text-sm sm:text-base">
        What We Offer
      </div>

      {/* Background Image with Zoom on Scroll */}
      {/* Background */}
      <div
        className="absolute bg-[#24415B] inset-0 bg-no-repeat bg-left-top bg-cover z-0 transition-transform duration-100"
        style={{
          backgroundImage: `url(${robotImage})`,
          transform: `scale(1) translate(${translateX}px, ${translateY}px)`,
        }}
      />

      {/* Content Wrapper with top padding for mobile */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-8 pt-24 pb-24 sm:pt-32 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="space-y-3">
              <div className="w-16 h-16 border border-white rounded-2xl flex items-center justify-center">
                <div className="text-4xl">{feature.icon}</div>
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-sm text-white/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
