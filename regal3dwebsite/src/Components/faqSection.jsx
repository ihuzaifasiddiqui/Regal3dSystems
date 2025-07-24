import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: " What services does your startup offer?",
    answer: `We offer a complete range of product development and manufacturing services including:

    • 3D Designing & Modeling
    • Prototyping & Functional Testing
    • Reverse Engineering
    • Vacuum Casting
    • Custom 3D Printers
    • Technical Workshops for Schools, Colleges & Institutions`,
  },
  {
    question: "Do you work with startups or only large companies?",
    answer:
      "We work with everyone—startups, entrepreneurs, students, educational institutions, and large organizations. Our goal is to make advanced manufacturing accessible to all, regardless of size or scale.",
  },
  {
    question: "What types of 3D printing do you offer?",
    answer:
      "We offer services primarily using Fused Deposition Modeling (FDM) and SLA/DLP technologies. These cover a wide range of applications—from rapid prototyping to detailed functional parts. FDM is ideal for strong, durable prototypes, while SLA/DLP provides high-resolution prints suitable for intricate designs and smooth surface finishes.",
  },
];

export default function faqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full bg-[#0A0F1A] text-white relative">
      {/* Small decorative div in top-left corner */}

      <div className="absolute top-0 left-4 sm:left-10 bg-white px-4 sm:px-10 py-2 rounded-b-xl shadow text-[#0F3F63] font-semibold z-20 text-sm sm:text-base">
        Frequently Asked Questions (FAQs)
      </div>

      <div className="w-full max-w-screen-xl mx-auto divide-y divide-zinc-800 pt-16 pb-10">
        {faqs.map((faq, index) => (
          <div key={index} className="w-full">
            <button
              className="w-full flex justify-between items-center py-5 px-1 sm:px-12 text-left font-medium hover:bg-slate-800 transition-all"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <ChevronDown
                className={`h-4 w-4 text-zinc-400 transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-6  sm:px-12 pb-6  pt-6 text-md text-zinc-300 leading-relaxed whitespace-pre-line">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
