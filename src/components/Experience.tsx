import React from 'react';

const ExperienceCard = ({
  company,
  role,
  duration,
  responsibilities,
}: {
  company: string;
  role: string;
  duration: string;
  responsibilities: string[];
}) => {
  return (
    <div className="mb-12 relative pl-8 border-l-2 border-indigo-200 dark:border-indigo-800">
      <div className="absolute w-4 h-4 bg-indigo-600 dark:bg-indigo-400 rounded-full -left-[9px] top-0"></div>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{company}</h3>
        <div className="text-gray-600 dark:text-gray-300 mb-4">
          <p className="font-medium">{role}</p>
          <p className="text-sm">{duration}</p>
        </div>
        <ul className="space-y-2">
          {responsibilities.map((item, index) => (
            <li key={index} className="text-gray-600 dark:text-gray-300">
              • {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      company: 'Capital One',
      role: 'Software Engineer',
      duration: 'August 2024 - Present',
      responsibilities: [
        'Developed a hybrid architecture using React and Angular, hosting assets on S3 and serving via NGINX on EC2 with Lua scripting',
        'Built serverless backends (AWS Lambda) integrated with API Gateway',
        'Automated testing with Mocha and Chai for backend services and Lua configurations',
        'Designed CI/CD pipelines using Jenkins and AWS CodeDeploy',
      ],
    },
    {
      company: 'Mamiye Brothers',
      role: 'Full Stack Developer',
      duration: 'Feburary 2023 - July 2024',
      responsibilities: [
        'Migrated a Java-based EC2 application to AWS Lambda and TypeScript, optimizing scalability and cost',
        'Implemented real-time synchronization across platforms like NuOrder, Shopify, and Amazon',
        'Reduced costs by 40% while improving performance and reliability',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Work Experience
        </h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.company} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;