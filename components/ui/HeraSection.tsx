"use client";

export default function HeroSection() {
  return (
    <>
      {/* Professional Header */}
      <div className="mb-8 flex items-center gap-4">
        <div className="w-4 h-16 bg-gradient-to-b from-amber-600 to-amber-800 rounded-full"></div>
        <div>
          <span className="text-sm font-medium text-amber-700 dark:text-amber-400 tracking-widest uppercase block">
            Architectural Draftsman
          </span>
          <div className="w-20 h-0.5 bg-amber-600/50 mt-2"></div>
        </div>
      </div>

      {/* Hero Section with Two Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        {/* Left Column: Text Content */}
        <div>
          <h1 className="text-5xl sm:text-7xl font-secondary font-black text-black dark:text-amber-50 mb-4 leading-none">
            <span className="block">SYED ZEESHAN</span>
            <span className="block bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 bg-clip-text text-transparent">
              UDDIN
            </span>
          </h1>
          
          <div className="flex items-center gap-4 mt-6">
            <div className="w-12 h-1 bg-amber-600 rounded-full"></div>
            <div className="w-6 h-1 bg-amber-400 rounded-full"></div>
            <div className="w-3 h-1 bg-amber-300 rounded-full"></div>
          </div>
        </div>

        {/* Right Column: Profile Image */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Glow Effect Container */}
          <div className="relative group">
            {/* Outer Glow Ring */}
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-600/20 via-amber-400/30 to-amber-600/20 rounded-2xl blur-xl group-hover:blur-2xl group-hover:from-amber-600/30 group-hover:via-amber-400/40 group-hover:to-amber-600/30 transition-all duration-500"></div>
            
            {/* Inner Glow Ring */}
            <div className="absolute -inset-2 bg-gradient-to-r from-amber-600/10 to-amber-400/10 rounded-xl blur-md group-hover:blur-lg transition-all duration-500"></div>
            
            {/* Image Container */}
            <div className="relative overflow-hidden rounded-xl border-2 border-amber-500/10 group-hover:border-amber-500/30 transition-all duration-500">
              {/* Replace the div below with your actual image */}
              <div className="w-48 h-80 md:w-100 md:h-92 bg-gradient-to-br from-amber-100/10 via-amber-50/20 to-amber-200/10 flex items-center justify-center">
                {/* Placeholder for your image - Replace this with actual img tag */}
                <div className="relative w-full h-full overflow-hidden">
                  {/* This is where your image would go */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <img
                    src="/images/Profile_Picture.jpeg"
                    alt="Syed Zeeshan Uddin - Architectural Draftsman"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  </div>
  
                  
                  {/* Hover Overlay Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-600/0 via-amber-600/0 to-amber-600/0 group-hover:from-amber-600/10 group-hover:via-amber-600/5 group-hover:to-amber-600/20 transition-all duration-500"></div>
                  
                  {/* Shine Effect */}
                  <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-amber-100/20 to-transparent group-hover:left-full transition-all duration-1000"></div>
                </div>
              </div>
              
              {/* Decorative Corner Accents */}
              <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-amber-500/50 group-hover:border-amber-400"></div>
              <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-amber-500/50 group-hover:border-amber-400"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-amber-500/50 group-hover:border-amber-400"></div>
              <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-amber-500/50 group-hover:border-amber-400"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 blur-sm group-hover:animate-pulse transition-all duration-500"></div>
            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-amber-500 rounded-full opacity-0 group-hover:opacity-70 blur-sm group-hover:animate-pulse delay-75 transition-all duration-500"></div>
          </div>
        </div>
      </div>
    </>
  );
}