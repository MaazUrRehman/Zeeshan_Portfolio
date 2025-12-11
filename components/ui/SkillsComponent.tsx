"use client";

import React, { useState } from "react";

type ProficiencyLevel = "Native" | "Good" | "Basic";

interface LanguageItem {
  language: string;
  proficiency: ProficiencyLevel;
}

const SkillsSection = () => {
  // --------------------------
  // DIRECTLY USING YOUR DATA
  // --------------------------
  const skills = [
    "AutoCAD",
    "REVIT",
    "MS OFFICE",
    "SKETCHUP",
    "3D-MAX",
    "TIME MANAGEMENT",
    "ORGANIZATION",
  ];

  const languages: LanguageItem[] = [
    { language: "URDU", proficiency: "Native" },
    { language: "ENGLISH", proficiency: "Good" },
  ];

  // --------------------------
  // STATES
  // --------------------------
  const [activeTab, setActiveTab] = useState<"technical" | "languages">(
    "technical"
  );

  // --------------------------
  // CATEGORIES
  // --------------------------
  const skillCategories: Record<string, string[]> = {
    "Design & Drafting": skills.filter((skill) =>
      ["AutoCAD", "REVIT", "SKETCHUP", "3D-MAX"].includes(skill)
    ),
    Productivity: skills.filter((skill) =>
      ["MS OFFICE", "TIME MANAGEMENT", "ORGANIZATION"].includes(skill)
    ),
  };

  // --------------------------
  // UI
  // --------------------------
  return (
    <section className="mb-12">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-8 h-0.5 bg-amber-600 rounded-full"></div>
        <h2 className="text-2xl font-bold text-black dark:text-amber-50">
          Skills & Expertise
        </h2>
      </div>

      {/* TABS */}
      <div className="flex gap-2 mb-8 p-1 bg-amber-100/50 dark:bg-amber-800/20 rounded-2xl w-fit mx-auto">
        {[
          { id: "technical", label: "Technical Skills" },
          { id: "languages", label: "Languages" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as "technical" | "languages")}
            className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
              activeTab === tab.id
                ? "bg-amber-600 text-amber-50 shadow-lg transform scale-105"
                : "text-amber-700 dark:text-amber-300 hover:bg-amber-200/50 dark:hover:bg-amber-700/30"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* TECHNICAL SKILLS */}
      {activeTab === "technical" && (
        <div className="space-y-6">
          {Object.entries(skillCategories).map(([category, categorySkills]) => (
            <div key={category} className="group">
              <h3 className="text-lg font-semibold text-amber-700 dark:text-amber-400 mb-4 flex items-center gap-3">
                <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
                {category}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {categorySkills.map((skill) => (
                  <div
                    key={skill}
                    className="p-4 bg-gradient-to-br from-amber-50 to-amber-100/50 dark:from-amber-900/10 dark:to-amber-800/5 
                      border-2 border-amber-200/50 dark:border-amber-700/30 rounded-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
                      <span className="font-semibold text-gray-800 dark:text-amber-200">
                        {skill}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* LANGUAGES */}
      {activeTab === "languages" && (
        <div className="space-y-6">
          {languages.map((lang) => (
            <div
              key={lang.language}
              className="p-6 bg-gradient-to-br from-amber-50 to-amber-100/50 dark:from-amber-900/10 dark:to-amber-800/5 
                border-2 border-amber-200/50 dark:border-amber-700/30 rounded-2xl"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-amber-700 dark:text-amber-400">
                  {lang.language}
                </h3>
                <span className="px-4 py-2 bg-amber-600 text-amber-50 rounded-full text-sm font-semibold shadow-lg">
                  {lang.proficiency}
                </span>
              </div>

              <div className="w-full bg-amber-200/30 dark:bg-amber-700/20 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-amber-500 to-amber-600 h-3 rounded-full transition-all duration-1000"
                  style={{
                    width:
                      lang.proficiency === "Native"
                        ? "100%"
                        : lang.proficiency === "Good"
                        ? "80%"
                        : "60%",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default SkillsSection;