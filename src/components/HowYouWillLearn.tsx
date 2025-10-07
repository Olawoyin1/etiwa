// import React from "react";

// const steps = [
//   {
//     number: "1",
//     title: "Virtual Live Class Experience",
//     description:
//       "Engage in interactive, real-time sessions with top professionals, ask questions, and gain industry insights.",
//     bg: "bg-pink-100",
//   },
//   {
//     number: "2",
//     title: "Expert Mentorship",
//     description:
//       "Learn from seasoned professionals who provide guidance, feedback, and career insights to accelerate your growth.",
//     bg: "bg-orange-100",
//   },
//   {
//     number: "3",
//     title: "Hands-on Capstone Projects",
//     description:
//       "Apply your skills to real-world challenges, building a strong portfolio and gaining practical experience.",
//     bg: "bg-indigo-100",
//   },
//   {
//     number: "4",
//     title: "AI-Integrated Dashboard",
//     description:
//       "Get tailored learning insights, AI-powered feedback, and smart tracking to enhance your progress.",
//     bg: "bg-green-100",
//   },
//   {
//     number: "5",
//     title: "Career-Ready Skills",
//     description:
//       "Graduate with job-ready skills and confidence, prepared to enter the workforce and make an impact from day one.",
//     bg: "bg-cyan-100",
//   },
// ];

// const HowYouWillLearn: React.FC = () => {
//   return (
//     <section className="py-20 bg-white">
//       {/* Section Tag */}
    //   <div className="flex justify-center mb-6">
    //     <p className="bg-[#FFF9F0] text-[#7D6007] text-sm font-semibold px-10 py-3 rounded-xl">
    //       How You Will Learn
    //     </p>
    //   </div>

    //   {/* Title & Description */}
    //   <div className="max-w-3xl mx-auto text-center mb-12">
    //     <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
    //       Learn by Doing
    //     </h2>
    //     <p className="text-lg text-gray-700">
    //       Our 9-month program is designed to take you from novice to job-ready professional.
    //     </p>
    //   </div>

//       {/* Steps */}
//       <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-4">
//         {steps.map((step) => (
//           <div
//             key={step.number}
//             className={`${step.bg} rounded-xl shadow-sm p-6 flex flex-col`}
//           >
//             <div className="flex items-center justify-center w-9 h-9 text-xl font-bold text-[#F24E1E] bg-[#FFF4E2] rounded-md mb-8">
//               {step.number}
//             </div>
//             <h3 className="text-xl font-semibold text-gray-800 mb-2">
//               {step.title}
//             </h3>
//             <p className="text-gray-600">{step.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default HowYouWillLearn;



import type { FC } from "react";

const HowYouWillLearn: FC = () => {
const steps = [
  {
    number: "1",
    title: "On-Site Practical Training",
    description:
      "Gain real, hands-on experience working with actual tools, equipment, and real-world scenarios under expert supervision.",
    bg: "bg-pink-100",
  },
  {
    number: "2",
    title: "Expert Mentorship",
    description:
      "Learn from seasoned professionals who provide guidance, feedback, and career insights to accelerate your growth.",
    bg: "bg-orange-100",
  },
  {
    number: "3",
    title: "Hands-on Capstone Projects",
    description:
      "Apply your skills to real-world challenges, building a strong portfolio and gaining practical experience.",
    bg: "bg-indigo-100",
  },
  {
    number: "4",
    title: "Industry Standard Tools & Equipment",
    description:
      "Train with the same tools and technology used by professionals in the field, ensuring you’re fully prepared for real-world work environments.",
    bg: "bg-green-100",
  },
  {
    number: "5",
    title: "Career-Ready Skills",
    description:
      "Graduate with job-ready skills and confidence, prepared to enter the workforce and make an impact from day one.",
    bg: "bg-cyan-100",
  },
];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        {/* Heading */}
         <div className="flex justify-center mb-6">
        <p className="bg-[#FFF9F0] text-[#7D6007] text-sm font-semibold px-10 py-3 rounded-xl">
          How You Will Learn
        </p>
      </div>

      {/* Title & Description */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Learn by Doing
        </h2>
        <p className="text-lg text-gray-700">
          Our 9-month program is designed to take you from novice to job-ready professional.
        </p>
      </div>

        {/* Row 1: 3 Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {steps.slice(0, 3).map((step) => (
            <div
            key={step.number}
            className={`${step.bg} rounded-xl shadow-sm p-6 flex flex-col`}
          >
            <div className="flex items-center justify-center w-9 h-9 text-xl font-bold text-[#F24E1E] bg-[#FFF4E2] rounded-md mb-8">
              {step.number}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {step.title}
            </h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
          ))}
        </div>

        {/* Row 2: 2 Cards full width */}
        <div className="grid md:grid-cols-2 gap-6">
          {steps.slice(3).map((step) => (
            <div
            key={step.number}
            className={`${step.bg} rounded-xl shadow-sm p-6 flex flex-col`}
          >
            <div className="flex items-center justify-center w-9 h-9 text-xl font-bold text-[#F24E1E] bg-[#FFF4E2] rounded-md mb-8">
              {step.number}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {step.title}
            </h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowYouWillLearn;
