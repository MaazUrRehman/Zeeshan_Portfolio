'use client';

export default function Footer() {

    return (
        <>
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
                            <a href='Portfolio' className="text-gray-600 dark:text-amber-200/60 hover:text-amber-700 dark:hover:text-amber-400 transition-all duration-300 font-medium text-sm">Portfolio</a>
                            <a href='Contact' className="text-gray-600 dark:text-amber-200/60 hover:text-amber-700 dark:hover:text-amber-400 transition-all duration-300 font-medium text-sm">Contact</a>
                        </div>
                        <div className="text-xs text-gray-500 dark:text-amber-200/40 text-center">
                            &copy; Developed By SoftTech Development & Creations
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}