"use client";

import Link from "next/link";

const navItems = [
  { name: "About", href: "#about" },
  { name: "What I Do", href: "#what-i-do" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800 bg-[#030712]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-10 py-5">

        {/* Logo */}

        <Link
          href="/"
          className="text-5xl font-black tracking-tight bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Venkatadri
        </Link>

        {/* Navigation */}

        <nav className="hidden lg:flex items-center gap-12">

          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="group relative text-lg font-medium text-gray-300 transition hover:text-white"
            >
              {item.name}

              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>

            </a>
          ))}

        </nav>

      </div>
    </header>
  );
}