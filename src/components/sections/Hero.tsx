import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden"
        >
            {/* Subtle background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -right-64 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -left-64 w-96 h-96 bg-blue-50/40 rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                {/* Profile Photo */}
                <div className="mb-8 animate-fade-in">
                    <div className="relative inline-block">
                        {/* Animated gradient background */}
                        <div className="absolute -inset-4 bg-gradient-to-br from-blue-400 via-blue-600 to-blue-800 rounded-3xl blur-xl opacity-30 animate-pulse-slow" />

                        {/* Main photo container - Rounded rectangle with creative tilt */}
                        <div className="relative group">
                            {/* Gradient border effect */}
                            <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Photo frame */}
                            <div className="relative w-48 h-56 sm:w-56 sm:h-64 lg:w-64 lg:h-72 rounded-2xl overflow-hidden bg-white p-1">
                                <div className="w-full h-full rounded-xl overflow-hidden shadow-2xl">
                                    <img
                                        src="/profile.jpg"
                                        alt="Rushikesh Dhanawade"
                                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </div>

                            {/* Decorative corner accents */}
                            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-4 border-l-4 border-blue-500 rounded-tl-xl opacity-60" />
                            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-4 border-r-4 border-blue-500 rounded-br-xl opacity-60" />
                        </div>
                    </div>
                </div>

                {/* Greeting */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-8 animate-fade-in">
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
                    </span>
                    Available for opportunities
                </div>

                {/* Main heading */}
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight animate-slide-up">
                    Hi, I'm{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                        Rushikesh Dhanawade
                    </span>
                </h1>

                {/* Subtitle */}
                <p className="text-xl sm:text-2xl lg:text-3xl text-gray-700 font-medium mb-4 animate-slide-up animation-delay-100">
                    Software Engineer
                </p>

                {/* Location */}
                <p className="text-base sm:text-lg text-gray-500 mb-8 animate-slide-up animation-delay-200">
                    📍 Navi Mumbai, India
                </p>

                {/* Description */}
                <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 leading-relaxed mb-12 animate-slide-up animation-delay-300">
                    Passionate about building scalable web applications with modern
                    technologies. Specialized in full-stack development with expertise in{" "}
                    <span className="font-semibold text-gray-900">React</span>,{" "}
                    <span className="font-semibold text-gray-900">Node.js</span>, and{" "}
                    <span className="font-semibold text-gray-900">Cloud Technologies</span>.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up animation-delay-400">
                    <Button
                        size="lg"
                        className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group w-full sm:w-auto"
                        onClick={() => {
                            document.getElementById("projects")?.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                            });
                        }}
                    >
                        View My Work
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        className="border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-all duration-300 w-full sm:w-auto"
                        onClick={() => {
                            document.getElementById("contact")?.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                            });
                        }}
                    >
                        Get in Touch
                    </Button>
                </div>

                {/* Social Links */}
                <div className="flex items-center justify-center gap-4 animate-slide-up animation-delay-500">
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110"
                        aria-label="GitHub"
                    >
                        <Github className="w-5 h-5" />
                    </a>
                    <a
                        href="https://linkedin.com/in/rushikesh-dhanawade"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110"
                        aria-label="LinkedIn"
                    >
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                        href="mailto:rushidhanawade123@gmail.com"
                        className="p-3 rounded-full bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110"
                        aria-label="Email"
                    >
                        <Mail className="w-5 h-5" />
                    </a>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-gray-300 rounded-full p-1">
                        <div className="w-1.5 h-3 bg-gray-400 rounded-full mx-auto animate-scroll" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
