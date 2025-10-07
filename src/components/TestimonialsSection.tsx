

// SmoothScrollTestimonials.tsx
import React, { useLayoutEffect, useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

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
  // slidesToShow will be computed synchronously using useLayoutEffect
  const [slidesToShow, setSlidesToShow] = useState<number>(3);
  const [ready, setReady] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

  // compute slidesToShow based on width
  const calcSlides = (w: number) => {
    if (w >= 1024) return 3; // desktop
    if (w >= 768) return 2; // tablet
    return 1; // mobile
  };

  // useLayoutEffect so it runs before paint (prevents flash of wrong layout)
  useLayoutEffect(() => {
    const setInitial = () => {
      const w = window.innerWidth;
      setSlidesToShow(calcSlides(w));
      setReady(true);
    };

    setInitial();

    // use matchMedia listeners for better responsiveness to orientation changes
    const mm1024 = window.matchMedia("(min-width: 1024px)");
    const mm768 = window.matchMedia("(min-width: 768px)");

    const handler = () => {
      setSlidesToShow(calcSlides(window.innerWidth));
    };

    // modern addEventListener on MediaQueryList
    if (mm1024.addEventListener) mm1024.addEventListener("change", handler);
    else mm1024.addListener(handler);

    if (mm768.addEventListener) mm768.addEventListener("change", handler);
    else mm768.addListener(handler);

    window.addEventListener("resize", handler);

    return () => {
      if (mm1024.removeEventListener) mm1024.removeEventListener("change", handler);
      else mm1024.removeListener(handler);

      if (mm768.removeEventListener) mm768.removeEventListener("change", handler);
      else mm768.removeListener(handler);

      window.removeEventListener("resize", handler);
    };
    // empty deps - run once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // only render slider after initial measurement (avoids incorrect initial slides)
  if (!ready) return null;

  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 800,
    cssEase: "ease-in-out",
    arrows: false,
    swipeToSlide: true,
    afterChange: (index: number) => setCurrentSlide(index),
    beforeChange: (_: number, newIndex: number) => setCurrentSlide(newIndex),
    responsive: [], // not needed because slidesToShow is dynamic
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="relative max-w-7xl mx-auto px-4 md:px-0">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 bg-[#FFF9F0] text-[#7D6007] text-sm font-semibold px-8 py-2 rounded-xl">
            Testimonials and Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">What Our Trainees Say 💬</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Hear real stories from people who transformed their future with ETIWA TECH.</p>
        </div>

        {/* key={slidesToShow} forces react-slick to remount when slidesToShow changes */}
        <Slider key={slidesToShow} {...settings}>
          {testimonials.map((t) => (
            <div key={`${t.id}`} className="px-2 md:px-4">
              <div className="bg-white rounded border border-gray-300 p-2 hover:shadow transition-all duration-500">
                <div className="bg-gradient-to-br from-[#70BF49]/10 to-[#0062A7]/10 h-70 p-4 md:p-7 flex flex-col justify-between">
                  <div>
                    <p className="text-gray-700 text leading-relaxed mb-6">{t.quote}</p>
                  </div>
                  <div className="flex items-center gap-4 mt-6">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-11 h-11 rounded-full object-cover border border-green-500 shadow-md"
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


        
        <div className="absolute bg-white p-[10px] rounded-xl px-3 -bottom-10 left-1/2 transform -translate-x-1/2 z-30 flex items-center gap-3">
                {testimonials.map((_, index) => {
                  const isActive = index === currentSlide;
                  return (
                    <motion.div
                      key={index}
                      className={`h-[6px] ${
                        isActive
                          ? "w-[24px] bg-gradient-to-br from-[#70BF49]/90 to-[#0062A7]/20  rounded-full"
                          : "w-[6px] bg-blue-500 rounded-full"
                      }`}
                      animate={{
                        width: isActive ? 24 : 6,
                        height: 6,
                        opacity: isActive ? 1 : 0.6,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      }}
                    />
                  );
                })}
            </div>
      </div>


    </section>
  );
};

export default SmoothScrollTestimonials;
