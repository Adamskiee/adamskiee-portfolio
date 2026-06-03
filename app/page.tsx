import Image from "next/image";

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-white dark:bg-gray-900">
      <main className="animate-fade-in">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Hero Section */}
          <section
            className="mb-8 animate-fade-in scroll-mt-16"
            aria-labelledby="hero-heading"
          >
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
                {/* Status badge */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-foreground/5 border border-foreground/10 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 animate-pulse" />
                  <span className="text-[10px] font-medium text-foreground/60">
                    Open to Opportunities
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <h1
                    id="hero-heading"
                    className="text-lg md:text-2xl font-bold truncate"
                  >
                    Adriele Matthew Tosino
                  </h1>
                </div>

                <p className="text-xs md:text-sm text-foreground/50 mt-0.5 italic">
                  Building practical solutions with modern tech
                </p>

                <p className="text-xs md:text-sm text-foreground/70 mt-1 flex items-center gap-1">
                  <svg
                    aria-hidden="true"
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

                <p className="text-[10px] md:text-sm mt-1 text-foreground/70">
                  BSIT Student
                </p>

                <div className="flex gap-2 mt-3 md:mt-4">
                  <a
                    href="mailto:tosinomatthew@gmail.com"
                    className="inline-flex h-7 md:h-8 items-center rounded-lg bg-foreground px-2.5 md:px-4 text-[8px] md:text-xs font-medium text-background transition-all duration-200 hover:bg-foreground/90 hover:-translate-y-0.5 gap-1 md:gap-1.5 whitespace-nowrap"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-3.5 h-3.5"
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
                    Send Email
                  </a>
                  <a
                    href="https://github.com/Adamskiee"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-7 md:h-8 items-center rounded-lg border border-foreground/20 px-2.5 md:px-4 text-[8px] md:text-xs font-medium text-foreground transition-all duration-200 hover:bg-foreground/5 hover:-translate-y-0.5 gap-1 md:gap-1.5 whitespace-nowrap"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-3.5 h-3.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Bento Grid */}
          <section
            className="grid grid-cols-1 md:grid-cols-6 gap-2"
            aria-label="Portfolio content"
          >
            {/* Tech Stack */}
            <div
              id="stack"
              className="bento-card p-4 col-span-1 md:col-span-4 space-y-2 group animate-fade-in bg-white dark:bg-gray-800 rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 scroll-mt-16"
            >
              <h2 className="text-lg font-bold">Tech Stack</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold mb-2">Frontend</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      "JavaScript",
                      "TypeScript",
                      "Tailwind CSS",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs rounded-md bg-foreground/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold mb-2">Mobile</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {["Expo"].map(
                      (tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-xs rounded-md bg-foreground/5"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold mb-2">Backend</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {["Watermelon DB", "PHP", "MySQL", "Redis"].map(
                      (tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-xs rounded-md bg-foreground/5"
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
                    {["Git", "GitHub Actions", "Linux", "EAS"].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs rounded-md bg-foreground/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="col-span-1 md:col-span-2 md:row-span-3 space-y-2 animate-fade-in">
              <div className="bento-card p-4 space-y-2 group flex-1 bg-white dark:bg-gray-800 rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300">
                <h2 className="text-lg font-bold">Experience</h2>
                <div className="relative space-y-4 mt-4">
                  <div className="absolute left-1.5 top-1.5 bottom-2 w-px bg-gray-300 dark:bg-gray-600" />

                  <div className="relative pl-6 group/role">
                    <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 border-foreground bg-foreground" />
                    <div className="space-y-1">
                      <h3 className="text-sm font-semibold">
                        BSIT College Student
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-foreground/70">
                          Batangas State University - Malvar
                        </span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-foreground/10 text-foreground/70">
                          Now
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="relative pl-6 group/role">
                    <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 border-gray-300 bg-white group-hover/role:bg-foreground transition-colors" />
                    <div className="space-y-1">
                      <h3 className="text-sm font-semibold group-hover/role:text-foreground transition-colors">
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
                    <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 border-gray-300 bg-white group-hover/role:bg-foreground transition-colors" />
                    <div className="space-y-1">
                      <h3 className="text-sm font-semibold group-hover/role:text-foreground transition-colors">
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

            {/* Projects */}
            <div
              id="projects"
              className="bento-card p-4 col-span-1 md:col-span-6 space-y-2 group animate-fade-in bg-white dark:bg-gray-800 rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 scroll-mt-16"
            >
              <h2 className="text-lg font-bold">Recent Projects</h2>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
                <div className="bento-card p-3 space-y-2 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-semibold">
                      Smart Traffic Light System
                    </h3>
                    <p className="text-xs text-foreground/70 mt-0.5">
                      IoT-based adaptive traffic control
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {["Arduino", "ESP32", "PHP"].map((tag) => (
                      <span
                        key={tag}
                        className="px-1.5 py-0.5 text-[10px] rounded bg-foreground/5 text-foreground/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bento-card p-3 space-y-2 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-semibold">
                      LAN Chat Application
                    </h3>
                    <p className="text-xs text-foreground/70 mt-0.5">
                      Offline-based realtime messaging over local network
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {["Expo", "Watermelon DB", "Networking"].map((tag) => (
                      <span
                        key={tag}
                        className="px-1.5 py-0.5 text-[10px] rounded bg-foreground/5 text-foreground/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Certificates */}
            <div
              id="certificates"
              className="bento-card p-4 col-span-1 md:col-span-6 space-y-3 group animate-fade-in bg-white dark:bg-gray-800 rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 scroll-mt-16"
            >
              <h2 className="text-lg font-bold">Certificates & Achievements</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                {[
                  {
                    title: "CCST Networking",
                    issuer: "Cisco",
                    url: "https://www.credly.com/badges/9b2950e2-e924-4f06-8bb1-9dbf6cdf16de/public_url",
                  },
                  {
                    title: "AWS Academy Cloud Foundations",
                    issuer: "AWS Academy",
                    url: "https://www.credly.com/badges/cffc4ec7-f1c8-4d04-9448-3e08dd502f21/public_url",
                  },
                  {
                    title: "NetRiders General Certificate",
                    issuer: "Cisco NetRiders",
                    url: "https://web.cvent.com/survey/certificate/928d2a35-f1b6-4c5d-b1d3-842264641967?r=b1241271-1e30-4eae-8efe-a22ec8109179&code=NetRiders+General+Certificate",
                  },
                  {
                    title: "General Certificate",
                    issuer: "Cisco",
                    url: "https://web.cvent.com/survey/certificate/784cbc60-b3af-4da3-8984-22f43d5882af?r=02ad10b9-0103-41ac-9fa2-2c9e39bf228a&code=General+Certificate",
                  },
                  {
                    title: "PhilNITS Passer",
                    issuer: "PhilNITS / JITEC",
                    url: "https://www.facebook.com/share/18fbifhZvX/",
                  },
                  {
                    title: "Hack4Gov 2026 — 5th Place",
                    issuer: "Hack4Gov",
                    url: "https://www.facebook.com/share/p/1CYee8sgmT/",
                  },
                  {
                    title: "Young Lifters Program 2026",
                    issuer: "Participant",
                    url: null,
                  },
                ].map((cert) => (
                  <div
                    key={cert.title}
                    className="bento-card p-3 space-y-1 bg-gray-50 dark:bg-gray-700 rounded-lg transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <h3 className="text-sm font-semibold leading-snug">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-foreground/70 mt-0.5">
                        {cert.issuer}
                      </p>
                    </div>
                    {cert.url && (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1 text-[10px] text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        View credential
                        <svg
                          aria-hidden="true"
                          className="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* About */}
            <div
              id="about"
              className="bento-card p-5 col-span-1 md:col-span-4 space-y-2 group animate-fade-in bg-white dark:bg-gray-800 rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 scroll-mt-16"
            >
              <h2 className="text-lg font-bold">About</h2>
              <p className="text-sm text-foreground/70 leading-relaxed">
                I am a BSIT student with a background in TVL-ICT from Senior
                High School, where I built a strong foundation in programming,
                computer systems, and technical problem-solving. My early
                exposure to IT strengthened my interest in software development
                and system design, leading me to continuously improve my skills
                through academic projects and hands-on development. I enjoy
                building practical solutions and I am passionate about learning
                new technologies that solve real-world problems efficiently and
                intelligently.
              </p>
            </div>

            {/* Contact */}
            <div
              id="contact"
              className="bento-card p-4 col-span-1 md:col-span-2 space-y-2 group animate-fade-in bg-white dark:bg-gray-800 rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 scroll-mt-16"
            >
              <h2 className="text-lg font-bold">Get In Touch</h2>
              <p className="text-sm text-foreground/70 leading-relaxed mb-4">
                Always interested in new opportunities and exciting projects.
                Let&apos;s connect and build something amazing together!
              </p>
              <div className="space-y-1">
                <a
                  href="mailto:tosinomatthew@gmail.com"
                  className="group/link p-1.5 rounded-md bg-foreground/5 hover:bg-foreground/10 transition-all duration-200 hover:-translate-y-0.5 block"
                >
                  <div className="flex items-center gap-1 mb-0.5">
                    <svg
                      aria-hidden="true"
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
                  <p className="text-[9px] font-medium text-foreground group-hover/link:text-blue-600 transition-colors">
                    tosinomatthew@gmail.com
                  </p>
                </a>
                <a
                  href="https://github.com/Adamskiee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link p-1.5 rounded-md bg-foreground/5 hover:bg-foreground/10 transition-all duration-200 hover:-translate-y-0.5 block"
                >
                  <div className="flex items-center gap-1 mb-0.5">
                    <svg
                      aria-hidden="true"
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
                  <p className="text-[9px] font-medium text-foreground group-hover/link:text-blue-600 transition-colors">
                    github.com/Adamskiee
                  </p>
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="max-w-4xl mx-auto px-4 py-8 border-t border-gray-200 dark:border-gray-700 mt-12">
          <div className="flex items-center justify-between">
            <p className="text-sm text-foreground/60">
              © 2026 Adriele Matthew Tosino
            </p>
            <div className="flex items-center gap-3">
              <a
                href="mailto:tosinomatthew@gmail.com"
                aria-label="Email"
                className="text-foreground/40 hover:text-foreground transition-colors"
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
              </a>
              <a
                href="https://github.com/Adamskiee"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-foreground/40 hover:text-foreground transition-colors"
              >
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
              </a>
              <a
                href="#top"
                className="text-foreground/40 hover:text-foreground transition-colors text-xs"
              >
                ↑ Top
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
