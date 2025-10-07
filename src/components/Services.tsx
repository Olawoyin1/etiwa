


import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  Award,
  Sparkles,
  
} from "lucide-react"; // Import icons from lucide-react

import { GoTasklist } from "react-icons/go";
import { MdOutlineHouseSiding } from "react-icons/md";
import { LuBriefcaseBusiness } from "react-icons/lu";
import type { FC } from "react";

interface ServiceCardProps {
  icon: FC<{ className?: string }>;
  title: string;
  description: string;
  index: number;
}

const ServiceCard: FC<ServiceCardProps> = ({ icon: Icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="p-6 border border-gray-200 rounded hover:border-blue-300 bg-white hover:shadow transition"
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary/10 text-secondary mb-4">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="font-heading text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </motion.div>
  );
};

const Services: FC = () => {
  const services = [
    {
      icon: GraduationCap,
      title: "Quality Training Programs",
      description:
        "Globally recognized, hands-on training in high-demand construction trades with modern equipment and experienced instructors.",
    },
    {
      icon: Award,
      title: "Certification",
      description:
        "Earn internationally recognized certifications that validate your skills and enhance your employability in the global market.",
    },
    {
      icon: LuBriefcaseBusiness,
      title: "Job Placement & Career Guidance",
      description:
        "Comprehensive career support including job placement assistance, internships, and ongoing professional development.",
    },
    {
      icon: MdOutlineHouseSiding,
      title: "Hostel Accommodation",
      description:
        "Comfortable, secure housing facilities for students who need accommodation during their training period.",
    },
    {
      icon: Sparkles,
      title: "Soft Skills & Entrepreneurship",
      description:
        "Beyond technical training, develop essential business and interpersonal skills to succeed as an employee or entrepreneur.",
    },
    {
      icon: GoTasklist,
      title: "Technical Skills Assessment",
      description:
        "Professional evaluation and certification of existing skills, helping experienced workers validate their expertise.",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-block mb-4 bg-[#FFF9F0] text-[#7D6007] text-sm font-semibold px-10 py-3 rounded-xl">
                WHAT WE OFFER
              
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Complete Support for Your Success
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From training to employment—we're with you every step of the way
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <button >
            <Link to="/services">Explore All Services</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
