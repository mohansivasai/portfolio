import React from 'react';

const SkillTile = ({ skill, icon }: { skill: string; icon: string }) => {
  return (
    <div className="p-6 bg-gray-900 rounded-lg border border-gray-800 hover:border-indigo-500 transition-all duration-300">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-200">{skill}</h3>
    </div>
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

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
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