import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Code,
  Cpu,
  Globe,
} from "lucide-react";
import { SiAngular, SiReact, SiMongodb, SiDocker } from "react-icons/si";
import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-24 pb-12 lg:pt-32 lg:pb-20 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column: Text Content */}
          <div className="text-center lg:text-left relative z-10 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4" />
              <span>Available for new projects</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight leading-none animate-slide-up">
              Hello, I'm <br />
              <span className="relative inline-block mt-2">
                <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  Rushikesh
                </span>
                {/* Creative Hand-drawn SVG Underline */}
                <svg
                  className="absolute -bottom-2 -left-2 w-[110%] h-4 -z-10 text-blue-200"
                  viewBox="0 0 200 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.00025 6.99997C25.7501 2.49994 132.5 -1.49991 198.5 3.99996"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 animate-slide-up animation-delay-200">
              A creative{" "}
              <span className="font-semibold text-gray-900">
                Software Engineer
              </span>{" "}
              building elegant, scalable solutions for the web and AI.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-4 lg:mb-0 animate-slide-up animation-delay-300">
              <Button
                size="lg"
                className="rounded-full px-8 py-6 text-lg bg-gray-900 hover:bg-gray-800 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View Work
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <div className="flex gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-100 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-100 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="mailto:rushidhanawade123@gmail.com"
                  className="p-3 rounded-full bg-gray-100 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Creative Visual */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in my-8 lg:my-0">
            {/* Creative Background Elements to fill space */}
            <div className="absolute inset-0 z-0">
              {/* Large organic blob */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-50 to-purple-50 rounded-full blur-3xl opacity-70 animate-pulse-slow" />

              {/* Floating Shapes */}
              <div className="absolute top-0 right-10 w-16 h-16 bg-yellow-100 rounded-2xl rotate-12 blur-sm animate-float lg:block hidden" />
              <div className="absolute bottom-10 left-10 w-20 h-20 bg-green-50 rounded-full blur-md animate-float-delayed lg:block hidden" />

              {/* Geometric decorative elements */}
              <div className="absolute top-20 left-20">
                <Code className="w-8 h-8 text-blue-200 rotate-12" />
              </div>
              <div className="absolute bottom-40 right-20">
                <Globe className="w-10 h-10 text-purple-200 -rotate-12" />
              </div>
              <div className="absolute top-1/2 right-0">
                <Cpu className="w-6 h-6 text-orange-200" />
              </div>

              {/* Faint Grid Pattern */}
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage:
                    "radial-gradient(#4b5563 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />
            </div>

            <div className="relative z-10 scale-90 sm:scale-100">
              {/* Profile Photo */}
              <div className="relative w-64 h-72 sm:w-72 sm:h-80 lg:w-80 lg:h-96 rounded-[2rem] rotate-3 hover:rotate-0 transition-transform duration-500 overflow-hidden shadow-2xl border-[6px] border-white group">
                <img
                  src={`${import.meta.env.BASE_URL}profile.jpg`}
                  alt="Rushikesh Dhanawade"
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Floating Badges */}
              <div className="absolute -top-4 -right-4 lg:-top-8 lg:-right-8 bg-white p-4 rounded-2xl shadow-xl animate-float z-20">
                <span className="text-3xl">🚀</span>
              </div>

              <div className="absolute top-1/2 -left-8 lg:-left-16 bg-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2 animate-float-delayed z-20">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="font-bold text-sm text-gray-800">
                  Open to work
                </span>
              </div>

              <div className="absolute -bottom-6 -right-2 lg:-bottom-10 lg:right-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-blue-50 animate-float z-20">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-4">
                    {/* Angular */}
                    <div
                      className="w-10 h-10 rounded-full bg-white flex items-center justify-center border-2 border-white shadow-sm p-1.5 transition-transform hover:scale-110 hover:z-10 cursor-pointer"
                      title="Angular"
                    >
                      <SiAngular className="w-full h-full text-[#DD0031]" />
                    </div>
                    {/* React */}
                    <div
                      className="w-10 h-10 rounded-full bg-white flex items-center justify-center border-2 border-white shadow-sm p-1.5 transition-transform hover:scale-110 hover:z-10 cursor-pointer"
                      title="React"
                    >
                      <SiReact className="w-full h-full text-[#61DAFB]" />
                    </div>
                    {/* MongoDB */}
                    <div
                      className="w-10 h-10 rounded-full bg-white flex items-center justify-center border-2 border-white shadow-sm p-1.5 transition-transform hover:scale-110 hover:z-10 cursor-pointer"
                      title="MongoDB"
                    >
                      <SiMongodb className="w-full h-full text-[#47A248]" />
                    </div>
                    {/* Docker */}
                    <div
                      className="w-10 h-10 rounded-full bg-white flex items-center justify-center border-2 border-white shadow-sm p-1.5 transition-transform hover:scale-110 hover:z-10 cursor-pointer"
                      title="Docker"
                    >
                      <SiDocker className="w-full h-full text-[#2496ED]" />
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold">
                      Tech Stack
                    </div>
                    <div className="text-sm font-bold text-gray-800">
                      MEAN + Docker
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
