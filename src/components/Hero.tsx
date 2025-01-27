import React from 'react';
import { ChevronDown, Download } from 'lucide-react';
import profileImage from '../assests/profile-pic.png'; // Import the image

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">Mohan</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              A Java Full Stack Developer with 5+ years of experience designing and deploying scalable, cloud-native solutions.
            </p>
            <div className="flex gap-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                View My Projects
              </a>
              <button className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:border-indigo-600 dark:hover:border-indigo-400 transition-colors flex items-center gap-2">
                <Download className="w-5 h-5" />
                Download Resume
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src={profileImage}
              alt="Mohan's Profile"
              className="w-64 h-64 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-lg"
            />
          </div>
        </div>
        <div className="flex justify-center mt-16">
          <a
            href="#about"
            className="animate-bounce p-2 rounded-full border border-gray-300 dark:border-gray-700"
          >
            <ChevronDown className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;