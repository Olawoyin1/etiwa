// import React from "react";

// const Intro: React.FC = () => {
//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
//         {/* Text Section */}
//         <div className="space-y-6">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//             Who We Are
//           </h2>

//           <p className="text-gray-700 leading-relaxed">
//             ETIWA TECH is a state-of-the-art not-for-profit technical vocational
//             training institution located in Lagos, Nigeria. We deliver relevant,
//             high-quality, globally recognized training that equips people with
//             the skills and knowledge needed for successful careers in the
//             construction industry.
//           </p>

//           <p className="text-gray-700 leading-relaxed">
//             Established since 2013, we offer training in the following trades:
//           </p>

//           <ul className="list-disc list-inside text-gray-700 grid grid-cols-2 gap-y-1">
//             <li>Masonry</li>
//             <li>Electrical</li>
//             <li>HVAC</li>
//             <li>Solar Photovoltaic</li>
//             <li>Plumbing</li>
//           </ul>

//           <p className="text-gray-700 leading-relaxed">
//             We offer upskilling, empowerment, and apprenticeship programmes,
//             specifically designed for vulnerable groups within society such as
//             unemployed/underemployed youth, migrant returnees, orphans, and
//             women.
//           </p>

//           <p className="text-gray-700 leading-relaxed">
//             We also offer vocational training to companies interested in
//             upskilling their employees.
//           </p>
//         </div>

//         {/* Image Section */}
//         <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-lg group">
//           <img
//             src="https://images.unsplash.com/photo-1581093588401-22f6362fc803?auto=format&fit=crop&w=800&q=80"
//             alt="Vocational training at Etiwa Tech"
//             className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Intro;



// import React from "react";

// const IntroSplitCards: React.FC = () => {
//   return (
//     <section className="py-24 bg-gray-50">
//       <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        
//         {/* Right: Content */}
//         <div>
//           <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
//           <p className="text-gray-600 mb-6">
//             ETIWA TECH is a not-for-profit technical vocational training institution in Lagos, delivering high-quality, globally recognized programs in construction trades since 2013.
//           </p>

//           {/* Cards */}
//           <div className="grid sm:grid-cols-2 gap-6">
//             <div className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition">
//               <h3 className="text-xl font-semibold mb-2 text-[#0062A7]">Our Focus</h3>
//               <p className="text-gray-600 text-sm">
//                 Courses in Masonry, Electrical, HVAC, Solar PV, and Plumbing.
//               </p>
//             </div>
//             <div className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition">
//               <h3 className="text-xl font-semibold mb-2 text-[#70BF49]">Empowerment</h3>
//               <p className="text-gray-600 text-sm">
//                 Targeted training for vulnerable groups like youth and women.
//               </p>
//             </div>
//             <div className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition sm:col-span-2">
//               <h3 className="text-xl font-semibold mb-2 text-[#0062A7]">Corporate Training</h3>
//               <p className="text-gray-600 text-sm">
//                 Tailored programs for companies seeking workforce upskilling.
//               </p>
//             </div>
//           </div>
//         </div>


//         {/* Left: Image */}
//         <div>
//           <img
//             src="../../Images/abt.jpg"
//             alt="ETIWA training"
//             className="w-full h-120  object-contain"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default IntroSplitCards;


import React from "react";

const IntroSplitCards: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-0 grid md:grid-cols-[1.6fr_1fr] gap-12 items-center">

        {/* LEFT: Content (Takes more space now) */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            ETIWA TECH is a state-of-the-art not-for-profit technical vocational training institution located in Lagos, Nigeria. 
            We deliver relevant, high quality, globally recognized training that equips people with the skills and knowledge 
            needed for successful careers in the construction industry.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Established since 2013, we offer training in the following trades:
          </p>

          {/* Courses */}
          <ul className="grid grid-cols-2 gap-2 mb-8 text-gray-700 font-medium">
            <li>• Masonry</li>
            <li>• Electrical</li>
            <li>• HVAC</li>
            <li>• Solar Photovoltaic</li>
            <li>• Plumbing</li>
          </ul>

          <p className="text-gray-700 leading-relaxed mb-6">
            We offer upskilling, empowerment and apprenticeship programmes, specifically designed for vulnerable groups within the society 
            such as the unemployed/underemployed youth, migrant returnees, orphans and women.
          </p>

          <p className="text-gray-700 leading-relaxed">
            We also offer vocational training to companies interested in upskilling their employees.
          </p>

          
        </div>

        {/* RIGHT: Image (now smaller) */}
        <div className="relative">
          <img
            src="../../Images/abt.jpg"
            alt="ETIWA Tech Training"
            className="w-full h-[500px] object-contain "
          />
        </div>
      </div>
    </section>
  );
};

export default IntroSplitCards;
