export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-950 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-8">

        <h2 className="mb-10 text-center text-5xl font-bold">
          Tech <span className="text-blue-500">Stack</span>
        </h2>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">

          {[
            "Python",
            "Java",
            "FastAPI",
            "React",
            "Next.js",
            "Azure",
            "Machine Learning",
            "SQL",
          ].map((skill) => (
            <div
              key={skill}
              className="rounded-xl border border-slate-700 bg-slate-900 p-6 text-center hover:border-blue-500"
            >
              {skill}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}