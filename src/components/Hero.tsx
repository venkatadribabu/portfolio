"use client";

import Image from "next/image";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#030712] text-white pt-32 lg:pt-36 min-h-screen"
    >
      {/* Background Glow */}
      <div className="absolute right-[-180px] top-24 h-[750px] w-[750px] rounded-full bg-blue-600/20 blur-[170px]" />

      <div className="mx-auto flex max-w-[1700px] items-center justify-between gap-24 px-8 lg:px-20 xl:px-28">
        
        {/* Left Social Icons */}

        <div className="fixed left-8 top-1/2 hidden -translate-y-1/2 lg:flex flex-col gap-10 z-50">

          <a
            href="https://www.linkedin.com/in/YOUR-LINKEDIN"
            target="_blank"
            className="text-4xl text-gray-300 transition-all duration-300 hover:text-blue-500 hover:scale-125"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://github.com/venkatadribabu"
            target="_blank"
            className="text-4xl text-gray-300 transition-all duration-300 hover:text-blue-500 hover:scale-125"
          >
            <FaGithub />
          </a>

          <a
            href="mailto:svenkatadri7@gmail.com"
            className="text-4xl text-gray-300 transition-all duration-300 hover:text-blue-500 hover:scale-125"
          >
            <FaEnvelope />
          </a>

        </div>

        {/* LEFT CONTENT */}

        <div className="max-w-2xl">

          <p className="mb-6 text-3xl text-blue-400">
            👋 Hello, I'm
          </p>

          <h1 className="text-7xl lg:text-6xl font-extrabold leading-none">

            <span className="text-white">
              S.
            </span>{" "}

            <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Venkatadri
            </span>

          </h1>

          <h2 className="mt-8 text-3xl lg:text-4xl font-bold leading-snug text-white">

            Software Engineer

            <span className="text-blue-500"> | </span>

            AI / ML Engineer

            <span className="text-blue-500"> | </span>

            Cloud & Backend Engineer

          </h2>

          <p className="mt-5 text-xl leading-8 text-gray-400">

            Building enterprise-scale AI applications using Python,
            FastAPI, Azure OpenAI, LangChain, Docker,
            Kubernetes and cloud-native architectures.

            <br />
            <br />

            Passionate about developing scalable backend systems,
            Generative AI solutions, cloud infrastructure,
            and production-ready enterprise software.

          </p>

          <div className="mt-12 flex gap-6">

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-xl border border-blue-500 bg-gradient-to-r from-[#0F172A] to-[#111827] px-8 py-5 text-xl font-semibold shadow-[0_0_30px_rgba(59,130,246,0.25)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_45px_rgba(59,130,246,0.45)]"
            >
              <FaDownload />
              Download Resume
            </a>

            <a
              href="#projects"
              className="group flex items-center gap-3 rounded-xl border border-gray-700 bg-[#111827]/70 px-8 py-5 text-xl font-semibold transition-all duration-300 hover:border-blue-500 hover:bg-[#1E293B]"
            >
              View Projects
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>

          </div>

        </div>

        <div className="relative hidden lg:flex flex-1 items-center justify-end">

          {/* Glow Behind Image */}
          <div className="absolute h-[700px] w-[700px] rounded-full bg-blue-500/20 blur-[170px]" />

          {/* Floating Image */}
          <div className="relative z-10 animate-float">
  <Image
    src="/profile.png"
    alt="Venkatadri"
    width={650}
    height={780}
    priority
    className="object-contain drop-shadow-[0_0_70px_rgba(59,130,246,0.35)]"
  />
</div>

        </div>

      </div>

    </section>
  );
}