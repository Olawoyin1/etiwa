import React from "react";

interface Client {
  id: string;
  name: string;
  logoSrc: string;
  altText?: string;
}

const clients: Client[] = [
  {
    id: "client1",
    name: "Dangote Group",
    logoSrc: "../../Images/c1.png",
    altText: "Dangote Logo",
  },
  {
    id: "client2",
    name: "Shell Nigeria",
    logoSrc: "../../Images/c2.jpg",
    altText: "Shell Logo",
  },
  {
    id: "client3",
    name: "Lafarge Africa",
    logoSrc: "../../Images/c3.jpg",
    altText: "Lafarge Logo",
  },
  {
    id: "client4",
    name: "MTN Nigeria",
    logoSrc: "../../Images/c4.png",
    altText: "MTN Logo",
  },
  {
    id: "client5",
    name: "Nigerian Breweries",
    logoSrc: "../../Images/c5.png",
    altText: "Nigerian Breweries Logo",
  },
  {
    id: "client6",
    name: "Chevron Nigeria",
    logoSrc: "../../Images/c6.png",
    altText: "Chevron Logo",
  },
];

const ClientsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Tagline */}
        <div className="inline-block mb-4 bg-[#E8F0FF] text-[#0D47A1] text-sm font-semibold px-10 py-3 rounded-xl">
          Trusted by Leading Brands
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our Esteemed Clients
        </h2>

        {/* Subheading */}
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          We are proud to have partnered with top organizations across industries,
          delivering impactful training and workforce development solutions.
        </p>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center">
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex items-center justify-center p-4 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={client.logoSrc}
                alt={client.altText || client.name}
                className="max-h-24 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
                title={client.name}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
