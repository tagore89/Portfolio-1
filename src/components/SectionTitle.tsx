import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-2 relative inline-block">
        {title}
        <span className="absolute bottom-0 left-0 w-full h-1 bg-teal-500 dark:bg-teal-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
      </h2>
      {subtitle && <p className="text-gray-600 dark:text-gray-400 mt-2">{subtitle}</p>}
      <div className="w-24 h-1 bg-teal-600 dark:bg-teal-400 mx-auto mt-4"></div>
    </div>
  );
};

export default SectionTitle;