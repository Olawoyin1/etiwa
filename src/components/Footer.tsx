import React from "react";
import { 
  Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, 
  ArrowRight
} from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

 

  return (
    <footer className="bg-gradient-to-br from-[#70BF49]/10 to-[#0062A7]/10">
      

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-0 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">
          {/* Logo + About */}
          <div className="lg:col-span-4">
            <div className="flex items-center space-x-3 mb-6">
             
              <span className="font-bold text-2xl">Etiwa Tech</span>
            </div>
            <p className=" mb-6 leading-relaxed">
              Nigeria's premier not-for-profit technical vocational training institution. Since 2013, we've empowered youth, women, and migrant returnees with world-class skills.
            </p>

            

            <div className="flex space-x-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white hover:text-orange-800 transition transform hover:scale-110 border border-white/20"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-lg mb-6 flex items-center">
              <div className="w-1 h-6 bg-[#7dbf4a] rounded-full mr-3"></div> Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {["About Us", "All Programs", "Our Services", "Career Support", "Blog & Resources", "Contact Us"].map(
                (item, i) => (
                  <li key={i}>
                    <a href="#" className="flex items-center group hover:translate-x-1 transition">
                      <ArrowRight className="h-3 w-3 mr-2 group-hover:translate-x-1 transition" /> {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Training Programs */}
          <div className="lg:col-span-3">
            <h3 className="font-bold text-lg mb-6 flex items-center">
              <div className="w-1 h-6 bg-[#7dbf4a] rounded-full mr-3"></div> Training Programs
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                "Electrical Installation",
                "Plumbing & Pipefitting",
                "Solar PV Installation",
                "Masonry & Building Construction",
                "Health & Safety Training",
                " HVAC (Heating, Ventilation & Air Conditioning)",
              ].map((course, i) => (
                <li key={i}>
                  <a href="#" className="flex items-center group hover:translate-x-1 transition">
                    <ArrowRight className="h-3 w-3 mr-2 group-hover:translate-x-1 transition" /> {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h3 className="font-bold text-lg mb-6 flex items-center">
              <div className="w-1 h-6 bg-[#7dbf4a] rounded-full mr-3"></div> Get in Touch
            </h3>
            <ul className="space-y-4 mb-6 text-sm">
              <li className="flex space-x-3">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <p>11 Eng. Toriola Oyetunji Street, Destiny Homes

Estate, Abijo, Ibeju Lekki, Lagos, Nigeria</p>
              </li>
              <li className="flex space-x-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:+234XXXXXXXXX" className="hover:underline">+234 XXX XXX XXXX</a>
              </li>
              <li className="flex space-x-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:info@etiwatech.ng" className="hover:underline">info@etiwatech.ng</a>
              </li>
            </ul>

            <div className="bg-gradient-to-r from-green-100 to-emerald-50 p-5 rounded-xl border border-white/20 text-sm">
              <h4 className="font-semibold uppercase mb-3">Office Hours</h4>
              <p className="flex justify-between"><span>Mon - Fri:</span> <span className="font-semibold">8:00 - 5:00</span></p>
              <p className="flex justify-between"><span>Saturday:</span> <span className="font-semibold">9:00 - 2:00</span></p>
              <p className="flex justify-between"><span>Sunday:</span> <span className="font-semibold">Closed</span></p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 text-sm flex flex-col md:flex-row justify-between items-center gap-4 ">
          <p>© {currentYear} Etiwa Tech. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
