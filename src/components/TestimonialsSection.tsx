
// import React from "react";
// import Slider from "react-slick";

// interface Testimonial {
//   id: number;
//   name: string;
//   role: string;
//   quote: string;
//   image: string;
// }

// const testimonials: Testimonial[] = [
//   {
//     id: 1,
//     name: "Aisha Bello",
//     role: "Construction Apprentice",
//     quote:
//       "ETIWA TECH changed my life. I gained hands-on experience and landed a job immediately after completing the training.",
//     image: "../../Images/profile.png",
//   },
//   {
//     id: 2,
//     name: "Samuel Adeyemi",
//     role: "Electrical Technician",
//     quote:
//       "The mentorship and practical sessions were top-notch. I now feel confident handling real-world projects.",
//     image: "../../Images/test1.png",
//   },
//   {
//     id: 3,
//     name: "Grace Okafor",
//     role: "HVAC Trainee",
//     quote:
//       "From zero knowledge to full employment — ETIWA TECH provided me with the tools and support to succeed.",
//     image: "../../Images/profile.png",
//   },
//   {
//     id: 4,
//     name: "Chinedu Obi",
//     role: "Solar PV Installer",
//     quote:
//       "The training opened doors for me in renewable energy. I'm now self-employed and running my own projects.",
//     image: "../../Images/test2.png",
//   },
// ];

// // ✅ Trick: duplicate array 3x for seamless loop
// const infiniteTestimonials = [...testimonials, ...testimonials, ...testimonials];

// const SmoothScrollTestimonials: React.FC = () => {
//   //  const settings = {


//   //   dots: false,
//   //   infinite: true,
//   //   slidesToShow: 2, // ✅ Desktop default
//   //   slidesToScroll: 1,
//   //   autoplay: true,
//   //   autoplaySpeed: 0,
//   //   speed: 9000,
//   //   cssEase: "linear",
//   //   pauseOnHover: true,
//   //   arrows: false,
//   //   swipe: true, // ✅ Enable swipe on mobile
//   //    responsive: [
//   //         {
//   //           breakpoint: 1024, // Tablets
//   //           settings: {
//   //             slidesToShow: 2,
//   //           }
//   //         },
//   //         {
//   //           breakpoint: 768, // Mobile landscape
//   //           settings: {
//   //             slidesToShow: 1,
//   //           }
//   //         },
//   //         {
//   //           breakpoint: 480, // Mobile portrait
//   //           settings: {
//   //             slidesToShow: 1,
//   //           }
//   //         }
//   //       ]
//   // };


//   const settings = {
//         dots: true,
//   infinite: true,
//   autoplay: true,
//     // autoplaySpeed: 0,
//     // speed: 9000,
//   slidesToShow: 2,
//   slidesToScroll: 1,
//   // autoplay: true,
//   speed: 1500,
//   autoplaySpeed: 3500,
//   cssEase: "ease-in-out",
//   arrows: false,
//   centerMode: true,
//   centerPadding: "0px", 
//         responsive: [
//           {
//             breakpoint: 1024, // Tablets
//             settings: {
//               slidesToShow: 2,
//             }
//           },
//           {
//             breakpoint: 768, // Mobile landscape
//             settings: {
//               slidesToShow: 1,
//             }
//           },
//           {
//             breakpoint: 480, // Mobile portrait
//             settings: {
//               slidesToShow: 1,
//             }
//           }
//         ]
//       };
      

//   return (
//     <section className="py-24 bg-gradient-to-b from-white to-gray-50">
//       <div className="max-w-7xl mx-auto px-4 md:px-0">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <div className="inline-block mb-4 bg-[#FFF9F0] text-[#7D6007] text-sm font-semibold px-10 py-3 rounded-xl">
//             Testimonials and Success Stories
//           </div>
//           <h2 className="text-4xl font-bold mb-4">What Our Trainees Say 💬</h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Hear real stories from people who transformed their future with ETIWA TECH.
//           </p>
//         </div>

//         {/* Slider */}
//         <Slider {...settings}>
//           {infiniteTestimonials.map((t, idx) => (
//             <div key={`${t.id}-${idx}`} className="px-6">
//               <div className="bg-white rounded border border-gray-300 p-2 hover:shadow transition-all duration-500">
//                 <div className="bg-gradient-to-br from-[#70BF49]/10 to-[#0062A7]/10 h-90 p-7 flex flex-col justify-between">
//                   <div>
//                     <p className="text-gray-700 text-lg leading-relaxed mb-6">{t.quote}</p>
//                   </div>
//                   <div className="flex items-center gap-4 mt-6">
//                     <img
//                       src={t.image}
//                       alt={t.name}
//                       className="w-16 h-16 rounded-full object-cover border border-green-500 shadow-md"
//                     />
//                     <div>
//                       <h4 className="text-lg font-semibold text-gray-900">{t.name}</h4>
//                       <p className="text-green-600 text-sm">{t.role}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </section>
//   );
// };

// export default SmoothScrollTestimonials;



import React from "react";
import Slider from "react-slick";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Aisha Bello",
    role: "Construction Apprentice",
    quote:
      "ETIWA TECH changed my life. I gained hands-on experience and landed a job immediately after completing the training.",
    image: "../../Images/profile.png",
  },
  {
    id: 2,
    name: "Samuel Adeyemi",
    role: "Electrical Technician",
    quote:
      "The mentorship and practical sessions were top-notch. I now feel confident handling real-world projects.",
    image: "../../Images/test1.png",
  },
  {
    id: 3,
    name: "Grace Okafor",
    role: "HVAC Trainee",
    quote:
      "From zero knowledge to full employment — ETIWA TECH provided me with the tools and support to succeed.",
    image: "../../Images/profile.png",
  },
  {
    id: 4,
    name: "Chinedu Obi",
    role: "Solar PV Installer",
    quote:
      "The training opened doors for me in renewable energy. I'm now self-employed and running my own projects.",
    image: "../../Images/test2.png",
  },
];

const SmoothScrollTestimonials: React.FC = () => {
    const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      infinite: true,
      dots: true,
      arrows: false,
    },
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      centerPadding: "0px", // Add this line to remove centerPadding for smallest screens
    },
  },
],
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 bg-[#FFF9F0] text-[#7D6007] text-sm font-semibold px-10 py-3 rounded-xl">
            Testimonials and Success Stories
          </div>
          <h2 className="text-4xl font-bold mb-4">What Our Trainees Say 💬</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear real stories from people who transformed their future with ETIWA TECH.
          </p>
        </div>

        {/* Slider */}
        <Slider {...settings}>
          {testimonials.map((t) => (
            <div key={`${t.id}`} className="px-2 md:px-6">
              <div className="bg-white rounded border border-gray-300 p-2 hover:shadow transition-all duration-500">
                <div className="bg-gradient-to-br from-[#70BF49]/10 to-[#0062A7]/10 h-90 p-7 flex flex-col justify-between">
                  <div>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">{t.quote}</p>
                  </div>
                  <div className="flex items-center gap-4 mt-6">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-16 h-16 rounded-full object-cover border border-green-500 shadow-md"
                    />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">{t.name}</h4>
                      <p className="text-green-600 text-sm">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default SmoothScrollTestimonials;
