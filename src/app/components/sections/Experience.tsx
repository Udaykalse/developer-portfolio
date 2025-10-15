'use client';

import { useState } from 'react';
import { portfolioData } from '@/app/data/portfolio-data';
import { Calendar, MapPin, ExternalLink, ChevronDown, ChevronUp, Award, Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setExpandedItems(prev =>
      prev.includes(index)
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const isExpanded = (index: number) => expandedItems.includes(index);

  // Enhanced data with proper types
  const enhancedExperience = portfolioData.experience.map((exp, index) => ({
    ...exp,
    location: exp.location || "Pune, India",
    technologies: exp.technologies || ["React", "Node.js", "TypeScript"],
    achievements: exp.achievements || [
      "Led development of key features",
      "Improved application performance",
      "Collaborated with cross-functional teams"
    ]
  }));

  const enhancedEducation = portfolioData.education.map((edu, index) => ({
    ...edu,
    location: edu.location || "Pune, India",
    grade: edu.grade || "First Class",
    achievements: edu.achievements || [
      "Academic excellence",
      "Project achievements",
      "Extracurricular activities"
    ]
  }));

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Journey & Milestones
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-blue-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My professional journey through work experiences and academic achievements
          </p>
        </div>

        {/* Tab Navigation - FIXED VISIBILITY */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-gray-200">
            <div className="flex space-x-2">
              <button
                onClick={() => setActiveTab('experience')}
                className={`flex items-center space-x-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${activeTab === 'experience'
                  ? 'bg-indigo-600 text-white shadow-lg transform scale-105 border-2 border-indigo-600'
                  : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 border-2 border-transparent'
                  }`}
              >
                <Briefcase size={20} />
                <span>Experience</span>
              </button>
              <button
                onClick={() => setActiveTab('education')}
                className={`flex items-center space-x-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${activeTab === 'education'
                  ? 'bg-teal-600 text-white shadow-lg transform scale-105 border-2 border-teal-600'
                  : 'text-gray-700 hover:text-teal-600 hover:bg-teal-50 border-2 border-transparent'
                  }`}
              >
                <GraduationCap size={20} />
                <span>Education</span>
              </button>
            </div>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-blue-300 hidden md:block"></div>

          {/* Experience Timeline */}
          {activeTab === 'experience' && (
            <div className="space-y-8">
              {enhancedExperience.map((exp, index) => (
                <div
                  key={index}
                  className={`relative group ${index % 2 === 0 ? 'md:pr-8 md:pl-0' : 'md:pl-8 md:pr-0'
                    }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-8 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg z-10 hidden md:block"></div>

                  {/* Content Card */}
                  <div
                    className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-200 overflow-hidden ${index % 2 === 0 ? 'md:mr-auto md:ml-0 md:max-w-md' : 'md:ml-auto md:mr-0 md:max-w-md'
                      }`}
                  >
                    {/* Header */}
                    <div className="bg-gradient-to-r from-primary to-blue-600 p-6 text-white">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold">{exp.position}</h3>
                        <button
                          onClick={() => toggleItem(index)}
                          className="text-white/80 hover:text-white transition-colors duration-200"
                        >
                          {isExpanded(index) ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </button>
                      </div>
                      <h4 className="text-lg font-semibold opacity-90">{exp.company}</h4>
                      <div className="flex items-center space-x-4 mt-3 text-sm opacity-80">
                        <div className="flex items-center space-x-1">
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Main Content */}
                    <div className="p-6">
                      <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Technologies */}
                      {exp.technologies && exp.technologies.length > 0 && (
                        <div className="mb-4">
                          <h5 className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wide">
                            Technologies Used
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Expandable Achievements */}
                      {isExpanded(index) && exp.achievements && exp.achievements.length > 0 && (
                        <div className="mt-6 pt-6 border-t border-gray-200">
                          <h5 className="text-lg font-semibold text-secondary mb-4 flex items-center space-x-2">
                            <Award size={20} className="text-primary" />
                            <span>Key Achievements</span>
                          </h5>
                          <ul className="space-y-3">
                            {exp.achievements.map((achievement, achievementIndex) => (
                              <li
                                key={achievementIndex}
                                className="flex items-start space-x-3 text-gray-700"
                              >
                                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Expand/Collapse Button */}
                      {exp.achievements && exp.achievements.length > 0 && (
                        <button
                          onClick={() => toggleItem(index)}
                          className="flex items-center space-x-2 text-primary hover:text-blue-600 transition-colors duration-200 mt-4 font-medium"
                        >
                          <span>{isExpanded(index) ? 'Show Less' : 'Show Achievements'}</span>
                          {isExpanded(index) ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Education Timeline */}
          {activeTab === 'education' && (
            <div className="space-y-8">
              {enhancedEducation.map((edu, index) => (
                <div
                  key={index}
                  className={`relative group ${index % 2 === 0 ? 'md:pr-8 md:pl-0' : 'md:pl-8 md:pr-0'
                    }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-8 w-4 h-4 bg-green-500 rounded-full border-4 border-white shadow-lg z-10 hidden md:block"></div>

                  {/* Content Card */}
                  <div
                    className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-200 overflow-hidden ${index % 2 === 0 ? 'md:mr-auto md:ml-0 md:max-w-md' : 'md:ml-auto md:mr-0 md:max-w-md'
                      }`}
                  >
                    {/* Header */}
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6 text-white">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold">{edu.degree}</h3>
                        <button
                          onClick={() => toggleItem(index + 10)}
                          className="text-white/80 hover:text-white transition-colors duration-200"
                        >
                          {isExpanded(index + 10) ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </button>
                      </div>
                      <h4 className="text-lg font-semibold opacity-90">{edu.institution}</h4>
                      <div className="flex items-center space-x-4 mt-3 text-sm opacity-80">
                        <div className="flex items-center space-x-1">
                          <Calendar size={16} />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin size={16} />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Main Content */}
                    <div className="p-6">
                      {edu.grade && (
                        <div className="mb-4">
                          <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                            {edu.grade}
                          </span>
                        </div>
                      )}

                      {isExpanded(index + 10) && edu.achievements && edu.achievements.length > 0 && (
                        <div className="mt-6 pt-6 border-t border-gray-200">
                          <h5 className="text-lg font-semibold text-secondary mb-4 flex items-center space-x-2">
                            <Award size={20} className="text-green-500" />
                            <span>Achievements & Activities</span>
                          </h5>
                          <ul className="space-y-3">
                            {Array.isArray(edu.achievements)
                              ? edu.achievements.map((achievement: string, achievementIndex: number) => (
                                <li
                                  key={achievementIndex}
                                  className="flex items-start space-x-3 text-gray-700"
                                >
                                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span>{achievement}</span>
                                </li>
                              ))
                              : (
                                <li className="flex items-start space-x-3 text-gray-700">
                                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span>{edu.achievements}</span>
                                </li>
                              )
                            }
                          </ul>
                        </div>
                      )}

                      {edu.achievements && edu.achievements.length > 0 && (
                        <button
                          onClick={() => toggleItem(index + 10)}
                          className="flex items-center space-x-2 text-green-600 hover:text-emerald-600 transition-colors duration-200 mt-4 font-medium"
                        >
                          <span>{isExpanded(index + 10) ? 'Show Less' : 'Show Achievements'}</span>
                          {isExpanded(index + 10) ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="text-center mt-16">
          <a
            href="./Udaysinh_kalse_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold"
          >
            <span>Download Full Resume</span>
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;