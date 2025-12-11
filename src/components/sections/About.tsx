import { Code2, Database, Globe, Brain } from "lucide-react";

function About() {
    const highlights = [
        {
            icon: <Globe className="w-6 h-6 text-blue-600" />,
            title: "Frontend Development",
            description: "Building responsive, pixel-perfect user interfaces with React, Angular and modern CSS.",
            color: "bg-blue-50 hover:bg-blue-100",
        },
        {
            icon: <Database className="w-6 h-6 text-green-600" />,
            title: "Backend Architecture",
            description: "Designing scalable APIs, database schemas, and robust server-side logic using Node.js.",
            color: "bg-green-50 hover:bg-green-100",
        },
        {
            icon: <Code2 className="w-6 h-6 text-purple-600" />,
            title: "Cloud & DevOps",
            description: "Deploying and managing applications using Docker, AWS, and modern CI/CD pipelines.",
            color: "bg-purple-50 hover:bg-purple-100",
        },
        {
            icon: <Brain className="w-6 h-6 text-orange-600" />,
            title: "AI Integration",
            description: "Leveraging OpenAI and LangChain to build intelligent, data-driven features and agents.",
            color: "bg-orange-50 hover:bg-orange-100",
        },
    ];

    return (
        <section id="about" className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column: Content */}
                    <div className="relative z-10">
                        <div className="inline-block px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6">
                            About Me
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                            Transforming complex problems into <span className="text-blue-600">elegant solutions</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            I am a passionate Software Engineer with over 4 years of experience in the full software development lifecycle.
                            My expertise lies in building scalable web applications, optimizing backend performance, and integrating AI capabilities
                            to solve real-world business challenges. I thrive on continuous learning and innovation.
                        </p>

                        {/* Stats - Redesigned as a floating card */}
                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-4 border-l-4 border-blue-500 bg-gray-50 rounded-r-xl">
                                <div className="text-3xl font-bold text-gray-900 mb-1">4+</div>
                                <div className="text-sm text-gray-600">Years Experience</div>
                            </div>
                            <div className="p-4 border-l-4 border-green-500 bg-gray-50 rounded-r-xl">
                                <div className="text-3xl font-bold text-gray-900 mb-1">20+</div>
                                <div className="text-sm text-gray-600">Projects Delivered</div>
                            </div>
                            <div className="p-4 border-l-4 border-purple-500 bg-gray-50 rounded-r-xl">
                                <div className="text-3xl font-bold text-gray-900 mb-1">40%</div>
                                <div className="text-sm text-gray-600">Performance Boost</div>
                            </div>
                            <div className="p-4 border-l-4 border-orange-500 bg-gray-50 rounded-r-xl">
                                <div className="text-3xl font-bold text-gray-900 mb-1">AI</div>
                                <div className="text-sm text-gray-600">Solutions Integrated</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Creative Feature Grid (Bento Box Style) */}
                    <div className="relative">
                        {/* Decorative background blob */}
                        <div className="absolute inset-0 bg-blue-100/50 rounded-full blur-3xl -z-10 transform scale-110" />

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {highlights.map((item, index) => (
                                <div
                                    key={index}
                                    className={`p-6 rounded-3xl transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-100 ${item.color} ${index % 2 === 1 ? 'sm:translate-y-8' : ''}`}
                                >
                                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-sm">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
