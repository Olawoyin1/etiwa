
import { Target, Eye, HeartHandshake } from "lucide-react";

const cards = [
  {
    icon: <Target className="w-10 h-10 text-blue-600" />,
    title: "Our Mission",
    desc: "To equip learners with hands-on technical skills and knowledge that prepare them for real-world opportunities in the workforce.",
  },
  {
    icon: <Eye className="w-10 h-10 text-green-600" />,
    title: "Our Vision",
    desc: "To be Africa’s leading platform for vocational training — empowering individuals and bridging the global skills gap.",
  },
  {
    icon: <HeartHandshake className="w-10 h-10 text-amber-600" />,
    title: "Our Values",
    desc: "We believe in excellence, inclusivity, innovation, and integrity — creating impactful learning experiences for everyone.",
  },
];

export default function MissionSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-0 ">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Mission, Vision & Values
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <div
              key={i}
              className="group relative bg-white rounded p-8  hover:shadow border-gray-200 transition-all duration-300 hover:-translate-y-2 border  hover:border-blue-500/30"
            >
              <div className="flex flex-col items-start  space-y-4">
                <div className="p-3 bg-blue-50 rounded-full group-hover:scale-110 transition">
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <p className="text-gray-600">{card.desc}</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-50 opacity-0 group-hover:opacity-100 transition duration-300 rounded-2xl -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
