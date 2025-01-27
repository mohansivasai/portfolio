import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({
  title,
  description,
  technologies,
  impact,
  links,
}: {
  title: string;
  description: string;
  technologies: string[];
  impact: string[];
  links?: { github?: string; demo?: string };
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Impact</h4>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
            {impact.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        {links && (
          <div className="flex gap-4 mt-4">
            {links.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                <Github className="w-5 h-5" />
                <span>View Code</span>
              </a>
            )}
            {links.demo && (
              <a
                href={links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'Static Cloud Hosting Platform (Capital One)',
      description: 'Deployed an NGINX server on EC2 backed by an ALB to serve content from S3 and DynamoDB using Route 53 for CNAMES, enabling caching and performance optimizations.',
      technologies: ['React', 'Angular', 'S3', 'ALB', 'EC2', 'Route 53', 'NGINX'],
      impact: [
        'Enhanced scalability and performance',
        'Reduced operational costs by 40%',
      ],
      links: {
        github: '#',
        demo: '#',
      },
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;