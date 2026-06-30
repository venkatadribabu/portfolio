export default function About() {
  const highlights = [
    {
      title: "4+",
      subtitle: "Years Experience",
      description:
        "Building scalable enterprise software, backend APIs and AI-powered cloud solutions.",
    },
    {
      title: "AI",
      subtitle: "Specialization",
      description:
        "Generative AI, LangChain, Azure OpenAI, Machine Learning and RAG applications.",
    },
    {
      title: "Cloud",
      subtitle: "Engineering",
      description:
        "Designing cloud-native applications using Azure, Docker, Kubernetes and CI/CD.",
    },
    {
      title: "20+",
      subtitle: "Projects",
      description:
        "Enterprise software, AI applications, cloud platforms and full-stack development.",
    },
  ];

  

  return (
    <section
      id="about"
      className="bg-[#030712] py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-8">

        <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-4">
          About Me
        </p>

        <h2 className="text-5xl md:text-6xl font-bold leading-tight">
          Building Intelligent
          <br />
          <span className="text-blue-500">
            AI-Powered Software
          </span>
        </h2>

        <div className="mt-6 h-1 w-24 rounded-full bg-blue-500"></div>

        <p className="mt-10 max-w-4xl text-lg leading-9 text-gray-400">
          I'm <span className="text-white font-semibold">
          S. Venkatadri
          </span>, a Software Engineer and AI/ML Engineer with
          4+ years of experience designing scalable backend
          systems, enterprise cloud applications, REST APIs
          and AI-powered solutions.

          <br /><br />

          My expertise includes Python, FastAPI, Azure,
          Azure OpenAI, LangChain, Docker, Kubernetes,
          PostgreSQL and Generative AI.

          <br /><br />

          I enjoy building production-ready software that
          improves business workflows through modern cloud
          architecture and Artificial Intelligence.
        </p>

        <div className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-4">

          {highlights.map((item) => (

            <div
              key={item.subtitle}
              className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500"
            >

              <h3 className="text-5xl font-bold text-blue-500">
                {item.title}
              </h3>

              <p className="mt-4 text-xl font-semibold">
                {item.subtitle}
              </p>

              <p className="mt-3 text-gray-400">
                {item.description}
              </p>

            </div>

          ))}

        </div>

        </div>
    </section>
  );
}
