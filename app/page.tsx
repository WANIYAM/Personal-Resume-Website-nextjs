import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <main className="pt-20">
        {/* About Section */}
        <section
          id="about"
          className="bg-gradient-to-r from-[#F3F4F6] to-[#E5E7EB] text-gray-800 min-h-screen flex items-center justify-center transition-transform duration-500 transform hover:scale-105"
        >
          <div className="max-w-4xl text-center">
            <h1 className="text-5xl font-bold text-[#6B7280] tracking-wide">Waniya Mustafa</h1>
            <p className="text-2xl mt-4 text-gray-500">Aspiring Web Developer</p>
            <p className="mt-6 text-lg">
              Passionate about crafting innovative and functional web applications. Skilled in TypeScript, Next.js, and CSS. Striving for excellence in design and functionality.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="bg-gradient-to-r from-[#E1E8F1] to-[#D4D9E2] text-gray-800 min-h-screen flex items-center justify-center transition-transform duration-500 transform hover:scale-105"
        >
          <div className="max-w-4xl text-center">
            <h2 className="text-4xl font-semibold text-[#4B5563]">Contact Information</h2>
            <div className="mt-8 space-y-4 text-lg">
              <p>
                📧 Email:{" "}
                <a href="mailto:waniyamustafa@example.com" className="text-[#4F8A8B] underline">
                  waniyamustafa@example.com
                </a>
              </p>
              <p>📞 Phone: 123-456-7890</p>
              <p>
                🔗 LinkedIn:{" "}
                <a
                  href="www.linkedin.com/in/waniya-mustafa-333ba62b4"
                  className="text-[#4F8A8B] underline"
                >
                  linkedin.com/in/waniyamustafa
                </a>
              </p>
              <p>
                🐱 GitHub:{" "}
                <a href="https://github.com/WANIYAM" className="text-[#4F8A8B] underline">
                  github.com/waniyamustafa
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="bg-gradient-to-r from-[#F4F7F9] to-[#E7EAF2] text-gray-800 min-h-screen flex items-center justify-center transition-transform duration-500 transform hover:scale-105"
        >
          <div className="max-w-4xl text-center">
            <h2 className="text-4xl font-semibold text-[#4B5563]">Skills</h2>
            <div className="mt-10 grid grid-cols-2 gap-6 text-lg">
              <p>✅ TypeScript & JavaScript</p>
              <p>✅ React & Next.js</p>
              <p>✅ Tailwind CSS</p>
              <p>✅ HTML & CSS</p>
              <p>✅ Problem Solving</p>
              <p>✅ UI/UX Design</p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section
          id="education"
          className="bg-gradient-to-r from-[#D4D9E2] to-[#E1E8F1] text-gray-800 min-h-screen flex items-center justify-center transition-transform duration-500 transform hover:scale-105"
        >
          <div className="max-w-4xl text-center">
            <h2 className="text-4xl font-semibold text-[#4B5563]">Education</h2>
            <div className="mt-6">
              <p className="text-2xl">🎓 Master’s in Mathematics</p>
              <p className="text-lg mt-2">University of Karachi, Graduated in 2023</p>
              <p className="text-2xl mt-4">🎓 Bachelor’s in Mathematics</p>
              <p className="text-lg mt-2">University of Karachi, Graduated in 2021</p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section
          id="experience"
          className="bg-gradient-to-r from-[#E7EAF2] to-[#F4F7F9] text-gray-800 min-h-screen flex items-center justify-center transition-transform duration-500 transform hover:scale-105"
        >
          <div className="max-w-4xl text-center">
            <h2 className="text-4xl font-semibold text-[#4B5563]">Experience</h2>
            <div className="mt-10">
              <h3 className="text-2xl font-bold">Web Development Intern</h3>
              <p className="text-lg mt-2">XYZ Solutions - Summer 2024</p>
              <p className="mt-4">
                Contributed to building responsive web applications using React and Next.js. Collaborated with a team to improve UI/UX and optimize performance.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-teal-800 text-white text-center py-6">
        <p>Created by Waniya Mustafa &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
