import IntroSplitCards from "../components/Intro"
import MeetOurTeam from "../components/MeetOurTeam"
import MissionSection from "../components/MissionSection"

const About = () => {
  return (
    <div>
       <div className="text-center mt-40 mb-12">
                <div className="px-4 md:px-0"            >
                  <div className="inline-block mb-4 bg-[#FFF9F0] text-[#7D6007] text-sm font-semibold px-10 py-3 rounded-xl">
                      Our Story
                    
                  </div>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                    About Etiwa Tech
                  </h2>
                  <p className="md:text-lg text-muted-foreground max-w-2xl mx-auto">Building careers, empowering communities, and transforming lives through quality technical vocational training since 2013.
                  </p>
                </div>
        </div>

        <IntroSplitCards />
        <MissionSection />
        <MeetOurTeam />
    </div>
  )
}

export default About
