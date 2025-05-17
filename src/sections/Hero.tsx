import React, { useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadein');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const scrollToAbout = () => {
    const about = document.getElementById('about');
    if (about) {
      window.scrollTo({
        top: about.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="hero" 
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-20 px-4 sm:px-6 lg:px-8 opacity-0 transition-opacity duration-1000"
    >
      <div className="text-center max-w-4xl">
        <p className="text-teal-600 dark:text-teal-400 font-medium mb-4 animate-slidein">Hello, I'm</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 animate-slidein" style={{ animationDelay: '0.2s' }}>
          Kattukolu Phanindra Tagore
        </h1>
        <h2 className="text-2xl sm:text-3xl text-gray-600 dark:text-gray-400 mb-8 animate-slidein" style={{ animationDelay: '0.4s' }}>
          Aspiring Full Stack Developer | Data Science Student
        </h2>
        
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto animate-slidein" style={{ animationDelay: '0.6s' }}>
          Passionate about web development, AI, and cloud technologies with strong problem-solving 
          and adaptability skills. Constantly learning and exploring new technologies to create impactful solutions.
        </p>
        
        <div className="flex justify-center space-x-4 mb-12 animate-slidein" style={{ animationDelay: '0.8s' }}>
          <a 
            href="https://github.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gray-800 dark:bg-gray-700 hover:bg-teal-600 dark:hover:bg-teal-600 text-white p-3 rounded-full transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a 
            href="https://linkedin.com/in/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a 
            href="mailto:2200032374cser@gmail.com" 
            className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full transition-colors"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
        
        <div className="animate-slidein" style={{ animationDelay: '1s' }}>
          <button
            onClick={scrollToAbout}
            className="animate-bounce p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow"
            aria-label="Scroll down"
          >
            <ArrowDown className="h-6 w-6 text-teal-600 dark:text-teal-400" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;