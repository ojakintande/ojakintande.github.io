import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-slate-900">
      <header className="bg-white border-b">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold">Dr. Olalekan Joseph Akintande</h1>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
            <a href="#home" className="hover:underline">Home</a>
            <a href="#research" className="hover:underline">Research</a>
            <a href="#publications" className="hover:underline">Publications</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#contact" className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:opacity-95">Contact</a>
          </nav>
          <button className="md:hidden p-2 rounded-lg" onClick={() => setOpen(!open)} aria-label="menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t">
            <div className="px-6 py-4 flex flex-col gap-3">
              <a href="#home" onClick={() => setOpen(false)}>Home</a>
              <a href="#research" onClick={() => setOpen(false)}>Research</a>
              <a href="#publications" onClick={() => setOpen(false)}>Publications</a>
              <a href="#about" onClick={() => setOpen(false)}>About</a>
              <a href="#contact" className="px-4 py-2 rounded-lg bg-indigo-600 text-white inline-block text-center" onClick={() => setOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        <section id="home" className="container mx-auto px-6 py-16 text-center">
          <motion.h2 className="text-4xl md:text-5xl font-extrabold mb-4" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            Dr. Olalekan Joseph Akintande
          </motion.h2>
          <p className="text-lg text-slate-600 mb-6">Postdoctoral Researcher | Algorithmic Fairness | Bioinformatics & Computational Medicine</p>
        </section>

        <section id="research" className="container mx-auto px-6 py-12">
          <h3 className="text-2xl font-semibold mb-6">Research</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow border">
              <h4 className="font-semibold mb-2">Pre-PhD Work</h4>
              <p>Research conducted prior to PhD, focusing on foundational studies in bioinformatics and computational approaches in medicine.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow border">
              <h4 className="font-semibold mb-2">Post-PhD Work</h4>
              <p>Current research on multi-modal data integration, responsible AI, and algorithmic fairness in clinical applications.</p>
            </div>
          </div>
        </section>

        <section id="publications" className="container mx-auto px-6 py-12">
          <h3 className="text-2xl font-semibold mb-6">Publications</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow border text-center">
              <h5 className="font-semibold mb-2">Google Scholar</h5>
              <a href="https://scholar.google.com/citations?hl=en&user=Wn3hpPsAAAAJ" target="_blank" className="text-indigo-600 hover:underline">View Profile</a>
            </div>
            <div className="bg-white p-6 rounded-xl shadow border text-center">
              <h5 className="font-semibold mb-2">Scopus</h5>
              <a href="https://www.scopus.com/authid/detail.uri?authorId=57202272200" target="_blank" className="text-indigo-600 hover:underline">View Profile</a>
            </div>
            <div className="bg-white p-6 rounded-xl shadow border text-center">
              <h5 className="font-semibold mb-2">Web of Science</h5>
              <a href="https://www.webofscience.com/wos/author/record/1514292" target="_blank" className="text-indigo-600 hover:underline">View Profile</a>
            </div>
          </div>
        </section>

        <section id="about" className="container mx-auto px-6 py-12">
          <h3 className="text-2xl font-semibold mb-4">About</h3>
          <p className="text-slate-600 max-w-2xl">Dr. Olalekan Joseph Akintande is a Postdoctoral Researcher at the Technical University of Denmark. His research focuses on multi-modal data integration, responsible AI, and algorithmic fairness in clinical applications. He is a Microsoft PhD Research Fellowship Awardee and member of professional societies including the Royal Statistical Society and American Statistical Association.</p>
        </section>

        <section id="contact" className="container mx-auto px-6 py-12 text-center">
          <h3 className="text-2xl font-semibold mb-4">Contact</h3>
          <p>Email: <a href="mailto:ojoak@dtu.dk" className="text-indigo-600 hover:underline">ojoak@dtu.dk</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/aojsoft/" target="_blank" className="text-indigo-600 hover:underline">View Profile</a></p>
          <p>ResearchGate: <a href="https://www.researchgate.net/profile/Olalekan-Akintande" target="_blank" className="text-indigo-600 hover:underline">View Profile</a></p>
        </section>
      </main>

      <footer className="bg-white border-t py-6 text-center text-sm text-slate-500">
        © 2025 Dr. Olalekan Joseph Akintande. All rights reserved.
      </footer>
    </div>
  );
}