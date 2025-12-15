"use client";

import React from "react";

interface ExperienceItem {
  company: string;
  location: string;
  period: string;
}

const ExperienceSection = () => {
  const experience: ExperienceItem[] = [
    {
      company: "Bahria Town Karachi",
      location: "Super Highway Karachi",
      period: "2018-2025"
    },
    {
      company: "3DSI-Pakistan-LIC",
      location: "Karachi Pakistan (Based California)",
      period: "2014-2018"
    },
    {
      company: "Moin-U-Zaman Architects",
      location: "Karachi Pakistan (Part Time)",
      period: "2013-2014"
    },
    {
      company: "Habib Fida Ali Architects",
      location: "Karachi Pakistan",
      period: "2011-2014"
    },
    {
      company: "Mansoor-U-Zaman Architects",
      location: "Karachi Pakistan",
      period: "2009-2011"
    }
  ];

  return (
    <section className="mb-16">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-12">
        <div className="w-12 h-1 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full"></div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Professional Experience
        </h2>
      </div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Vertical Timeline Line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-200 via-amber-400 to-amber-200 dark:from-amber-800 dark:via-amber-600 dark:to-amber-800"></div>
        
        {/* Experience Items */}
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div key={index} className="relative flex items-start group">
              {/* Timeline Dot */}
              <div className="absolute left-4 mt-4 w-4 h-4 bg-amber-600 border-4 border-white dark:border-gray-900 rounded-full z-10 shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
              
              {/* Content Card */}
              <div className="ml-12 flex-1">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-amber-300 dark:hover:border-amber-600 transition-all duration-300 group-hover:-translate-y-1">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                        {exp.company}
                      </h3>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-sm font-medium">{exp.location}</span>
                      </div>
                    </div>
                    
                    <div className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full text-sm font-semibold shadow-md whitespace-nowrap">
                      {exp.period}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;