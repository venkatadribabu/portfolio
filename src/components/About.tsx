export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-950 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-8">

        <h2 className="mb-4 text-center text-5xl font-bold">
          About <span className="text-blue-500">Me</span>
        </h2>

        <p className="mx-auto mb-16 max-w-3xl text-center text-lg text-gray-400">
         Software Engineer and AI/ML Engineer with 4+ years of experience designing, developing, and deploying scalable cloud-native applications, backend systems, and AI-powered enterprise solutions for large-scale business environments. Proven expertise in building high-performance microservices, REST APIs, and distributed systems while delivering secure, production-ready software that improves application performance, operational efficiency, and business outcomes. Experienced in applying Machine Learning, Generative AI, Large Language Models (LLMs), and Retrieval-Augmented Generation (RAG) to develop intelligent automation and enterprise AI solutions. Strong background in software architecture, system design, cloud technologies, CI/CD, and the Software Development Life Cycle (SDLC), with a focus on writing clean, maintainable, and scalable code. Collaborative engineering professional passionate about solving complex technical challenges, optimizing software performance, and delivering innovative solutions through Agile development and cross-functional teamwork.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-2xl border border-slate-700 bg-slate-900 p-8 text-center">
            <h3 className="text-4xl font-bold text-blue-500">4+</h3>
            <p className="mt-3 text-gray-300">
              Years Experience
            </p>
          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-900 p-8 text-center">
            <h3 className="text-4xl font-bold text-blue-500">20+</h3>
            <p className="mt-3 text-gray-300">
              Projects Completed
            </p>
          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-900 p-8 text-center">
            <h3 className="text-4xl font-bold text-blue-500">AI</h3>
            <p className="mt-3 text-gray-300">
              Machine Learning
            </p>
          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-900 p-8 text-center">
            <h3 className="text-4xl font-bold text-blue-500">Azure</h3>
            <p className="mt-3 text-gray-300">
              Cloud Solutions
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}