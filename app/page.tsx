import Header from "../components/ui/header";
import AnimatedCounter from "../components/ui/AnimatedCounter";
import HeroSection from "../components/ui/HeraSection";
import EducationSection from "@/components/ui/EducationComponent";
import SkillsSection from "@/components/ui/SkillsComponent";
import ExperienceSection from "@/components/ui/ExperienceComponent";


export default function Home() {
  const education = [
    { degree: "Bachelor in Commerce", institution: "Dhigmat Govt. College & P. G Center Hyderabad", period: "2016-2018" },
    { degree: "Diploma in Civil", institution: "Hasoni Collegiate Guilberg F. D Area Karachi", period: "2013-2018" },
    { degree: "Intermediate", institution: "Pakistan Shipowner's Govt. College Nazimabad Karachi", period: "2011-2013" },
    { degree: "Matriculation", institution: "MJD GRAMMAR SCHOOL North Karachi", period: "2009-2011" }
  ];


  const stats = [
    { number: 50, label: "Iconic Projects", suffix: "+" },
    { number: 16, label: "Years Excellence", suffix: "+" },
    { number: 30, label: "Design Awards", suffix: "+" },
    { number: 5, label: "Companies Served", suffix: "+" }
  ];


  return (
    <>
      <Header />
      <div className="flex min-h-screen items-center justify-center bg-amber-50 dark:bg-black font-primary transition-colors duration-500">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Geometric Pattern */}
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <div className="grid grid-cols-12 gap-8 h-full">
              {Array.from({ length: 48 }).map((_, i) => (
                <div key={i} className="border-r border-amber-900/20 h-full"></div>
              ))}
            </div>
          </div>

          {/* Floating Architectural Elements */}
          <div className="absolute top-1/4 left-1/6 w-80 h-80 border-2 border-amber-600/20 rounded-lg transform rotate-12"></div>
          <div className="absolute bottom-1/4 right-1/4 w-60 h-60 border border-amber-800/30 rounded transform -rotate-6"></div>
          <div className="absolute top-1/2 right-1/3 w-40 h-40 bg-amber-600/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-1/3 left-1/4 w-32 h-32 border border-amber-700/25 rounded-lg transform rotate-45"></div>

          {/* Gradient Orbs */}
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-amber-400/5 to-amber-600/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-amber-300/10 rounded-full blur-3xl"></div>
        </div>

        <main className="relative w-full max-w-6xl px-8 py-12 z-10">
          <HeroSection />
          {/*stats section*/}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-36 mb-20 w-full ">
            {stats.map((stat, index) => (
              <AnimatedCounter
                key={index}
                end={stat.number}
                duration={2000}
                label={stat.label}
              />
            ))}
          </div>


          {/* Education & Skills Section */}
          <EducationSection education={education} />

          {/* Skills Section */}
          <SkillsSection />


          {/* Experience Section */}
          <ExperienceSection />

          

          {/* Enhanced Footer */}
          <div className="w-full border-t border-amber-200/50 dark:border-amber-700/30 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              <div className="text-center lg:text-left">
                <div className="flex items-center gap-2 mb-2 justify-center lg:justify-start">
                  <div className="w-6 h-6 bg-gradient-to-br from-amber-600 to-amber-800 rounded"></div>
                  <span className="text-lg font-bold text-black dark:text-amber-50">Syed Zeeshan Uddin</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-amber-200/60">
                  Architectural Draftsman & CAD Specialist
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <div className="flex gap-4">
                  {['Portfolio', 'LinkedIn', 'Contact'].map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="text-gray-600 dark:text-amber-200/60 hover:text-amber-700 dark:hover:text-amber-400 transition-all duration-300 font-medium text-sm"
                    >
                      {item}
                    </a>
                  ))}
                </div>
                <div className="text-xs text-gray-500 dark:text-amber-200/40 text-center">
                  &copy; 2024 Syed Zeeshan Uddin
                </div>
              </div>
            </div>
          </div>



        </main>
      </div>
    </>
  );
}














