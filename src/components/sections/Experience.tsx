import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Software Engineer",
    company: "Great Manager Research and Consultancy",
    location: "Mumbai",
    date: "Nov 2021 - Dec 2025",
    description:
      "Engineered a data reporting pipeline using MySQL stored procedures, reducing reporting time from 40+ hours to minutes. Developed a backend system automating survey life-cycles for 20+ clients, saving 50+ hours of manual work monthly. Optimized APIs using MongoDB aggregations (60% faster) and implemented a 'magic link' login system boosting response rates by 30%.",
    skills: ["Node.js", "Angular", "React", "MongoDB", "MySQL", "AWS"],
    color: "bg-blue-50 border-blue-100",
    iconColor: "text-blue-600",
    shadow: "shadow-blue-100",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            My <span className="text-blue-600">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A timeline of my professional growth and the impactful projects I've
            been a part of.
          </p>
        </div>

        {experiences.length === 1 ? (
          // Single Experience View
          <div className="max-w-4xl mx-auto animate-slide-up">
            <div
              className={`relative ${experiences[0].color} border p-8 md:p-12 rounded-[2.5rem] hover:shadow-2xl transition-all duration-300 group`}
            >
              {/* Decorative gradient blob */}
              <div
                className={`absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-20 blur-3xl ${experiences[0].shadow.replace(
                  "shadow-",
                  "bg-"
                )}`}
              />

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      {experiences[0].role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-base font-medium text-gray-600">
                      <span className="flex items-center gap-1.5">
                        <Briefcase
                          className={`w-5 h-5 ${experiences[0].iconColor}`}
                        />
                        {experiences[0].company}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin
                          className={`w-5 h-5 ${experiences[0].iconColor}`}
                        />
                        {experiences[0].location}
                      </span>
                    </div>
                  </div>
                  <div className="inline-flex items-center px-4 py-2 bg-white rounded-full border border-gray-100 shadow-sm text-sm font-medium text-gray-500 whitespace-nowrap">
                    <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                    {experiences[0].date}
                  </div>
                </div>

                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {experiences[0].description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {experiences[0].skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-white/80 text-gray-700 font-medium rounded-xl shadow-2xl border border-transparent hover:border-blue-100 hover:bg-white hover:shadow-sm transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Timeline View (Existing)
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-100 via-purple-100 to-blue-50" />

            <div className="space-y-12 lg:space-y-24">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`relative flex flex-col lg:flex-row items-start ${
                    index % 2 === 0 ? "lg:flex-row-reverse" : ""
                  } gap-8 lg:gap-0 group`}
                >
                  {/* Connector Dot */}
                  <div className="absolute left-4 lg:left-1/2 -translate-x-[5px] lg:-translate-x-1/2 w-3 h-3 rounded-full bg-white border-4 border-blue-500 z-10 mt-6 group-hover:scale-125 group-hover:border-blue-600 transition-all duration-300 shadow-[0_0_0_4px_rgba(219,234,254,0.5)]" />

                  {/* Date Badge (Desktop Center) */}
                  <div
                    className={`hidden lg:flex absolute left-1/2 -translate-x-1/2 mt-4 bg-white px-4 py-1 rounded-full border border-gray-100 shadow-sm text-sm font-medium text-gray-500 z-10 group-hover:border-blue-200 group-hover:text-blue-600 transition-colors`}
                  >
                    {exp.date}
                  </div>

                  {/* Content Card */}
                  <div
                    className={`w-full lg:w-[calc(50%-3rem)] ml-12 lg:ml-0 px-4 md:px-0`}
                  >
                    <div
                      className={`${exp.color} border p-8 rounded-[2rem] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group/card animate-slide-up`}
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      {/* Decorative gradient blob */}
                      <div
                        className={`absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-20 blur-2xl ${exp.shadow.replace(
                          "shadow-",
                          "bg-"
                        )}`}
                      />

                      <div className="relative z-10">
                        {/* Header */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                          <h3 className="text-2xl font-bold text-gray-900">
                            {exp.role}
                          </h3>
                          {/* Mobile Date */}
                          <span className="lg:hidden inline-flex items-center text-sm font-medium text-gray-500 bg-white/50 px-3 py-1 rounded-full w-fit">
                            <Calendar className="w-3 h-3 mr-1.5" />
                            {exp.date}
                          </span>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm font-medium text-gray-600 mb-6">
                          <span className="flex items-center gap-1.5">
                            <Briefcase className={`w-4 h-4 ${exp.iconColor}`} />
                            {exp.company}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin className={`w-4 h-4 ${exp.iconColor}`} />
                            {exp.location}
                          </span>
                        </div>

                        <p className="text-gray-600 leading-relaxed mb-6">
                          {exp.description}
                        </p>

                        {/* Skills Tags */}
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 bg-white/60 text-gray-700 text-sm font-medium rounded-lg border border-transparent hover:border-black/5 hover:bg-white transition-colors cursor-default"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Empty space for the other side of the timeline */}
                  <div className="hidden lg:block w-[calc(50%-3rem)]" />
                </div>
              ))}
            </div>

            {/* End Cap */}
            <div className="absolute left-4 lg:left-1/2 bottom-0 -translate-x-1.5 lg:-translate-x-1/2 w-3 h-3 bg-blue-100 rounded-full" />
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
