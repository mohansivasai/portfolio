import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Download, ChevronDown, Moon, Sun } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="bg-black transition-colors duration-300">
        {/* Navigation */}
        <nav className="fixed w-full bg-black/80 backdrop-blur-sm z-50 border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-indigo-400">Mohan Siva Sai Thota</span>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-gray-300 hover:text-indigo-400 transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-full hover:bg-gray-800 transition-colors"
                >
                  {isDarkMode ? (
                    <Sun className="w-5 h-5 text-gray-300" />
                  ) : (
                    <Moon className="w-5 h-5 text-gray-300" />
                  )}
                </button>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 rounded-md text-gray-300"
                >
                  {isMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-black">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block px-3 py-2 text-gray-300 hover:text-indigo-400"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* Main Content */}
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;