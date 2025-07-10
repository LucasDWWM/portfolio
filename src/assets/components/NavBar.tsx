import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="fixed top-4 left-4 z-50">
        <button
          className="w-10 h-10 bg-white rounded-full shadow-lg"
          onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-40 transform ${open ? "translate-x-0" : "translate-x-full"} transition-transform duration-300`}>
        <nav className="flex flex-col p-6 space-y-4">
          <a href="/" className="text-gray-800 hover:text-cyan-500">Accueil</a>
          <a href="/projects" className="text-gray-800 hover:text-cyan-500">Projets</a>
          <a href="/contact" className="text-gray-800 hover:text-cyan-500">Contact</a>
        </nav>
      </div>
    </>
  );
}
