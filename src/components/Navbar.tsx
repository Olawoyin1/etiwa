import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleCourses = () => setCoursesOpen(!coursesOpen);

  // 🔎 Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setCoursesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="w-full bg-white shadow fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-0 lg:px-0 flex items-center justify-between h-26">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          {/* <img
            src="/logo.png"
            alt="Etiwa Tech Logo"
            className="h-10 w-auto object-contain"
          /> */}
          <span className="font-bold text-xl text-[#0062A7]">Etiwa Tech</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {/* Courses Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleCourses}
              className="flex items-center space-x-1 cursor-pointer text-gray-700 hover:text-[#0062A7] transition"
            >
              <span className="font-medium text-lg ">Courses</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  coursesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {coursesOpen && (
              <div className="absolute -left-4 mt-4 w-65 bg-white shadow-lg rounded py-2 z-50">
                <Link
                  to="/courses/masonry"
                  className="block font-normal text-md px-4 py-2 hover:bg-gray-100 text-gray-700"
                >
                  Electrical Installation
                </Link>
                <Link
                  to="/courses/electrical"
                  className="block font-normal text-md px-4 py-2 hover:bg-gray-100 text-gray-700"
                >
                  Plumbing & Pipefitting
                </Link>
                <Link
                  to="/courses/hvac"
                  className="block font-normal text-md px-4 py-2 hover:bg-gray-100 text-gray-700"
                >
                  Solar PV Installation
                </Link>
                <Link
                  to="/courses/solar"
                  className="block font-normal text-md px-4 py-2 hover:bg-gray-100 text-gray-700"
                >
                  Masonry & Building Construction
                </Link>
                <Link
                  to="/courses/plumbing"
                  className="block font-normal text-md px-4 py-2 hover:bg-gray-100 text-gray-700"
                >
                  Health & Safety Training
                </Link>
                <Link
                  to="/courses/plumbing"
                  className="block font-normal text-md px-4 py-2 hover:bg-gray-100 text-gray-700"
                >
                  HVAC (Heating, Ventilation & Air Conditioning)
                </Link>
              </div>
            )}
          </div>

          {/* Other Nav Links */}
          <Link to="/about" className="text-gray-700 font-medium text-lg hover:text-[#0062A7] transition">
            About
          </Link>
          <Link to="/services" className="text-gray-700 font-medium text-lg hover:text-[#0062A7] transition">
            Services
          </Link>
          <Link to="/blog" className="text-gray-700 font-medium text-lg hover:text-[#0062A7] transition">
            Blog
          </Link>
          <Link to="/career" className="text-gray-700 font-medium text-lg hover:text-[#0062A7] transition">
            Career
          </Link>
          <Link to="/contact" className="text-gray-700 font-medium text-lg hover:text-[#0062A7] transition">
            Contact
          </Link>

          {/* Enroll Button */}
          <Link
            to="/enroll"
            className="ml-4 font-medium px-5 py-2 bg-[#70BF49] text-white rounded-full hover:bg-[#5aa23c] transition"
          >
            Enroll Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-gray-700 focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200">
          <div className="px-4 py-4 space-y-4 flex flex-col">
            {/* Courses dropdown inside mobile */}
            <div>
              <button
                onClick={toggleCourses}
                className="flex items-center justify-between w-full text-left text-gray-700"
              >
                <span>Courses</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    coursesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {coursesOpen && (
                <div className="mt-2 pl-4 space-y-2">
                  <Link to="/courses/masonry" className="block hover:text-[#0062A7]">
                    Masonry
                  </Link>
                  <Link to="/courses/electrical" className="block hover:text-[#0062A7]">
                    Electrical
                  </Link>
                  <Link to="/courses/hvac" className="block hover:text-[#0062A7]">
                    HVAC
                  </Link>
                  <Link to="/courses/solar" className="block hover:text-[#0062A7]">
                    Solar Photovoltaic
                  </Link>
                  <Link to="/courses/plumbing" className="block hover:text-[#0062A7]">
                    Plumbing
                  </Link>
                </div>
              )}
            </div>

            <Link to="/about" className="block text-gray-700 hover:text-[#0062A7]">
              About
            </Link>
            <Link to="/services" className="block text-gray-700 hover:text-[#0062A7]">
              Services
            </Link>
            <Link to="/blog" className="block text-gray-700 hover:text-[#0062A7]">
              Blog
            </Link>
            <Link to="/career" className="block text-gray-700 hover:text-[#0062A7]">
              Career
            </Link>
            <Link to="/contact" className="block text-gray-700 hover:text-[#0062A7]">
              Contact
            </Link>

            <Link
              to="/enroll"
              className="w-full text-center px-5 py-2 bg-[#70BF49] text-white rounded-full hover:bg-[#5aa23c] transition"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
