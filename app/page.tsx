import Header from "@/components/ui/header";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import HeroSection from "@/components/ui/HeraSection";
import EducationSection from "@/components/ui/EducationComponent";
import SkillsSection from "@/components/ui/SkillsComponent";
import ExperienceSection from "@/components/ui/ExperienceComponent";
import Footer from "@/components/ui/Footer";

export default function Home() {
  const education = [
    { degree: "Bachelor in Commerce", institution: "Ghazali Govt. College Hyderabad", period: "2016-2018" },
    { degree: "Diploma in Civil", institution: "Hasani Collegiate Karachi", period: "2013-2018" },
    { degree: "Intermediate", institution: "Shipowner's Govt. College Karachi", period: "2011-2013" },
    { degree: "Matriculation", institution: "M.D Grammar School Karachi", period: "2009-2011" },
  ];

  const stats = [
    { number: 50, label: "Iconic Projects", suffix: "+" },
    { number: 16, label: "Years Excellence", suffix: "+" },
    { number: 30, label: "Design Awards", suffix: "+" },
    { number: 5, label: "Companies Served", suffix: "+" },
  ];

  return (
    <>
      <Header />

      <div className="min-h-screen bg-amber-50 dark:bg-black overflow-x-hidden">

        {/* BACKGROUND (DESKTOP ONLY) */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden hidden sm:block">
          <div className="absolute top-20 right-20 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl" />
          <div className="absolute top-1/4 left-1/6 w-80 h-80 border border-amber-600/20 rotate-12" />
          <div className="absolute bottom-1/3 right-1/4 w-60 h-60 border border-amber-800/30 -rotate-6" />
        </div>

        <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
          <HeroSection />

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-32 mb-20">
            {stats.map((stat, i) => (
              <AnimatedCounter
                key={i}
                end={stat.number}
                duration={2000}
                label={stat.label}
              />
            ))}
          </div>

          <EducationSection education={education} />
          <SkillsSection />
          <ExperienceSection />
          <Footer />
        </main>
      </div>
    </>
  );
}
