"use client";

import React, { useState } from "react";

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
}

interface EducationSectionProps {
  education: EducationItem[];
}

const EducationSection: React.FC<EducationSectionProps> = ({ education }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section className="mb-12">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-8 h-0.5 bg-amber-600 rounded-full"></div>
        <h2 className="text-2xl font-bold text-black dark:text-amber-50">
          Education Journey
        </h2>
      </div>

      {/* Navigation Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {education.map((edu: EducationItem, index: number) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
              activeIndex === index
                ? "bg-amber-600 text-amber-50 shadow-lg transform scale-105"
                : "bg-amber-100/50 dark:bg-amber-800/20 text-amber-700 dark:text-amber-300 hover:bg-amber-200/50 dark:hover:bg-amber-700/30"
            }`}
          >
            {edu.degree.split(" ")[0]}
          </button>
        ))}
      </div>

      {/* Carousel Content */}
      <div className="relative">
        <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-amber-50/80 to-amber-100/60 dark:from-amber-900/20 dark:to-amber-800/10 border-2 border-amber-200/50 dark:border-amber-700/30">
          {education.map((edu: EducationItem, index: number) => (
            <div
              key={index}
              className={`p-6 transition-all duration-500 transform ${
                activeIndex === index
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 absolute translate-x-full"
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-amber-700 dark:text-amber-400 mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-600 dark:text-amber-200/70 text-lg mb-3">
                    {edu.institution}
                  </p>
                </div>
                <span className="px-4 py-2 bg-amber-600 text-amber-50 rounded-full text-sm font-semibold shadow-lg whitespace-nowrap">
                  {edu.period}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-amber-200/30 dark:bg-amber-700/20 rounded-full h-2 mb-4">
                <div
                  className="bg-gradient-to-r from-amber-500 to-amber-600 h-2 rounded-full transition-all duration-1000"
                  style={{
                    width: `${
                      ((education.length - index) / education.length) * 100
                    }%`,
                  }}
                ></div>
              </div>

              {/* Timeline Indicator */}
              <div className="flex items-center justify-between text-xs text-gray-500 dark:text-amber-400/60">
                <span>Start</span>
                <span>Graduation</span>
              </div>
            </div>
          ))}
        </div>

      
      </div>
    </section>
  );
};

export default EducationSection;
