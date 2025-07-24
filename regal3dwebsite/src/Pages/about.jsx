import React from "react";
import Footer from "../Components/footer";
import Navbar from "../Components/navbar";
import FounderImage from "../assets/founder.jpg"; // Make sure the image path matches your actual file location

const About = () => {
  return (
    <div>
      <Navbar />

      <section className="bg-[#00060F] w-full h-full p-10 z-0">
        <h1 className="text-white text-3xl font-light py-10">Who We Are</h1>

        <div className="bg-[#242834] w-full px-6 py-16 md:px-16 flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Text Content */}
          <div className="text-white md:w-1/2 space-y-6">
            <h2 className="text-2xl md:text-3xl font-light">
              Meet The Founder - Habeeb Uddin
            </h2>
            <p className="text-sm md:text-base text-gray-300">
              With over <strong>4+ years of hands-on experience</strong> in
              additive manufacturing and product development,
              <strong>Habeeb</strong> has engineered a wide range of custom 3D
              printers — from
              <strong>large-format FDM systems</strong> and{" "}
              <strong>pellet extruders</strong> to{" "}
              <strong>bio 3D printers</strong> and advanced{" "}
              <strong>dual-nozzle IDEX setups</strong>. His expertise spans the
              full product development cycle, including{" "}
              <strong>3D design</strong>, <strong>prototyping</strong>,{" "}
              <strong>CNC machining</strong>,<strong>laser cutting</strong>, and{" "}
              <strong>metal fabrication</strong>. Deeply involved in the
              automotive and manufacturing sectors, he focuses on{" "}
              <strong>reverse engineering</strong>,{" "}
              <strong>custom part fabrication</strong>, and
              <strong>design optimization</strong>. A strong advocate for
              digital manufacturing, he regularly leads{" "}
              <strong>workshops</strong> to inspire and equip future engineers.
              At the core of the brand is a clear mission :
              <strong>
                {" "}
                to shape the world through the possibilities of 3D printing
              </strong>
              .{" "}
            </p>
          </div>

          {/* Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={FounderImage}
              alt="3D Printer"
              className="w-full max-w-md object-contain"
            />
          </div>
        </div>
      </section>

      <section className="relative flex flex-col h-full justify-center z-0 bg-cover bg-fixed bg-center bg-no-repeat bg-[url(./assets/aboutimage.jpg)]">
        {/* Mission Label */}
        <div className="absolute top-0 left-20 bg-white px-10 py-2 rounded-b-xl shadow text-[#0F3F63] font-semibold z-20 text-md sm:text-base">
          Our Mission
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 z-10"></div>

        {/* Mission Content */}
        <div className="flex flex-col px-8 sm:px-20 py-20 z-20 items-start justify-center h-full">
          <h1 className="text-left text-2xl font-medium text-white z-10 md:w-2/3">
            We power innovation with 3D printing, prototyping, and manufacturing
            solutions. Partnering with startups, educators, and industries, we
            bring ideas to life. Through workshops and outreach, we inspire the
            next generation of creators.
          </h1>
        </div>

        {/* Core Values */}
        <div className="z-20 px-8 sm:px-20 pb-20">
          <h2 className="text-white text-lg font-semibold">
            <span className="bg-white text-[#0F3F63] rounded-t-xl px-4 py-1 inline-block shadow">
              Core Values
            </span>
          </h2>

          {/* Unified Card */}
          <div className="bg-[#0C0F16]  p-8 md:p-10 flex flex-col md:flex-row justify-between gap-6 md:gap-10 text-white">
            {/* Value Block */}
            <div className="flex-1">
              <div className="flex items-center mb-3">
                <div className="w-1 h-6 bg-blue-500 rounded-full mr-3"></div>
                <h3 className="text-lg font-semibold">Innovation</h3>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                We embrace cutting-edge technology to solve real-world problems
                and constantly push the boundaries of digital manufacturing.
              </p>
            </div>

            <div className="flex-1">
              <div className="flex items-center mb-3">
                <div className="w-1 h-6 bg-blue-500 rounded-full mr-3"></div>
                <h3 className="text-lg font-semibold">Transparency</h3>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                We believe in clear, honest communication—with our team,
                clients, and partners—at every step of the journey.
              </p>
            </div>

            <div className="flex-1">
              <div className="flex items-center mb-3">
                <div className="w-1 h-6 bg-blue-500 rounded-full mr-3"></div>
                <h3 className="text-lg font-semibold">Accessibility</h3>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                We strive to make high-end 3D printing tools and knowledge
                available to everyone—from startups to students.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
