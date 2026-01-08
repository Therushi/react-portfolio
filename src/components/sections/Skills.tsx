import { Code2, Brain, Sparkles } from "lucide-react";
import {
  SiReact,
  SiAngular,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiDocker,
  SiAmazon,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiGit,
  SiPython,
  SiOpenai,
  SiLangchain,
  SiN8N,
  SiR,
} from "react-icons/si";

const skills = [
  {
    name: "React",
    icon: <SiReact className="text-[#61DAFB]" />,
    bg: "bg-cyan-50",
    border: "border-cyan-200",
  },
  {
    name: "Angular",
    icon: <SiAngular className="text-[#DD0031]" />,
    bg: "bg-red-50",
    border: "border-red-200",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-[#3178C6]" />,
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-[#F7DF1E]" />,
    bg: "bg-yellow-50",
    border: "border-yellow-200",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-[#06B6D4]" />,
    bg: "bg-cyan-50",
    border: "border-cyan-200",
  },
  {
    name: "HTML5",
    icon: <SiHtml5 className="text-[#E34F26]" />,
    bg: "bg-orange-50",
    border: "border-orange-200",
  },
  {
    name: "CSS3",
    icon: <SiCss3 className="text-[#1572B6]" />,
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs className="text-[#339933]" />,
    bg: "bg-green-50",
    border: "border-green-200",
  },
  {
    name: "Express.js",
    icon: <SiExpress className="text-gray-700" />,
    bg: "bg-gray-50",
    border: "border-gray-200",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-[#47A248]" />,
    bg: "bg-green-50",
    border: "border-green-200",
  },
  {
    name: "MySQL",
    icon: <SiMysql className="text-[#4479A1]" />,
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    name: "R",
    icon: <SiR className="text-[#276DC3]" />,
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    name: "Python",
    icon: <SiPython className="text-[#3776AB]" />,
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    name: "OpenAI",
    icon: <SiOpenai className="text-[#412991]" />,
    bg: "bg-purple-50",
    border: "border-purple-200",
  },
  {
    name: "LangChain",
    icon: <SiLangchain className="text-[#1C3C3C]" />,
    bg: "bg-emerald-50",
    border: "border-emerald-200",
  },
  {
    name: "Agentic AI",
    icon: <Brain className="w-5 h-5 text-[#FFD21E]" />,
    bg: "bg-yellow-50",
    border: "border-yellow-200",
  },
  {
    name: "n8n",
    icon: <SiN8N className="text-[#FF6C37]" />,
    bg: "bg-orange-50",
    border: "border-orange-200",
  },
  {
    name: "AWS",
    icon: <SiAmazon className="text-[#FF9900]" />,
    bg: "bg-orange-50",
    border: "border-orange-200",
  },
  {
    name: "Docker",
    icon: <SiDocker className="text-[#2496ED]" />,
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    name: "Git",
    icon: <SiGit className="text-[#F05032]" />,
    bg: "bg-red-50",
    border: "border-red-200",
  },
];

const Skills = () => {
  // Split skills into two rows
  const row1 = skills.slice(0, 10);
  const row2 = skills.slice(10);

  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #e5e7eb 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 px-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-blue-600 font-medium text-sm mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Tech Stack</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Skills & <span className="text-blue-600">Technologies</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            The tools and technologies I use to bring ideas to life
          </p>
        </div>

        {/* Marquee Container */}
        <div className="space-y-4">
          {/* Row 1 - Moving Left */}
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent z-10 pointer-events-none" />
            <div className="flex gap-3 animate-marquee-left hover:[animation-play-state:paused]">
              {[...row1, ...row1, ...row1].map((skill, idx) => (
                <SkillCard key={`row1-${skill.name}-${idx}`} skill={skill} />
              ))}
            </div>
          </div>

          {/* Row 2 - Moving Right */}
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
            <div className="flex gap-3 animate-marquee-right hover:[animation-play-state:paused]">
              {[...row2, ...row2, ...row2, ...row2].map((skill, idx) => (
                <SkillCard key={`row2-${skill.name}-${idx}`} skill={skill} />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex justify-center animate-fade-in px-4">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full border border-gray-200 shadow-sm text-sm font-medium text-gray-500 hover:text-blue-600 hover:border-blue-200 hover:shadow-md transition-all duration-300 cursor-default">
            <Code2 className="w-4 h-4" />
            <span>Constantly expanding my toolkit</span>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-25%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left 25s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

const SkillCard = ({ skill }: { skill: (typeof skills)[0] }) => (
  <div
    className={`group relative flex-shrink-0 flex items-center gap-3 pl-3 pr-5 py-2.5 rounded-full ${skill.bg} border ${skill.border} hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-300 hover:scale-105 cursor-default`}
  >
    {/* Icon Container - Pill shape */}
    <div
      className={`w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
    >
      <span className="text-xl">{skill.icon}</span>
    </div>

    {/* Name */}
    <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">
      {skill.name}
    </span>
  </div>
);

export default Skills;
