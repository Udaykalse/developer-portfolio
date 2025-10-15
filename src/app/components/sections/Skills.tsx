import { portfolioData } from '@/app/data/portfolio-data';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {portfolioData.skills.map((skillCategory, index) => (
            <div
              key={skillCategory.category}
              className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1 border border-gray-100"
            >
              <h3 className="text-xl font-semibold text-secondary mb-6 text-center">
                {skillCategory.category}
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {skillCategory.items.map((skill) => {
                  const IconComponent = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 bg-white text-primary px-4 py-2 rounded-full text-sm font-medium hover:bg-secondary hover:text-white border-2 border-primary/30 hover:border-primary transition-all duration-200 group cursor-default shadow-sm hover:shadow-lg hover:scale-105"
                    >
                      <IconComponent className="text-lg group-hover:scale-110 transition-transform duration-200" />
                      <span>{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;