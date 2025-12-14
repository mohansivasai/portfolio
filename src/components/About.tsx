import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            With 6 plus years of experience, I specialize in designing scalable enterprise applications 
            using modern frameworks and cloud technologies. My journey in technology has been driven 
            by a passion for problem-solving, security, and performance optimization.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Core Competencies</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Programming: Java, Go, Python, JavaScript</li>
                <li>• Frameworks: Spring Boot, Angular, React, Node.js</li>
                <li>• Cloud Services: AWS (Lambda, DynamoDB, S3)</li>
                <li>• DevOps: Docker, Kubernetes, Jenkins</li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Personal Note</h3>
              <p className="text-gray-600 dark:text-gray-300">
                When I'm not coding, I'm focused on fitness and working toward my goal of reducing 
                weight to 150 lbs! I believe in maintaining a healthy work-life balance and 
                continuously learning new technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;