'use client';

import { useState } from 'react';

interface GithubStatsProps {
  username: string;
  contributionCount?: number;
}

const GithubStats = ({ username, contributionCount = 303 }: GithubStatsProps) => {
  const [currentChart, setCurrentChart] = useState(0);
  
  const chartServices = [
    {
      name: "Contribution Calendar",
      url: `https://ghchart.rshah.org/3B82F6/${username}`,
    },
    {
      name: "Activity Graph", 
      url: `https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=github`,
    },
    {
      name: "GitHub Stats",
      url: `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=default&hide_title=true`,
    }
  ];

  const nextChart = () => {
    setCurrentChart((prev) => (prev + 1) % chartServices.length);
  };

  return (
    <div className="w-full max-w-7xl mx-auto bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl lg:rounded-2xl shadow-lg lg:shadow-2xl p-4 sm:p-6 lg:p-8 border border-gray-200">
      {/* Header */}
      <div className="text-center mb-6 lg:mb-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary mb-2">
          GitHub Activity
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-2">
          My coding journey and contributions over time
        </p>
      </div>

      {/* Mobile First - Stacked Layout */}
      <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
        {/* Stats Cards - Top on mobile, left on desktop */}
        <div className="space-y-4 sm:space-y-6 lg:order-1">
          <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg text-center transform hover:scale-105 transition-transform duration-200">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-2">
              {contributionCount}
            </div>
            <div className="text-sm sm:text-base lg:text-lg text-gray-600 font-medium">
              Total Contributions
            </div>
            <div className="text-xs sm:text-sm text-gray-500 mt-2">
              Last 12 months
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg text-center transform hover:scale-105 transition-transform duration-200">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-500 mb-2">
              {Math.round(contributionCount / 52)}
            </div>
            <div className="text-sm sm:text-base lg:text-md text-gray-600 font-medium">
              Weekly Average
            </div>
          </div>

          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-xl p-4 sm:p-6 shadow-lg text-center hover:shadow-xl transition-all duration-200 group"
          >
            <div className="flex items-center justify-center space-x-3 text-primary group-hover:text-blue-600">
              <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
              <span className="text-base sm:text-lg font-semibold">View GitHub Profile</span>
            </div>
          </a>
        </div>

        {/* Main Chart Area - Takes 2 columns on desktop */}
        <div className="lg:col-span-2 lg:order-2">
          <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-4 sm:mb-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-secondary text-center sm:text-left">
                {chartServices[currentChart].name}
              </h3>
              <div className="flex items-center justify-center sm:justify-end space-x-2">
                <button
                  onClick={nextChart}
                  className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 text-sm font-medium"
                >
                  Switch View
                </button>
                
                {/* Mobile dots */}
                <div className="flex space-x-1 sm:hidden">
                  {chartServices.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentChart(index)}
                      className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                        currentChart === index ? 'bg-primary' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            <div className="h-48 sm:h-56 lg:h-64 flex items-center justify-center bg-gray-50 rounded-lg p-2 sm:p-4">
              <img
                src={chartServices[currentChart].url}
                alt={`GitHub ${chartServices[currentChart].name.toLowerCase()} for ${username}`}
                className="w-full h-full object-contain rounded-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GithubStats;