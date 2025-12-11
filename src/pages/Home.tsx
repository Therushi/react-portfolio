import NavBar from "@/components/core/NavBar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

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
