export default function Projects() {
  const projects = [
    {
      title: "AI-Powered Document Intelligence",
      description:
        "Enterprise AI platform using FastAPI, Azure OpenAI, LangChain and RAG for intelligent document search.",
      tech: "Python • FastAPI • Azure • LangChain • OpenAI",
    },
    {
      title: "Library Management System",
      description:
        "Full-stack web application for managing books, users and borrowing workflows.",
      tech: "React • Node.js • MongoDB • REST API",
    },
    {
      title: "Machine Learning Analytics",
      description:
        "Predictive analytics and data visualization using Python and Scikit-learn.",
      tech: "Python • Pandas • Scikit-learn • Matplotlib",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-slate-900 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-8">

        <h2 className="mb-6 text-center text-5xl font-bold">
          Featured <span className="text-blue-500">Projects</span>
        </h2>

        <p className="mx-auto mb-16 max-w-3xl text-center text-gray-400">
          A selection of projects showcasing AI, backend development, cloud technologies, and full-stack engineering.
        </p>

        <div className="grid gap-8 lg:grid-cols-3">

          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-2xl border border-slate-700 bg-slate-950 p-8 transition hover:-translate-y-2 hover:border-blue-500"
            >
              <h3 className="mb-4 text-2xl font-bold">
                {project.title}
              </h3>

              <p className="mb-6 text-gray-400">
                {project.description}
              </p>

              <p className="text-blue-400">
                {project.tech}
              </p>

              <button className="mt-8 rounded-lg bg-blue-600 px-5 py-2 hover:bg-blue-700">
                View Project
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}