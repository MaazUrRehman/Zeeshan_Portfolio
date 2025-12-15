"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/ui/header';
import Footer from '@/components/ui/Footer';

// Image data categorized as per your requirements
const portfolioImages = [
    // Commercial Category
    { id: 1, name: "pic_1.png", src: "/images/portfolio/pic_1.png", category: "commercial" },
    { id: 2, name: "pic_2.png", src: "/images/portfolio/pic_2.png", category: "commercial" },
    { id: 3, name: "pic_3.png", src: "/images/portfolio/pic_3.png", category: "commercial" },
    { id: 20, name: "Picture2.jpg", src: "/images/portfolio/Picture2.jpg", category: "commercial" },
    { id: 21, name: "Picture3.jpg", src: "/images/portfolio/Picture3.jpg", category: "commercial" },

    // Amenities Category
    { id: 4, name: "pic_4.png", src: "/images/portfolio/pic_4.png", category: "amenities" },
    { id: 6, name: "pic_6.png", src: "/images/portfolio/pic_6.png", category: "amenities" },
    { id: 5, name: "pic_5.png", src: "/images/portfolio/pic_5.png", category: "amenities" },
    { id: 7, name: "pic_7.png", src: "/images/portfolio/pic_7.png", category: "amenities" },

    // Interior Design Category
    { id: 8, name: "pic_8.png", src: "/images/portfolio/pic_8.png", category: "interior" },
    { id: 9, name: "pic_9.png", src: "/images/portfolio/pic_9.png", category: "interior" },
    { id: 10, name: "pic_10.png", src: "/images/portfolio/pic_10.png", category: "interior" },
    { id: 11, name: "pic_11.png", src: "/images/portfolio/pic_11.png", category: "interior" },
    { id: 12, name: "pic_12.png", src: "/images/portfolio/pic_12.png", category: "interior" },
    { id: 13, name: "pic_13.png", src: "/images/portfolio/pic_13.png", category: "interior" },
    { id: 14, name: "pic_14.png", src: "/images/portfolio/pic_14.png", category: "interior" },
    { id: 15, name: "pic_15.png", src: "/images/portfolio/pic_15.png", category: "interior" },
    { id: 16, name: "pic_16.png", src: "/images/portfolio/pic_16.png", category: "interior" },
    { id: 17, name: "pic_17.png", src: "/images/portfolio/pic_17.png", category: "interior" },
    { id: 18, name: "pic_18.png", src: "/images/portfolio/pic_18.png", category: "interior" },
    { id: 22, name: "Picture4.jpg", src: "/images/portfolio/Picture4.jpg", category: "interior" },
];

const categories = [
    { id: "all", label: "All" },
    { id: "commercial", label: "Commercial" },
    { id: "amenities", label: "Amenities" },
    { id: "interior", label: "Interior Design" },
];

const Portfolio = () => {
    const [selectedImage, setSelectedImage] = useState<any>(null);
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredImages = activeCategory === "all"
        ? portfolioImages
        : portfolioImages.filter(image => image.category === activeCategory);

    return (
        <>
            <Header />
            <div className="min-h-screen  bg-gradient-to-br from-amber-50 to-amber-100/30 dark:from-gray-900 dark:to-amber-900/10">
                {/* Hero Section */}
                <section className="relative py-10 px-10">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-center mb-8">
                            <div className="w-12 h-1 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full"></div>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                                Portfolio Gallery
                            </h1>
                        </div>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mb-12">
                            Architectural drafting and CAD design portfolio showcasing precision and technical expertise.
                        </p>

                        {/* Category Navigation */}
                        <div className="flex flex-wrap gap-3 mb-12 p-4 bg-white/50 dark:bg-gray-800/50 rounded-2xl border border-amber-200/50 dark:border-amber-700/30">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveCategory(category.id)}
                                    className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${activeCategory === category.id
                                            ? "bg-amber-600 text-amber-50 shadow-lg transform scale-105"
                                            : "bg-white/70 dark:bg-gray-800 text-amber-700 dark:text-amber-300 hover:bg-amber-100 dark:hover:bg-amber-900/30 border border-amber-200 dark:border-amber-700/30"
                                        }`}
                                >
                                    {category.label}
                                </button>
                            ))}
                        </div>

                        {/* Category Info */}
                        <div className="mb-8">
                            <div className="flex items-center gap-3 text-amber-700 dark:text-amber-400">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="font-semibold">
                                    Showing {filteredImages.length} {filteredImages.length === 1 ? 'image' : 'images'} in {
                                        categories.find(cat => cat.id === activeCategory)?.label
                                    }
                                </span>
                            </div>
                        </div>

                        {/* Image Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                            {filteredImages.map((image) => (
                                <div
                                    key={image.id}
                                    onClick={() => setSelectedImage(image)}
                                    className="group cursor-pointer bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-amber-200/50 dark:border-amber-700/30"
                                >
                                    {/* Image Container */}
                                    <div className="relative h-48 w-full">
                                        <Image
                                            src={image.src}
                                            alt={image.name}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center">
                                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Image Name */}
                                    <div className="p-3">
                                        <div className="flex justify-between items-center mt-2">
                                            <span className="text-xs px-2 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded-full capitalize">
                                                {image.category}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Empty State */}
                        {filteredImages.length === 0 && (
                            <div className="text-center py-12">
                                <div className="w-24 h-24 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-12 h-12 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-2">
                                    No images found
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    There are no images in the selected category.
                                </p>
                            </div>
                        )}
                    </div>
                </section>

                {/* Image Modal - 50% of screen */}
                {/* Image Modal - Responsive for mobile */}
                {selectedImage && (
                    <div
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <div
                            className="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-3xl mx-auto overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Header */}
                            <div className="flex justify-between items-center p-4 border-b border-amber-200 dark:border-amber-700/30 bg-white/95 dark:bg-gray-800/95">
                                
                                <button
                                    onClick={() => setSelectedImage(null)}
                                    className="ml-4 p-2 flex justify-right hover:bg-amber-100 dark:hover:bg-amber-900/30 rounded-full transition-colors"
                                    aria-label="Close modal"
                                >
                                    <svg className="w-6 h-6 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            {/* Modal Image - Responsive */}
                            <div className="relative w-full h-[30vh] sm:h-[50vh] md:h-[60vh]">
                                <Image
                                    src={selectedImage.src}
                                    alt={selectedImage.name}
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, 70vw"
                                    priority
                                />
                            </div>

                            {/* Modal Footer */}
                            <div className="p-4 border-t border-amber-200 dark:border-amber-700/30 bg-white/95 dark:bg-gray-800/95">
                                <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
                                    <div className="text-xs text-gray-500 dark:text-gray-400">
                                        {selectedImage.category.toUpperCase()} • ARCHITECTURAL DRAFTING
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="w-[80%] mx-auto">
                    <Footer />
                </div>
            </div>

        </>
    );
};

export default Portfolio;

