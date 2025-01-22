import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = ({ sections }: { sections: string[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const Logo = () => (
    <motion.div
      className="relative group"
      whileHover="hover"
      initial="initial"
      animate="initial"
    >
      <Link
        href="/"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0 });
          window.history.pushState({}, "", "/");
        }}
        className="text-xl font-mono relative z-10 flex items-center"
      >
        <motion.span className="text-primary">S</motion.span>
        <motion.div
          className="overflow-hidden w-0 group-hover:w-auto"
          variants={{
            initial: { width: 0 },
            hover: { width: "auto" },
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <span className="whitespace-nowrap">hamith</span>
          <span className="whitespace-nowrap">&nbsp;</span>
        </motion.div>
        <motion.span className="text-primary">P</motion.span>
        <motion.div
          className="overflow-hidden w-0 group-hover:w-auto"
          variants={{
            initial: { width: 0 },
            hover: { width: "auto" },
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <span className="whitespace-nowrap">asula</span>
        </motion.div>
      </Link>
    </motion.div>
  );

  const NavLinks = ({ className = "" }) => (
    <div className={className}>
      {sections.map((section) => (
        <Link
          key={section.toLowerCase()}
          href={`#${section.toLowerCase()}`}
          className="nav-link font-mono uppercase block"
          onClick={() => setIsOpen(false)}
        >
          {section}
        </Link>
      ))}
      <Link
        href="/Shamith_Pasula_resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="nav-link font-mono uppercase block"
        onClick={() => setIsOpen(false)}
      >
        Resume
      </Link>
    </div>
  );

  return (
    <nav className="fixed w-full px-6 py-4 backdrop-blur-sm bg-dark/80 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Logo />

        {/* Desktop Navigation */}
        <NavLinks className="hidden md:flex space-x-8" />

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-light p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-4 relative flex flex-col justify-between">
            <span
              className={`w-full h-0.5 bg-light transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-full h-0.5 bg-light transition-opacity duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-full h-0.5 bg-light transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 right-0 bg-dark/95 backdrop-blur-sm"
            >
              <div className="px-6 py-4">
                <NavLinks className="flex flex-col space-y-4" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
