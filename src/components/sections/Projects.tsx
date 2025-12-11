import { Github, Zap, TrendingUp, Code2, Layout, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
    {
        id: 1,
        title: "AI Report Summarization Agent",
        description: "An intelligent agent that processes organizational reports to generate human-like summaries, making data-driven insights instantly accessible.",
        impact: "Boosted client retention by making insights accessible",
        stats: [
            { label: "Client Retention", value: "Boosted", icon: TrendingUp },
            { label: "Processing", value: "Real-time", icon: Zap },
        ],
        tech: ["LangChain", "OpenAI API", "Node.js", "RESTful API"],
        category: "AI & Backend",
        gradient: "from-blue-500/20 to-purple-500/20",
        border: "border-blue-100",
        icon: Code2,
    },
    {
        id: 2,
        title: "Employee Portal Revamp",
        description: "A complete redesign and re-architecture of the core employee portal, focusing on performance, scalability, and user experience.",
        impact: "Increased system performance by 40% & reduced codebase by 80%",
        stats: [
            { label: "Performance", value: "+40%", icon: Zap },
            { label: "Code Reduction", value: "80%", icon: Layout },
        ],
        tech: ["Angular", "TypeScript", "UI Component Lib", "Rule-based AI"],
        category: "Frontend & Architecture",
        gradient: "from-orange-500/20 to-red-500/20",
        border: "border-orange-100",
        icon: Layout,
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-gray-50/50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                        Featured <span className="text-blue-600">Work</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Highlights of my technical contributions, focusing on AI agents and scalable web architecture.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className="group relative bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2 animate-slide-up"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            {/* Gradient Background Decoration */}
                            <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 blur-[80px] rounded-full transition-opacity duration-700 pointer-events-none`} />

                            <div className="relative z-10 flex flex-col h-full">
                                {/* Header: Icon & Category */}
                                <div className="flex items-center justify-between mb-8">
                                    <div className={`p-4 rounded-2xl bg-gray-50 group-hover:bg-white group-hover:shadow-md transition-all duration-300 ${project.border} border`}>
                                        <project.icon className="w-8 h-8 text-gray-700 group-hover:text-blue-600 transition-colors" />
                                    </div>
                                    <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-gray-100 text-gray-600 group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors">
                                        {project.category}
                                    </span>
                                </div>

                                {/* Title & Description */}
                                <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-lg text-gray-600 leading-relaxed mb-8 flex-grow">
                                    {project.description}
                                </p>

                                {/* Impact Stats */}
                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    {project.stats.map((stat) => (
                                        <div key={stat.label} className="bg-gray-50/80 rounded-2xl p-4 border border-gray-100 group-hover:bg-white/80 group-hover:border-blue-100 transition-colors">
                                            <div className="flex items-center gap-2 mb-1">
                                                <stat.icon className="w-4 h-4 text-gray-400 group-hover:text-blue-500" />
                                                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{stat.label}</span>
                                            </div>
                                            <div className="text-xl font-bold text-gray-900">{stat.value}</div>
                                        </div>
                                    ))}
                                </div>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-10">
                                    {project.tech.map((t) => (
                                        <span key={t} className="px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-sm font-medium text-gray-600 shadow-sm">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex items-center gap-4 mt-auto">
                                    {/* Placeholder buttons since clear URLs weren't provided, but structure is ready */}
                                    <Button className="rounded-full px-6 bg-gray-900 hover:bg-blue-600 text-white transition-colors group/btn">
                                        View Details
                                        <ArrowUpRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                    </Button>
                                    <Button variant="ghost" className="rounded-full px-6 hover:bg-gray-100">
                                        <Github className="w-5 h-5 mr-2" />
                                        Code
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
