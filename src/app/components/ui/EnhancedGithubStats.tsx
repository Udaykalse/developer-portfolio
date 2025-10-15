'use client';

import { useState } from 'react';

interface EnhancedGithubStatsProps {
  username: string;
  contributionCount?: number;
}

const EnhancedGithubStats = ({ username, contributionCount = 303 }: EnhancedGithubStatsProps) => {
  const [currentChart, setCurrentChart] = useState(0);
  
  const chartServices = [
    `https://ghchart.rshah.org/3B82F6/${username}`,
    `https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=github`,
    `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=default`
  ];

  const nextChart = () => {
    setCurrentChart((prev) => (prev + 1) % chartServices.length);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl shadow-lg p-6 border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-secondary">GitHub Activity</h3>
        <button
          onClick={nextChart}
          className="text-sm text-primary hover:text-blue-600 transition-colors duration-200"
        >
          Switch View
        </button>
      </div>
      
      {/* GitHub Chart */}
      <div className="mb-4 bg-white rounded-lg p-2 shadow-inner">
        <img
          src={chartServices[currentChart]}
          alt={`GitHub activity for ${username}`}
          className="w-full h-auto rounded"
        />
      </div>
      
      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 text-center">
        <div className="bg-white rounded-lg p-3 shadow-sm">
          <div className="text-2xl font-bold text-primary">{contributionCount}</div>
          <div className="text-xs text-gray-600">Last Year</div>
        </div>
        <div className="bg-white rounded-lg p-3 shadow-sm">
          <div className="text-2xl font-bold text-green-500">
            {Math.round(contributionCount / 52)}
          </div>
          <div className="text-xs text-gray-600">Per Week</div>
        </div>
      </div>
      
      {/* Profile Link */}
      <div className="text-center mt-4">
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-full py-2 px-4 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 text-sm font-medium"
        >
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
          </svg>
          Visit GitHub Profile
        </a>
      </div>
    </div>
  );
};

export default EnhancedGithubStats;