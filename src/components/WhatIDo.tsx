import {
  FaLaptopCode,
  FaCloud,
  FaRobot,
} from "react-icons/fa";

const cards = [
  {
    icon: <FaLaptopCode size={28} />,
    title: "Full Stack Development",
    desc:
      "Develop scalable frontend and backend applications using React, Next.js, FastAPI, Python and REST APIs.",
    skills: ["React", "Next.js", "FastAPI", "Python"],
  },
  {
    icon: <FaCloud size={28} />,
    title: "Cloud Engineering",
    desc:
      "Deploy enterprise applications using Azure, Docker, Kubernetes, CI/CD and cloud-native architecture.",
    skills: ["Azure", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    icon: <FaRobot size={28} />,
    title: "AI & Machine Learning",
    desc:
      "Build intelligent applications using Azure OpenAI, LangChain, RAG, Vector Databases and LLMs.",
    skills: ["OpenAI", "LangChain", "RAG", "LLMs"],
  },
];

export default function WhatIDo() {
  return (
    <section
      id="what-i-do"
      className="bg-[#030712] py-28 text-white"
    >
      <div className="mx-auto max-w-7xl px-8">

        <p className="text-sm uppercase tracking-[0.35em] text-blue-400">
          WHAT I DO
        </p>

        <h2 className="mt-4 text-5xl font-bold">
          Building Modern Software
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-9 text-gray-400">
          I design scalable backend systems, enterprise AI solutions,
          cloud-native applications and modern web experiences using
          industry best practices.
        </p>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {cards.map((card) => (
            <div
              key={card.title}
              className="group rounded-2xl border border-slate-700 bg-[#111827]/70 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_35px_rgba(59,130,246,0.25)]"
            >
              <div className="mb-6 inline-flex rounded-xl bg-blue-600/10 p-4 text-blue-400">
                {card.icon}
              </div>

              <h3 className="text-2xl font-bold">
                {card.title}
              </h3>

              <p className="mt-5 leading-8 text-gray-400">
                {card.desc}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">

                {card.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-slate-600 px-3 py-1 text-sm text-gray-300"
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}