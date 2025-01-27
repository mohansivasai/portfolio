import React from 'react';

const SkillTile = ({ skill, icon }: { skill: string; icon: string }) => {
  return (
    <div className="p-6 bg-gray-900 rounded-lg border border-gray-800 hover:border-indigo-500 transition-all duration-300">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-200">{skill}</h3>
    </div>
  );
};

const CertificationCard = ({ 
  title, 
  badgeUrl, 
  verifyUrl 
}: { 
  title: string; 
  badgeUrl: string; 
  verifyUrl: string; 
}) => {
  return (
    <a
      href={verifyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-6 bg-gray-900 rounded-lg border border-gray-800 hover:border-indigo-500 transition-all duration-300 group"
    >
      <div className="flex flex-col items-center">
        <img 
          src={badgeUrl} 
          alt={title} 
          className="w-32 h-32 mb-4 transform group-hover:scale-105 transition-transform"
        />
        <p className="text-gray-200 text-center group-hover:text-indigo-400 transition-colors">{title}</p>
      </div>
    </a>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      skills: [
        { name: 'Java', icon: '☕' },
        { name: 'JavaScript', icon: '⚡' },
        { name: 'TypeScript', icon: '📘' },
        { name: 'Python', icon: '🐍' },
        { name: 'Go', icon: '🔵' },
        { name: 'Lua', icon: '🌙' },
        { name: 'C++', icon: '⚙️' }
      ]
    },
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', icon: '⚛️' },
        { name: 'Angular', icon: '🅰️' },
        { name: 'Next.js', icon: '▲' },
        { name: 'HTML5', icon: '🌐' },
        { name: 'CSS3', icon: '🎨' },
        { name: 'Bootstrap', icon: '🅱️' },
        { name: 'Tailwind CSS', icon: '🌊' },
        { name: 'Material-UI', icon: '📱' }
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Spring Boot', icon: '🍃' },
        { name: 'Hibernate', icon: '🔄' },
        { name: 'Spring Data JPA', icon: '📊' },
        { name: 'Node.js', icon: '📦' },
        { name: 'Express.js', icon: '🚂' },
        { name: 'Spring MVC', icon: '🌱' },
        { name: 'Spring AOP', icon: '🎯' }
      ]
    },
    {
      title: 'Database Management',
      skills: [
        { name: 'Oracle', icon: '🗄️' },
        { name: 'PostgreSQL', icon: '🐘' },
        { name: 'MongoDB', icon: '🍃' },
        { name: 'Cassandra', icon: '📊' },
        { name: 'DynamoDB', icon: '⚡' },
        { name: 'MySQL', icon: '🐬' }
      ]
    },
    {
      title: 'DevOps Practices',
      skills: [
        { name: 'Jenkins', icon: '🔧' },
        { name: 'Docker', icon: '🐳' },
        { name: 'Kubernetes', icon: '⎈' },
        { name: 'Nginx', icon: '🌐' },
        { name: 'Git', icon: '📚' },
        { name: 'Terraform', icon: '🏗️' },
        { name: 'AWS', icon: '☁️' },
        { name: 'Agile', icon: '🔄' }
      ]
    }
  ];

  const certifications = [
    {
      title: 'AWS Certified Developer – Associate',
      badgeUrl: 'https://images.credly.com/size/340x340/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png',
      verifyUrl: 'https://www.credly.com/badges/a34837f1-68b5-4b08-b6d0-0a34ff9381f0/public_url'
    },
    {
      title: 'AWS Certified Solutions Architect – Associate',
      badgeUrl: 'https://images.credly.com/size/340x340/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png',
      verifyUrl: 'https://www.credly.com/earner/earned/badge/e1fd79c3-f6a1-4b06-b817-aa50abd67ddb'
    },
    {
      title: 'AWS Certified Cloud Practitioner',
      badgeUrl: 'https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png',
      verifyUrl: 'https://www.credly.com/earner/earned/badge/48e32fbe-2423-44d3-aa57-bbdc9d4508e4'
    },
    {
      title: 'AWS Cloud Quest: Cloud Practitioner',
      badgeUrl: 'https://images.credly.com/size/340x340/images/2784d0d8-327c-406f-971e-9f0e15097003/image.png',
      verifyUrl: 'https://www.credly.com/earner/earned/badge/ab0dee24-72ab-44e2-9035-f7a89d8d0ca4'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mt-16">
            <h3 className="text-2xl font-semibold mb-6 text-indigo-400">
              AWS Certifications
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {certifications.map((cert) => (
                <CertificationCard
                  key={cert.title}
                  title={cert.title}
                  badgeUrl={cert.badgeUrl}
                  verifyUrl={cert.verifyUrl}
                />
              ))}
            </div>
          </div>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Skills & Expertise
        </h2>     
        {skillCategories.map((category) => (
          <div key={category.title} className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-indigo-400">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {category.skills.map((skill) => (
                <SkillTile key={skill.name} skill={skill.name} icon={skill.icon} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;