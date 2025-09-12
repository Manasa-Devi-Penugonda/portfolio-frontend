import React, { useEffect, useRef, useState } from 'react';
import { Code, Database, Cloud, Wrench, Monitor } from 'lucide-react';

const Skills = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getIcon = (categoryName) => {
    switch (categoryName.toLowerCase()) {
      case 'frontend':
        return Monitor;
      case 'backend':
        return Code;
      case 'database':
        return Database;
      case 'cloud & devops':
        return Cloud;
      default:
        return Wrench;
    }
  };

  const getIconColor = (index) => {
    const colors = [
      'text-blue-600 bg-blue-100',
      'text-emerald-600 bg-emerald-100',
      'text-purple-600 bg-purple-100',
      'text-orange-600 bg-orange-100',
      'text-pink-600 bg-pink-100'
    ];
    return colors[index % colors.length];
  };

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-emerald-600 font-semibold text-lg mb-2">Technical Skills</div>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            My Tech
            <span className="font-bold bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent"> Arsenal</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experienced in modern web technologies and cloud platforms, with expertise in full-stack development and AWS integrations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.categories.map((category, categoryIndex) => {
            const IconComponent = getIcon(category.name);
            const iconColorClass = getIconColor(categoryIndex);
            
            return (
              <div
                key={categoryIndex}
                className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${categoryIndex * 100}ms` }}
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${iconColorClass}`}>
                    <IconComponent size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 ml-4">{category.name}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-emerald-100 hover:text-emerald-700 transition-colors duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Technologies */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Specialized In</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['AWS Lambda', 'React.js', 'Node.js', 'MongoDB', 'System Integration', 'API Development'].map((tech, index) => (
                <div
                  key={index}
                  className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-200 hover:scale-105"
                >
                  {tech}
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