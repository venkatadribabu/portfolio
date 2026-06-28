export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-500">
          SV
        </h1>

        {/* Navigation Menu */}
        <ul className="hidden gap-10 text-gray-300 md:flex">

          <li>
            <a href="#home" className="cursor-pointer hover:text-blue-400">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="cursor-pointer hover:text-blue-400">
              About
            </a>
          </li>

          <li>
            <a href="#experience" className="cursor-pointer hover:text-blue-400">
              Experience
            </a>
          </li>

          <li>
            <a href="#projects" className="cursor-pointer hover:text-blue-400">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="cursor-pointer hover:text-blue-400">
              Contact
            </a>
          </li>

        </ul>

        {/* Resume Button */}
        <button className="rounded-lg bg-blue-600 px-5 py-2 font-semibold text-white hover:bg-blue-700 transition">
          Resume
        </button>

      </div>
    </nav>
  );
}