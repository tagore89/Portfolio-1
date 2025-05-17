import React from 'react';
import { Calendar } from 'lucide-react';

interface ExperienceCardProps {
  title: string;
  company: string;
  duration: string;
  description: string[];
  logo?: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  duration,
  description,
  logo
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-6 relative overflow-hidden transform transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-teal-500 to-blue-500"></div>
      <div className="flex flex-col md:flex-row md:items-center">
        {logo && (
          <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
            <img src={logo} alt={company} className="w-16 h-16 object-contain" />
          </div>
        )}
        
        <div className="flex-grow">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-1">{company}</p>
          <div className="flex items-center text-gray-500 dark:text-gray-500 mb-4">
            <Calendar className="h-4 w-4 mr-1" />
            <span className="text-sm">{duration}</span>
          </div>
          
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;