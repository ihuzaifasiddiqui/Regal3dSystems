import React from "react";

const testimonials = [
  {
    name: "Lyla Rosen",
    role: "Chief Product Officer, Mico",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "I'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.",
  },
  {
    name: "Ben Dersler",
    role: "Head of Design, DimenXen",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    text: "I'm a testimonial. Click to edit me and add text that says something nice about you and your services.",
  },
  {
    name: "Ryan Fry",
    role: "Product Designer, Drolo",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    text: "I'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.",
  },
];

const Testimonials = () => {
  return (
    <section className="relative bg-gray-900 text-white py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="absolute top-0 left-4 sm:left-10 bg-white px-4 sm:px-10 py-2 rounded-b-xl shadow text-[#0F3F63] font-semibold z-20 text-sm sm:text-base">
          Testimonials{" "}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 rounded-lg shadow-xl relative hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="border-l-4 border-blue-500 pl-6 mb-6">
                <p className="text-lg leading-relaxed">{testimonial.text}</p>
              </div>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full mr-6 border-2 border-blue-500"
                />
                <div>
                  <h4 className="font-bold text-white text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-400 text-sm mt-1">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
