import React from "react";

interface Partner {
  id: string;
  name: string;
  logoSrc: string; 
  altText?: string;
}

const partners: Partner[] = [
  {
    id: "nbte",
    name: "National Board for Technical Education (NBTE)",
    logoSrc: "../../Images/p1.png",
    altText: "NBTE Logo",
  },
  {
    id: "coren",
    name: "Council for the Regulation of Engineering in Nigeria (COREN)",
    logoSrc: "../../Images/p2.jpg",
    altText: "COREN Logo",
  },
  {
    id: "cpd-uk",
    name: "CPD Certification Service (UK)",
    logoSrc: "../../Images/p3.png",
    altText: "CPD UK Logo",
  },
  {
    id: "nbte2",
    name: "National Board for Technical Education (NBTE)",
    logoSrc: "../../Images/p4.png",
    altText: "NBTE Logo",
  },
  {
    id: "coren2",
    name: "Council for the Regulation of Engineering in Nigeria (COREN)",
    logoSrc: "../../Images/p5.png",
    altText: "COREN Logo",
  },
  {
    id: "cpd-uk2",
    name: "CPD Certification Service (UK)",
    logoSrc: "../../Images/p6.png",
    altText: "CPD UK Logo",
  },
];

const PartnersSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Tagline */}
        <div className="inline-block mb-4 bg-[#F4F1E8] text-[#7D6007] text-sm font-semibold px-10 py-3 rounded-xl">
          Trusted by Industry Leaders
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our Valued Partners
        </h2>

        {/* Subheading */}
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          We’re proud to collaborate with leading organizations and institutions
          that share our mission to empower and transform lives.
        </p>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex items-center justify-center p-4 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={partner.logoSrc}
                alt={partner.altText || partner.name}
                className="max-h-24 w-auto object-contain md:grayscale hover:grayscale-0 transition duration-300"
                title={partner.name}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
