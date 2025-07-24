import React from 'react';
import Footer from "../Components/footer";
import Navbar from "../Components/navbar";
import QuoteButton from '../Components/quoteButton';
const servicesList = [
  {
    title: "Rapid Prototyping Services: From Concept to Reality",
    description:
"We offer rapid prototyping services to quickly turn your ideas into high-precision models. Starting from your 3D CAD design or a consultation with our experts, we guide you through material selection and fabrication. Using advanced 3D printing and CNC methods, we deliver accurate, high-quality prototypes. Post-processing and testing ensure your model is refined, functional, and production-ready."
  },
  {
    title: "3D Designing & Analysis: Precision-Driven Innovation",
    description:
      "We provide 3D designing and analysis services to create, refine, and optimize your product designs with precision. Using advanced CAD modeling and simulation tools, we assess structural, thermal, and motion performance. Our expert-driven approach ensures functionality, reduces development costs, and accelerates time to market. Ideal for concept visualization, design validation, and production-ready solutions.",
  },
  {
    title: "Professional 3D Printer Maintenance: Keep Your Prints Perfect",
    description:
      "We offer professional 3D printer maintenance to keep your machines running smoothly and efficiently. Our expert technicians handle cleaning, calibration, part replacements, and troubleshooting for all major brands. Regular servicing helps prevent failures, improve print quality, and extend printer lifespan. Minimize downtime and ensure consistent, high-quality output with our reliable maintenance support.",
  },
  {
    title: "3D Printing Workshops: Learn, Create, Innovate",
    description:
      "We offer hands-on 3D printing workshops for beginners, enthusiasts, and professionals. Led by experts, sessions cover 3D modeling, printer operation, material selection, and troubleshooting. Ideal for individuals, schools, or businesses, our workshops provide practical training and interactive learning. Enhance your skills and turn ideas into reality with 3D printing.",
  },
  {
    title: "Reverse Engineering with 3D Scanning: Precision Redefined",
    description:
      "We offer reverse engineering services using advanced 3D scanning to accurately recreate or improve existing parts. Our high-precision scanners capture detailed geometries for precise digital modeling and refinement. Ideal for redesigning obsolete components, enhancing performance, or customizing parts. Streamline development, cut costs, and innovate faster with our expert solutions.",
  },
  {
    title: "On demand Custom 3D printers",
    description:
      "We design custom 3D printers tailored to your specific production needs, from desktop systems to industrial machines. Our solutions offer flexible configurations, including extruder types (direct drive, Bowden, multi-material), build volumes, heated enclosures, and advanced motion systems (CoreXY, Cartesian, Delta). We also specialize in syringe-based printers for precise material dispensing in applications like bioprinting and material extrusion. Each unit is fully calibrated and tested for reliability, performance, and material compatibility. Our team ensures seamless integration into your digital manufacturing workflows for optimized output and scalability.",
  },
];

const Services = () => {
  return (
    <>
    <Navbar/>
    <section className='bg-[#00060F] w-full h-full p-10 z-0'>
      <h1 className='text-white text-3xl font-light py-20'>What We Can Do for You</h1>
   
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 ">
        {servicesList.map((service, index) => (
          <div
            key={index}
            className="bg-[#2a2c34] text-white p-6  shadow border border-gray-700"
          >
            <div className="flex items-start gap-2">
              <div className="w-1 h-6 bg-blue-500 rounded-sm mt-1" />
              <h3 className="text-xl font-semibold">{service.title}</h3>
            </div>
            <p className="text-sm text-gray-300 mt-4 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
    </div>
    </section>
    <section className='relative flex h-full justify-center z-0 bg-cover bg-fixed bg-center bg-no-repeat bg-[url(./assets/skull.jpg)]'>
    {/* Dark gradient overlay */}
    <div className='absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 z-10'></div>
    
    <div className='flex flex-col p-40 z-20 items-center justify-center h-full'>
        <h1 className='text-center text-4xl font-medium text-white z-10'> "We all have our time machines, don't we. Those that take us back are memories... those that carry us forward are dreams."</h1>
        <p className='font-bold text-xs text-white p-5 z-10'> HG Wells</p>
        <QuoteButton/>
    </div>
</section>
    <Footer/>
    </>
  );
};

export default Services;