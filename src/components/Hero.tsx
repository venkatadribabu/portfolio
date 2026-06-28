export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen pt-20 bg-gradient-to-br from-slate-950 via-gray-900 to-blue-950 text-white"
    >
      <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-between px-10">

        {/* Left Side */}
        <div className="max-w-2xl">

          <p className="mb-4 text-xl text-blue-400">
            👋 Hello, I'm
          </p>

          <h1 className="text-7xl font-extrabold leading-tight">
            S.<span className="text-blue-500"> Venkatadri</span>
          </h1>

          <p className="mt-6 text-2xl text-gray-300">
            Software Engineer • AI/ML Engineer • Backend Engineer
          </p>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
            Passionate about building scalable cloud applications,
            AI-powered solutions, and modern backend systems using
            Python, Azure, FastAPI, Generative AI, and Machine Learning.
          </p>

          <div className="mt-10 flex gap-4">

            <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold hover:bg-blue-700 transition">
              Download Resume
            </button>

            <button className="rounded-xl border border-blue-500 px-8 py-4 hover:bg-blue-600 transition">
              View Projects
            </button>

          </div>

        </div>

        {/* Right Side */}
        <div className="hidden lg:flex relative">

          <div className="absolute h-96 w-96 rounded-full bg-blue-600/20 blur-3xl"></div>

          <div className="relative flex h-80 w-80 items-center justify-center rounded-full border border-blue-500 bg-slate-900 text-7xl">
            👨‍💻
          </div>

        </div>

      </div>
    </section>
  );
}