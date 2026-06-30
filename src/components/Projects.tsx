import { BriefcaseBusiness } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      category: "AI • GENERATIVE AI • CLOUD",
      title: "AI-Powered Cloud Document Intelligence Platform",
      description:
        "Enterprise AI-powered document intelligence platform for intelligent document processing, semantic search, knowledge retrieval, and workflow automation using Azure OpenAI, LangChain, and Retrieval-Augmented Generation (RAG).",

      highlight:
        "Processed and indexed 500,000+ enterprise documents with Azure OpenAI, LangChain and cloud-native microservices.",

      tech: [
        "Python",
        "FastAPI",
        "Azure OpenAI",
        "LangChain",
        "RAG",
        "Docker",
        "Kubernetes",
      ],
    },

    {
      category: "FULL-STACK WEB APPLICATION",

      title: "Library Management System",

      description:
        "Modern Library Management System supporting inventory management, reservations, authentication, borrowing workflows, reporting dashboards and role-based access control.",

      highlight:
        "Implemented secure RBAC authentication, automated workflows and real-time inventory tracking.",

      tech: [
        "React.js",
        "Node.js",
        "MongoDB",
        "REST API",
        "JWT",
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="bg-[#030712] py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-8">

        {/* Heading */}

        <p className="text-sm uppercase tracking-[0.35em] text-blue-400">
          SELECTED WORK
        </p>

        <h2 className="mt-4 text-5xl font-bold leading-tight">
          Projects shaped around
          <br />
          automation, reliability,
          <br />
          and speed.
        </h2>

        <p className="mt-6 max-w-3xl text-lg text-gray-400">
          These portfolio case studies showcase enterprise AI, cloud-native
          backend engineering and modern full-stack development built from my
          professional experience and academic projects.
        </p>

        {/* Project Cards */}

        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {projects.map((project) => (

            <div
              key={project.title}
              className="rounded-xl border border-slate-800 bg-[#0B1120] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)]"
            >

              {/* Header */}

              <div className="flex items-start justify-between">

                <p className="text-xs uppercase tracking-[0.3em] text-blue-400">
                  {project.category}
                </p>

                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-slate-700 bg-slate-900">
                  <BriefcaseBusiness
                    size={20}
                    className="text-gray-300"
                  />
                </div>

              </div>

              {/* Title */}

              <h3 className="mt-6 text-4xl font-bold leading-tight">
                {project.title}
              </h3>

              {/* Description */}

              <p className="mt-6 text-lg leading-8 text-gray-400">
                {project.description}
              </p>

              {/* Highlight */}

              <div className="mt-8 border-l-2 border-blue-500 pl-4">

                <p className="font-semibold text-white">
                  {project.highlight}
                </p>

              </div>

              {/* Tech Stack */}

              <div className="mt-8 flex flex-wrap gap-3">

                {project.tech.map((tech) => (

                  <span
                    key={tech}
                    className="rounded border border-slate-700 px-3 py-2 text-sm text-gray-300 transition hover:border-blue-500 hover:text-white"
                  >
                    {tech}
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