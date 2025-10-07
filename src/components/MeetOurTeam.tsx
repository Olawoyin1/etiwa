

const teamMembers = [
  {
    id: 1,
    name: "Mrs. Jody Adewale",
    role: "Managing Director",
    image: "../../Images/Jody.jpg",
  },
  {
    id: 2,
    name: "Joshua Oyekanmi",
    role: "Programs Manager",
    image: "../../Images/josh.png",
  },
  {
    id: 3,
    name: "Abiodun Ojobaro",
    role: "Technical Training Manager",
    image: "../../Images/abiodun.png",
  },
  {
    id: 4,
    name: "Tom Iwueze",
    role: "Accounts Manager",
    image: "../../Images/tom.jpg",
  },
];

const MeetOurTeam = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dedicated professionals committed to your success
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group bg-white rounded  hover:shadow hover:text-[#70BF49] transition duration-300 overflow-hidden "
            >
              {/* Image */}
              <div className="w-full h-82 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Name & Role */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <div className="flex items-center justify-start gap-3">

                    <div className="w-6 h-[2px] bg-gray-300 "></div>
                    <p className="text-[#70BF49] text-sm font-medium">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam;
