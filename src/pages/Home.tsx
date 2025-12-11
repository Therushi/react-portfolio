import NavBar from "@/components/core/NavBar";

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />

      {/* Hero Section - Placeholder */}
      <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-4">
            Rushikesh Dhanawade
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-2">
            Software Engineer
          </p>
          <p className="text-base text-gray-500 mb-8">
            Navi Mumbai, India
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section - Placeholder */}
      <section id="about" className="min-h-screen flex items-center justify-center bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">About</h2>
          <p className="text-lg text-gray-600">
            About section coming soon...
          </p>
        </div>
      </section>

      {/* Experience Section - Placeholder */}
      <section id="experience" className="min-h-screen flex items-center justify-center bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Experience</h2>
          <p className="text-lg text-gray-600">
            Experience section coming soon...
          </p>
        </div>
      </section>

      {/* Projects Section - Placeholder */}
      <section id="projects" className="min-h-screen flex items-center justify-center bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Projects</h2>
          <p className="text-lg text-gray-600">
            Projects section coming soon...
          </p>
        </div>
      </section>

      {/* Skills Section - Placeholder */}
      <section id="skills" className="min-h-screen flex items-center justify-center bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Skills</h2>
          <p className="text-lg text-gray-600">
            Skills section coming soon...
          </p>
        </div>
      </section>

      {/* Contact Section - Placeholder */}
      <section id="contact" className="min-h-screen flex items-center justify-center bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Contact</h2>
          <p className="text-lg text-gray-600">
            Contact section coming soon...
          </p>
        </div>
      </section>

      {/* Footer - Placeholder */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2024 Rushikesh Dhanawade. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
