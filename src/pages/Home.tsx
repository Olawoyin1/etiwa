import AccreditedLogos from "../components/AccreditedLogos"
import CoursesSection from "../components/CoursesSection"
import FAQ from "../components/FAQ"
import HeroSlider from "../components/HeroSlider"
import HowYouWillLearn from "../components/HowYouWillLearn"
import Services from "../components/Services"
import TestimonialsSection from "../components/TestimonialsSection"

const Home = () => {
  return (
    <div className="mt-24">
      <HeroSlider />


      
      <Services />
      <CoursesSection />
      <AccreditedLogos />
      <HowYouWillLearn />
      <TestimonialsSection />
      <FAQ />
    </div>
  )
}

export default Home
