import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




 const slides = [
  {
    id: 1,
    title: "A Leader in Quality Technical Vocational Training in Nigeria",
    description: "Empowering the next generation with hands-on skills and knowledge.",
    image: "../../Images/hero.jpg",
  },
  {
    id: 2,
    title: "Upskilling the \n Labour Force",
    description: "Equipping individuals with technical skills for modern industries.",
    image: "../../Images/hero1.jpg",
  },
  {
    id: 3,
    title: "Providing Job Opportunities for the Unemployed",
    description: "Connecting skilled individuals with real-world opportunities.",
    image: "../../Images/hero5.jpg",
},
{
    id: 4,
    title: "Reshaping Lives in \n Vulnerable Communities",
    description: "Transforming futures through inclusive skill development.",
    image: "../../Images/hero4.avif",
},
{
    id: 5,
    title: "Empowering Women \n in Construction",
    description: "Championing gender equality and leadership in technical fields.",
    image: "../../Images/hero2.jpg",
    // image: "/images/hero5.jpg",?
  },
  {
    id: 6,
    title: "Building a Better Future \n for our Youths",
    description: "Creating opportunities that uplift the next generation.",
    image: "../../Images/hero3.jpg",
  },
];


function Hero() {
    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 6000,
        pauseOnHover: false,
      };

  return (
    <div className="relative w-full h-120 md:h-[90vh]">
     

      {/* Fullscreen slider below */}
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative cf main cursor-grab md:h-[90vh]">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-120 md:h-[90vh] object-cover"
            />
            <div className="absolute inset-0 bg-black/65  flex flex-col items-center justify-center z-10">

                <div
            className="text-center max-w-3xl text-white"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4 drop-shadow-lg whitespace-pre-line">
              {slides[index].title}
            </h1>
            {/* <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto">
              {slides[index].description}
            </p> */}
          </div>


            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Hero;