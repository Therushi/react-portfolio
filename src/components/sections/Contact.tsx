import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:rushidhanawade123@gmail.com";
  };

  const handleSocialClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-50/50 via-white to-white pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight animate-fade-in">
          Ready to make an <span className="text-blue-600">impact?</span>
        </h2>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-100">
          I'm currently looking for new opportunities in Full Stack Development
          and AI Engineering. Whether you have a question or just want to say
          hi, my inbox is always open!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20 animate-fade-in delay-200">
          <Button
            onClick={handleEmailClick}
            className="h-14 px-12 rounded-full text-lg bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-200 transition-all hover:-translate-y-1 cursor-pointer"
          >
            <Mail className="w-5 h-5 mr-2.5" />
            Say Hello
          </Button>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              onClick={() => handleSocialClick("https://github.com/Therushi")}
              className="h-14 w-14 rounded-full border-2 border-gray-200 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all hover:-translate-y-1 cursor-pointer"
              title="GitHub"
            >
              <Github className="w-6 h-6" />
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                handleSocialClick(
                  "https://www.linkedin.com/in/rushikesh-dhanawade"
                )
              }
              className="h-14 w-14 rounded-full border-2 border-gray-200 hover:border-[#0077b5] hover:bg-[#0077b5] hover:text-white transition-all hover:-translate-y-1 cursor-pointer"
              title="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </Button>
          </div>
        </div>

        <footer className="border-t border-gray-100 pt-12 flex flex-col items-center">
          <p className="text-gray-500 mb-4 text-sm">
            Designed & Built with <span className="text-red-500 mx-1">❤</span>{" "}
            by Rushikesh Dhanawade
          </p>
          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
