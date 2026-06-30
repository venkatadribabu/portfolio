"use client";

import {
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#030712] text-white py-28"
    >
      <div className="mx-auto max-w-7xl px-8">

        {/* Top Border */}
        <div className="border-t border-slate-800 pt-16">

          <div className="grid lg:grid-cols-2 gap-20 items-start">

            {/* LEFT */}

            <div>

              <p className="text-blue-400 uppercase tracking-[0.35em] text-sm">
                CONTACT
              </p>

              <h2 className="mt-6 text-5xl font-bold leading-tight">
                Let's build reliable full-stack systems and cloud platforms.
              </h2>

              <p className="mt-8 text-lg leading-9 text-gray-400">
                I am open to Software Engineer, AI/ML Engineer,
                Backend Engineer and Cloud Engineering opportunities.
                Feel free to connect with me.
              </p>

            </div>

            {/* RIGHT */}

            <div className="space-y-5">

              <a
                href="https://www.linkedin.com/in/YOUR-LINKEDIN"
                target="_blank"
                className="group flex items-center justify-between rounded-xl border border-slate-700 bg-[#111827]/70 px-7 py-7 transition-all duration-300 hover:border-blue-500 hover:bg-[#1E293B]"
              >
                <span className="text-xl">
                  LinkedIn Profile
                </span>

                <FaLinkedinIn
                  size={24}
                  className="text-gray-400 group-hover:text-blue-400"
                />
              </a>

              <a
                href="mailto:svenkatadri7@gmail.com"
                className="group flex items-center justify-between rounded-xl border border-slate-700 bg-[#111827]/70 px-7 py-7 transition-all duration-300 hover:border-blue-500 hover:bg-[#1E293B]"
              >
                <span className="text-xl">
                  Gmail
                </span>

                <FaEnvelope
                  size={24}
                  className="text-gray-400 group-hover:text-blue-400"
                />
              </a>

              <a
                href="https://github.com/venkatadribabu"
                target="_blank"
                className="group flex items-center justify-between rounded-xl border border-slate-700 bg-[#111827]/70 px-7 py-7 transition-all duration-300 hover:border-blue-500 hover:bg-[#1E293B]"
              >
                <span className="text-xl">
                  GitHub Portfolio
                </span>

                <FaGithub
                  size={24}
                  className="text-gray-400 group-hover:text-blue-400"
                />
              </a>

            </div>

          </div>

        </div>

        {/* Bottom Footer */}

        <div className="mt-20 border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between text-gray-500">

          <p>
            Designed & Developed by <span className="text-white">S. Venkatadri</span>
          </p>

          <p className="mt-4 md:mt-0">
            © 2026 | Software Engineer
          </p>

        </div>

      </div>
    </section>
  );
}