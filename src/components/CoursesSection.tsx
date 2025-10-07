

import { Link } from "react-router-dom";
import { Clock, UserCheck } from "lucide-react";
import { IoCheckmark } from "react-icons/io5";

import { BsArrowRight } from "react-icons/bs";
const coursesData = [
  {
    id: "masonry",
    title: "Masonry & Construction",
    description: "Learn the essential skills for building structures, bricklaying, and finishing work in the construction industry.",
    duration: "8 weeks",
    students: 240,
    image: "../../Images/one.jpg",
  },
  {
    id: "electrical",
    title: "Electrical Installation",
    description: "Master electrical wiring, installation, and safety standards to become a certified technician.",
    duration: "12 weeks",
    students: 180,
    image: "../../Images/two.jpg",
  },
  {
    id: "hvac",
    title: "HVAC Systems",
    description: "Learn to install, repair, and maintain heating, ventilation, and air conditioning systems.",
    duration: "10 weeks",
    students: 150,
    image: "../../Images/three.jpg",
  },
];

export default function CoursesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 bg-[#FFF9F0] text-[#7D6007] text-sm font-semibold px-10 py-3 rounded-xl">
            Explore Our Courses
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Choose Your Path to Success
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Comprehensive training programs designed to meet industry demands and launch your career.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesData.map((course) => (
            <div
              key={course.id}
              className="group relative overflow-hidden rounded-lg shadow hover:shadow-lg transition-all duration-500"
            >
              {/* Image */}
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-[380px] object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay content */}
              <div
                className="
                  absolute bottom-0 left-0 right-0 
                  bg-gradient-to-br from-[#70BF49]/80 to-[#0062A7]/90 
                  px-6 py-4 
                  transition-all duration-500
                  group-hover:translate-y-[0%]
                  group-hover:top-0
                  translate-y-[83%]
                  flex flex-col justify-start
                "
              >
                {/* Title - always visible */}
                <h3 className="text-white font-semibold mb-3">{course.title}</h3>

                {/* Hidden content - revealed on hover */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white">
                  <p className="text-sm  mb-6">{course.description}</p>

                  <div className="flex items-center gap-6 text-sm mb-6">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <UserCheck className="h-4 w-4" />
                      <span>{course.students}+ students</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-3 font-semibold text-white">What you get</h4>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-2 text-white text-sm">
                        <IoCheckmark /> 5-Month Internship Simulation
                      </li>
                      <li className="flex items-center gap-2 text-white text-sm">
                        <IoCheckmark /> Mentorship guidance
                      </li>
                      <li className="flex items-center gap-2 text-white text-sm">
                        <IoCheckmark /> 4-Month Learning Phase
                      </li>
                      <li className="flex items-center gap-2 text-white text-sm">
                        <IoCheckmark /> Live class sessions
                      </li>
                    </ul>
                  </div>

                  <div className="mt-6 flex items-center text-green-400 font-semibold hover:underline">
                    <span>Enroll Now</span>
                    <BsArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Link
            to="/courses"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded font-semibold hover:bg-green-700 transition"
          >
            View All Training Programs
          </Link>
        </div>
      </div>
    </section>
  );
}
