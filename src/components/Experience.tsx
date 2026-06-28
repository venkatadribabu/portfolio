export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-900 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl px-8">

        <h2 className="mb-16 text-center text-5xl font-bold">
          My <span className="text-blue-500">Experience</span>
        </h2>

        <div className="space-y-10">

          {/* Deloitte */}

          <div className="rounded-2xl border border-slate-700 bg-slate-950 p-8">

            <p className="text-blue-400">
              Feb 2025 - Present
            </p>

            <h3 className="mt-2 text-3xl font-bold">
              AI/ML Engineer Intern
            </h3>

            <h4 className="mt-1 text-xl text-gray-400">
              Deloitte
            </h4>

            <ul className="mt-6 list-disc space-y-3 pl-5 text-gray-300">
              <li>Developing AI-powered enterprise applications.</li>
              <li>Building REST APIs using FastAPI.</li>
              <li>Working with Azure OpenAI and Generative AI.</li>
              <li>Deploying scalable backend services.</li>
            </ul>

          </div>

          {/* Quadrant */}

          <div className="rounded-2xl border border-slate-700 bg-slate-950 p-8">

            <p className="text-blue-400">
              Nov 2021 - Jul 2024
            </p>

            <h3 className="mt-2 text-3xl font-bold">
              Software Engineer
            </h3>

            <h4 className="mt-1 text-xl text-gray-400">
              Quadrant Technologies
            </h4>

            <ul className="mt-6 list-disc space-y-3 pl-5 text-gray-300">
              <li>Built scalable backend applications.</li>
              <li>Developed REST APIs using Python.</li>
              <li>Integrated SQL databases and cloud services.</li>
              <li>Improved application performance and reliability.</li>
            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}