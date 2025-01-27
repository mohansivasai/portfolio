import React from 'react';

const SkillBar = ({ skill, level }: { skill: string; level: number }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 dark:text-gray-300">{skill}</span>
        <span className="text-gray-600 dark:text-gray-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div
          className="bg-indigo-600 dark:bg-indigo-400 h-2 rounded-full transition-all duration-500"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  const technicalSkills = [
    { name: 'Java/Spring Boot', level: 95 },
    { name: 'AWS Services', level: 90 },
    { name: 'React/Angular', level: 85 },
    { name: 'DevOps/CI/CD', level: 80 },
  ];

  const certifications = [
    'AWS Certified Developer – Associate',
    'AWS Certified Solutions Architect – Associate',
    'AWS Certified Cloud Practitioner',
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Skills & Expertise
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              Technical Skills
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill) => (
                <SkillBar key={skill.name} skill={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert}
                  className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
                >
                  <p className="text-gray-700 dark:text-gray-300">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;