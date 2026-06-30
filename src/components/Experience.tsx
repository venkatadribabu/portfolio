export default function Experience() {
  const experience = [
    {
      company: "Deloitte",
      role: "AI / ML Engineer",
      type: "AI • CLOUD • GENERATIVE AI",
      duration: "Feb 2025 - Present",
      points: [
        "Developed AI-powered enterprise applications supporting 2,000+ users.",
        "Built scalable FastAPI microservices and secure REST APIs.",
        "Designed Retrieval-Augmented Generation (RAG) solutions using Azure OpenAI and LangChain.",
        "Developed Machine Learning and Generative AI solutions.",
        "Integrated Azure OpenAI, AWS Lambda, Amazon S3 and REST APIs.",
        "Built Apache Kafka event-driven backend pipelines.",
        "Optimized API performance using SQL optimization and vector indexing.",
        "Containerized applications using Docker and Kubernetes.",
      ],
    },

    {
      company: "Quadrant Technologies",
      role: "Software Engineer",
      type: "FULL STACK • CLOUD • BACKEND",
      duration: "Nov 2021 - Jul 2024",
      points: [
        "Developed enterprise web applications using Python and FastAPI.",
        "Built REST APIs for cloud-native applications.",
        "Worked with Azure Cloud and SQL Server.",
        "Designed scalable backend services.",
        "Implemented CI/CD pipelines using Azure DevOps.",
        "Improved application performance and reliability.",
        "Built authentication and authorization modules.",
        "Contributed to AI-powered enterprise applications.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="bg-[#030712] py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-8">

        <p className="text-blue-400 uppercase tracking-[0.3em] text-sm">
          EXPERIENCE
        </p>

        <h2 className="mt-4 text-5xl font-bold leading-tight">
          Engineering work with production
          <br />
          constraints and business impact.
        </h2>

        <div className="relative mt-20 border-l border-slate-700">

          {experience.map((job, index) => (

            <div
              key={index}
              className="relative ml-10 mb-16"
            >

              <div className="absolute -left-[46px] top-8 h-4 w-4 border-2 border-blue-500 bg-[#030712]"></div>

              <div className="rounded-xl border border-slate-800 bg-[#0b1120] p-10 hover:border-blue-500 transition duration-300">

                <div className="flex flex-col md:flex-row justify-between">

                  <div>

                    <p className="uppercase tracking-[0.3em] text-xs text-blue-400">
                      {job.type}
                    </p>

                    <h3 className="mt-3 text-3xl font-bold">
                      {job.company}
                    </h3>

                    <p className="mt-2 text-gray-300 text-lg">
                      {job.role}
                    </p>

                  </div>

                  <div className="mt-5 md:mt-0">

                    <div className="rounded border border-slate-700 px-5 py-2 text-sm text-gray-300">
                      {job.duration}
                    </div>

                  </div>

                </div>

                <div className="mt-10 grid md:grid-cols-2 gap-x-12 gap-y-6">

                  {job.points.map((point, idx) => (

                    <div
                      key={idx}
                      className="flex gap-3"
                    >

                      <div className="mt-2 h-2 w-2 bg-blue-500"></div>

                      <p className="text-gray-400 leading-8">
                        {point}
                      </p>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}