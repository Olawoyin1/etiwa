import React from "react";

interface Accreditor {
  id: string;
  name: string;
  logoSrc: string; // path or URL to the logo image
  altText?: string;
}

const accreditors: Accreditor[] = [
  {
    id: "nbte",
    name: "National Board for Technical Education (NBTE)",
    logoSrc: "../../Images/a.png",
    altText: "NBTE Logo",
  },
  {
    id: "coren",
    name: "Council for the Regulation of Engineering in Nigeria (COREN)",
    logoSrc: "../../Images/b.png",
    altText: "COREN Logo",
  },
  {
    id: "cpd-uk",
    name: "CPD Certification Service (UK)",
    logoSrc: "../../Images/c.png",
    altText: "CPD UK Logo",
  },
  {
    id: "nbte",
    name: "National Board for Technical Education (NBTE)",
    logoSrc: "../../Images/d.png",
    altText: "NBTE Logo",
  },
  {
    id: "coren",
    name: "Council for the Regulation of Engineering in Nigeria (COREN)",
    logoSrc: "../../Images/e.jpeg",
    altText: "COREN Logo",
  },
  {
    id: "cpd-uk",
    name: "CPD Certification Service (UK)",
    logoSrc: "../../Images/f.jpeg",
    altText: "CPD UK Logo",
  },
  // add more as needed
];

const AccreditedLogos: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-0 text-center">
        <div className="inline-block mb-4 bg-[#FFF9F0] text-[#7D6007] text-sm font-semibold px-10 py-3 rounded-xl">Officially Accredited</div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          We Are Accredited Locally & Globally
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          We are proud to be recognized by regulatory bodies both within Nigeria and internationally.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center">
          {accreditors.map((acc) => (
            <div key={acc.id} className="flex items-center justify-center p-4">
              <img
                src={acc.logoSrc}
                alt={acc.altText || acc.name}
                className="max-h-24 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccreditedLogos;
