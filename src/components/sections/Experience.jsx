import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Calendar, ChevronRight, Award } from 'lucide-react';

const Experience = ({ data }) => {
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

  return (
    <section id="experience" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-emerald-600 font-semibold text-lg mb-2">Professional Journey</div>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Work
            <span className="font-bold bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent"> Experience</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Building scalable solutions and leading technical initiatives with focus on AWS integrations and modern web technologies.
          </p>
        </div>

        <div className="space-y-12">
          {data.map((experience, index) => (
            <div
              key={experience.id}
              className={`relative transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Timeline line */}
              {index < data.length - 1 && (
                <div className="absolute left-6 top-20 w-0.5 h-32 bg-gradient-to-b from-emerald-400 to-transparent"></div>
              )}
              
              <div className="flex items-start space-x-6">
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                  <Award size={20} className="text-white" />
                </div>
                
                {/* Content */}
                <div className="flex-1 bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{experience.position}</h3>
                      <div className="text-xl text-emerald-600 font-semibold mb-2">{experience.company}</div>
                    </div>
                    
                    <div className="flex flex-col lg:items-end space-y-2">
                      <div className="flex items-center text-gray-600">
                        <Calendar size={16} className="mr-2" />
                        <span className="font-medium">{experience.duration}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin size={16} className="mr-2" />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {experience.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Achievements:</h4>
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-start space-x-3">
                        <ChevronRight size={16} className="text-emerald-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 leading-relaxed">{achievement}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Technologies used */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex flex-wrap gap-2">
                      {['AWS Lambda', 'S3', 'SES', 'API Gateway', 'EventBridge', 'CloudWatch', 'Node.js', 'React.js', 'IMAP'].map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Education Section */}
        <div className={`mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-8">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mr-4">
                <Award size={20} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Education & Recognition</h3>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Bachelor of Science (MPC)</h4>
                <p className="text-gray-600">Krishnaveni Degree College, Narasaraopet (2018-2021)</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">INSPIRE Scholarship</h4>
                <p className="text-gray-600">Department of Science and Technology, Government of India (2018)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;