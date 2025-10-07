import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Who can enroll in Etiwa Tech training programs?",
    answer:
      "Our programs are designed for anyone interested in starting or advancing a career in technical fields — including youth, women, career changers, and professionals looking to upskill.",
  },
  {
    question: "Do I need prior experience to join a course?",
    answer:
      "Not at all! Most of our programs are beginner-friendly and start from the fundamentals. We also offer advanced classes for those with existing experience who want to deepen their skills.",
  },
  {
    question: "How long do the courses take?",
    answer:
      "Program durations vary depending on the field — typically ranging from 4 weeks to 6 months. Each course page includes a detailed syllabus and duration breakdown.",
  },
  {
    question: "Will I receive a certificate after training?",
    answer:
      "Yes. Upon successful completion, you’ll receive an internationally recognized certification that validates your skills and increases your employability worldwide.",
  },
  {
    question: "Do you offer job placement support?",
    answer:
      "Absolutely! Our Career Services team helps students with job placement, internships, and career guidance to ensure a smooth transition into the workforce.",
  },
  {
    question: "Are there accommodation facilities for students?",
    answer:
      "Yes. We offer secure and comfortable hostel accommodation for students who need a place to stay during their training period.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-0 grid md:grid-cols-2 gap-12 items-start">
        {/* Left Column - Intro Text */}
        <div className="space-y-5">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Frequently Asked Questions (FAQ) 🤔
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We know you might have some questions about <span className="font-semibold text-primary">Etiwa Tech</span>, 
            our training programs, and how we can help you build a successful career in the technical and construction industry.
          </p>
          <p className="text-base text-gray-500">
            If you don’t find your answer here, feel free to contact us — our team is always happy to help!
          </p>
        </div>

        {/* Right Column - Accordion FAQ */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white  rounded border border-gray-200 transition-all hover:shadow"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between text-left px-6 py-4 focus:outline-none"
              >
                <span className="font-semibold text-gray-800 text-lg">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-500 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`px-6 transition-all duration-300 overflow-hidden ${
                  openIndex === index ? "max-h-48 pb-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 leading-relaxed text-base">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
