import React from 'react';

interface SkillBarProps {
  skill: string;
  percentage: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, percentage }) => {
  return (
    <div className="mb-4 transform hover:scale-105 transition-transform duration-300">
      <div className="flex justify-between mb-1">
        <span className="font-medium gradient-text">{skill}</span>
        <span className="text-sm text-gray-600 dark:text-gray-400">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
        <div 
          className="skill-bar-progress bg-gradient-to-r from-teal-500 to-blue-500 h-2.5 rounded-full animate-pulse-custom" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;