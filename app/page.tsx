import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <main className="animate-fade-in">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Hero Section */}
          <section className="mb-8 animate-fade-in">
            <div className="flex items-center gap-4 md:gap-6">
              <Image
                src="/images/profile.png"
                alt="Adriele Matthew Tosino"
                width={160}
                height={160}
                className="rounded-lg w-40 h-40 md:w-40 md:h-40 object-cover shrink-0"
                priority
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <h1 className="text-lg md:text-2xl font-bold truncate">
                      Adriele Matthew Tosino
                    </h1>
                  </div>
                </div>

                <p className="text-xs md:text-sm text-foreground/70 mt-0.5 flex items-center gap-1">
                  <svg
                    className="w-3 h-3 md:w-3.5 md:h-3.5 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="truncate">Batangas, Philippines</span>
                </p>

                <div className="flex items-center justify-between mt-1.5 md:mt-2">
                  <p className="text-[10px] md:text-base">BSIT Student</p>
                </div>

                <div className="space-y-2 mt-3 md:mt-4">
                  <div className="flex gap-2">
                    <a
                      href="mailto:tosinomatthew@gmail.com"
                      className="inline-flex h-7 md:h-8 items-center rounded-lg bg-foreground px-2.5 md:px-4 text-[8px] md:text-xs font-medium text-background transition-all duration-200 hover:bg-foreground/90 hover:-translate-y-0.5 gap-1 md:gap-1.5 whitespace-nowrap min-h-0"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-left">Send Email</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Bento Grid */}
          <section className="grid grid-cols-1 md:grid-cols-6 gap-2">
            {/* Tech Stack Section */}
            <div className="bento-card p-4 col-span-1 md:col-span-4 space-y-2 group animate-fade-in bg-white dark:bg-gray-800 rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold">Tech Stack</h2>
                {/* <a
                  href="#"
                  className="text-xs text-foreground/70 hover:text-foreground flex items-center gap-1 transition-colors"
                >
                  View All
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a> */}
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold mb-2">Frontend</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      "JavaScript",
                      "TypeScript",
                      "React",
                      "React Native Expo",
                      "Tailwind CSS",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 shadow-[0_1px_1px_rgba(0,0,0,0.03)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold mb-2">Backend</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {["Node.js", "Express.js", "PHP", "MySQL", "Redis"].map(
                      (tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 shadow-[0_1px_1px_rgba(0,0,0,0.03)]"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold mb-2">DevOps & Cloud</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {["Git", "GitHub Actions", "Linux"].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 shadow-[0_1px_1px_rgba(0,0,0,0.03)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Section */}
            <div className="col-span-1 md:col-span-2 md:row-span-3 space-y-2 animate-fade-in">
              <div className="bento-card p-4 space-y-2 group flex-1 bg-white dark:bg-gray-800 rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300">
                <h2 className="text-lg font-bold">Experience</h2>
                <div className="relative space-y-4 mt-4">
                  <div className="absolute left-1.5 top-1.5 bottom-2 w-px bg-gray-300 dark:bg-gray-600"></div>

                  <div className="relative pl-6 group/role">
                    <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 border-blue-600 bg-blue-600 transition-colors"></div>
                    <div className="space-y-1">
                      <h3 className="text-sm font-semibold text-blue-600 transition-colors">
                        BSIT College Student
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-foreground/70">
                          Batangas State University - Malvar
                        </span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                          Now
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="relative pl-6 group/role">
                    <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 border-gray-300 bg-white group-hover/role:bg-blue-600 transition-colors"></div>
                    <div className="space-y-1">
                      <h3 className="text-sm font-semibold group-hover/role:text-blue-600 transition-colors">
                        TVL-ICT Graduate
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-foreground/70">
                          La Consolacion College Tanauan
                        </span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-foreground/5">
                          2023
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="relative pl-6 group/role">
                    <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 border-gray-300 bg-white group-hover/role:bg-blue-600 transition-colors"></div>
                    <div className="space-y-1">
                      <h3 className="text-sm font-semibold group-hover/role:text-blue-600 transition-colors">
                        Hello World!
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-foreground/70">
                          Wrote my first line of code
                        </span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-foreground/5">
                          2021
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Projects Section */}
            <div className="bento-card p-4 col-span-1 md:col-span-6 space-y-2 group animate-fade-in bg-white dark:bg-gray-800 rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold">Recent Projects</h2>
                {/* <a
                  href="#"
                  className="text-xs text-foreground/70 hover:text-foreground flex items-center gap-1 transition-colors"
                >
                  View All
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a> */}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
                <div className="bento-card p-3 space-y-1 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <h3 className="text-sm font-semibold group-hover:text-blue-600">
                    Smart Traffic Light System
                  </h3>
                  <p className="text-xs text-foreground/70">
                    IoT-based adaptive traffic control
                  </p>
                  {/* <p className="text-xs text-foreground/50 font-mono bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded-md inline-block mt-1">
                    View code
                  </p> */}
                </div>
                <div className="bento-card p-3 space-y-1 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <h3 className="text-sm font-semibold group-hover:text-blue-600">
                    DBMS Project
                  </h3>
                  <p className="text-xs text-foreground/70">
                    Desktop restaurant management system
                  </p>
                  {/* <p className="text-xs text-foreground/50 font-mono bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded-md inline-block mt-1">
                    View code
                  </p> */}
                </div>
                <div className="bento-card p-3 space-y-1 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <h3 className="text-sm font-semibold group-hover:text-blue-600">
                    ADBMS Project
                  </h3>
                  <p className="text-xs text-foreground/70">
                    Web-based restaurant management system
                  </p>
                  {/* <p className="text-xs text-foreground/50 font-mono bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded-md inline-block mt-1">
                    View code
                  </p> */}
                </div>
                <div className="bento-card p-3 space-y-1 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <h3 className="text-sm font-semibold group-hover:text-blue-600">
                    Computer Programming Project
                  </h3>
                  <p className="text-xs text-foreground/70">
                    Product management system
                  </p>
                  {/* <p className="text-xs text-foreground/50 font-mono bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded-md inline-block mt-1">
                    View code
                  </p> */}
                </div>
              </div>
            </div>
            {/* About Section */}
            <div className="bento-card p-5 col-span-1 md:col-span-4 space-y-2 group animate-fade-in bg-white dark:bg-gray-800 rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300">
              <h2 className="text-lg font-bold">About</h2>
              <p className="text-sm text-foreground/69 leading-relaxed">
                I am a BSIT student with a background in TVL-ICT from Senior
                High School, where I built a strong foundation in programming,
                computer systems, and technical problem-solving. My early
                exposure to IT strengthened my interest in software development
                and system design, leading me to continuously improve my skills
                through academic projects and hands-on development. I enjoy
                building practical solutions and I am passionate about
                learning new technologies that solve real-world problems
                efficiently and intelligently.
              </p>
            </div>

            {/* Contact Section */}
            <div className="bento-card p-4 col-span-1 md:col-span-2 space-y-2 group animate-fade-in bg-white dark:bg-gray-800 rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300">
              <h2 className="text-lg font-bold">Get In Touch</h2>
              <p className="text-sm text-foreground/70 leading-relaxed mb-4">
                Always interested in new opportunities and exciting projects.
                Let&apos;s connect and build something amazing together!
              </p>
              <div className="space-y-1">
                <a
                  href="mailto:your.email@example.com"
                  className="group p-1.5 rounded-md bg-foreground/5 hover:bg-foreground/10 transition-all duration-200 hover:-translate-y-0.5 block"
                >
                  <div className="flex items-center gap-1 mb-0.5">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="text-[9px] text-foreground/70 font-medium">
                      Email
                    </p>
                  </div>
                  <p className="text-[9px] font-medium text-foreground group-hover:text-blue-600 transition-colors">
                    tosinomatthew@gmail.com
                  </p>
                </a>
                <a
                  href="https://github.com/Adamskiee"
                  className="group p-1.5 rounded-md bg-foreground/5 hover:bg-foreground/10 transition-all duration-200 hover:-translate-y-0.5 block"
                >
                  <div className="flex items-center gap-1 mb-0.5">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-[9px] text-foreground/70 font-medium">
                      GitHub
                    </p>
                  </div>
                  <p className="text-[9px] font-medium text-foreground group-hover:text-blue-600 transition-colors">
                    View my code
                  </p>
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="max-w-4xl mx-auto px-4 py-8 border-t border-gray-200 dark:border-gray-700 mt-12">
          <div className="flex justify-center items-center">
            <p className="text-sm text-foreground/70">
              © 2026 Adriele Matthew Tosino. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
