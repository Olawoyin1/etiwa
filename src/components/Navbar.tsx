import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false); // desktop dropdown
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false); // ✅ new state for mobile
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleCourses = () => setCoursesOpen(!coursesOpen);
  const toggleMobileCourses = () => setMobileCoursesOpen(!mobileCoursesOpen); // ✅ mobile toggle

  // ✅ Close desktop dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setCoursesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="w-full bg-white shadow fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-26">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl text-[#0062A7]">Etiwa Tech</span>
        </Link>

        {/* ✅ Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {/* Courses Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <div
              onClick={toggleCourses}
              className="flex items-center space-x-1 cursor-pointer text-gray-700 hover:text-[#0062A7] transition"
            >
              <span className="font-medium text-lg">Courses</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${coursesOpen ? "rotate-180" : ""}`}
              />
            </div>

            <AnimatePresence>
              {coursesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="absolute -left-4 mt-4 w-72 bg-white shadow-lg rounded-lg py-2 z-50 border border-gray-100"
                >
                  {[
                    "Electrical Installation",
                    "Plumbing & Pipefitting",
                    "Solar PV Installation",
                    "Masonry & Building Construction",
                    "Health & Safety Training",
                    "HVAC (Heating, Ventilation & Air Conditioning)",
                  ].map((course, idx) => (
                    <Link
                      key={idx}
                      to={`/courses/${course.toLowerCase().replace(/\s+/g, "-")}`}
                      className="block font-normal text-md px-4 py-2 hover:bg-gray-100 text-gray-700 transition"
                      onClick={() => setCoursesOpen(false)}
                    >
                      {course}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Other Nav Links */}
          {["About", "Services", "Blog", "Career", "Contact"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="text-gray-700 font-medium text-lg hover:text-[#0062A7] transition"
            >
              {item}
            </Link>
          ))}

          {/* Enroll Button */}
          <Link
            to="/enroll"
            className="ml-4 font-medium px-5 py-2 bg-[#70BF49] text-white rounded-full hover:bg-[#5aa23c] transition"
          >
            Enroll Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden p-2 text-gray-700 focus:outline-none">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ✅ Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed top-0 left-0 w-3/4 h-screen bg-white shadow z-40 md:hidden"
          >
            {/* <div className="flex justify-end px-4 py-5">
              <X size={28} onClick={toggleMenu} className="cursor-pointer" />
            </div> */}

            <div className="px-6 py-16 space-y-6 text-lg font-medium text-gray-800">
              <Link
                to="/"
                className="block hover:text-[#0062A7]"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>

              {/* ✅ Mobile Courses Dropdown - now toggles */}
              <div>
                <div
                  onClick={toggleMobileCourses}
                  className="flex items-center justify-between w-full cursor-pointer hover:text-[#0062A7]"
                >
                  <span>Courses</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      mobileCoursesOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>

                <AnimatePresence>
                  {mobileCoursesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-3 ml-3 space-y-3 text-base text-gray-700"
                    >
                      {[
                        "Electrical Installation",
                        "Plumbing & Pipefitting",
                        "Solar PV Installation",
                        "Masonry & Building Construction",
                        "Health & Safety Training",
                        "HVAC (Heating, Ventilation & Air Conditioning)",
                      ].map((item, idx) => (
                        <Link
                          key={idx}
                          to={`/courses/${item.toLowerCase().replace(/\s+/g, "-")}`}
                          className="block hover:text-[#0062A7]"
                          onClick={() => {
                            setMenuOpen(false);
                            setMobileCoursesOpen(false);
                          }}
                        >
                          {item}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {["About", "Services", "Blog", "Career", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="block hover:text-[#0062A7]"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}

              <Link
                to="/enroll"
                className="block text-center px-5 py-2 bg-[#70BF49] text-white rounded-full hover:bg-[#5aa23c] transition"
                onClick={() => setMenuOpen(false)}
              >
                Enroll Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
