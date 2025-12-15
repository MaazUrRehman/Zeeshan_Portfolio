"use client";

import Footer from '@/components/ui/Footer';
import Header from '@/components/ui/header';
import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            if (res.ok) {
                setIsSubmitted(true);
                setFormData({ name: "", email: "", subject: "", message: "" });
                setTimeout(() => setIsSubmitted(false), 3000);
            } else {
                setError(data.error || "Something went wrong");
            }
        } catch (err: any) {
            setError(err.message || "Something went wrong");
        }
    };

    return (
        <>
            <Header />

            <section className="pt-10 px-6 bg-gradient-to-br from-amber-50 to-amber-100/30 dark:from-gray-900 dark:to-amber-900/10">
                <div className="max-w-4xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-4 mb-8">
                            <div className="w-12 h-1 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full"></div>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                                Get In Touch
                            </h2>
                            <div className="w-12 h-1 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full"></div>
                        </div>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Ready to bring your architectural vision to life? Let's discuss your project requirements and create something extraordinary together.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Contact Information */}
                        <div className="lg:col-span-1 space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-amber-700 dark:text-amber-400 mb-6">
                                    Contact Information
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-8">
                                    Feel free to reach out for architectural drafting, CAD design, or 3D modeling projects. I'm here to help bring your ideas to reality.
                                </p>
                            </div>

                            {/* Contact Details */}
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Phone</h4>
                                        <p className="text-gray-600 dark:text-gray-300">+966 538 995 203</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Email</h4>
                                        <p className="text-gray-600 dark:text-gray-300">syedzeeshan870870@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Location</h4>
                                        <p className="text-gray-600 dark:text-gray-300">Jeddah, Kingdom of Saudia Arabia</p>
                                    </div>
                                </div>
                            </div>

                            {/* Services Offered */}
                            <div className="bg-amber-100/50 dark:bg-amber-900/20 rounded-2xl p-6 border border-amber-200/50 dark:border-amber-700/30">
                                <h4 className="font-semibold text-amber-700 dark:text-amber-400 mb-4">Services Offered</h4>
                                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                                        Architectural Drafting
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                                        CAD Design & Detailing
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                                        3D Modeling & Rendering
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                                        Construction Documentation
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-amber-200/50 dark:border-amber-700/30">
                                <h3 className="text-2xl font-bold text-amber-700 dark:text-amber-400 mb-6">
                                    Send Message
                                </h3>

                                {/* Success Message */}
                                {isSubmitted && (
                                    <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-700/30 rounded-xl">
                                        <div className="flex items-center gap-3">
                                            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-green-700 dark:text-green-300 font-medium">
                                                Thank you! Your message has been sent successfully.
                                            </span>
                                        </div>
                                    </div>
                                )}

                                {/* FORM UPDATED HERE */}
                                <form onSubmit={handleSubmit} className="space-y-6">

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                                Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900/50 border border-amber-200 dark:border-amber-700/30 rounded-xl focus:ring-2 focus:ring-amber-500"
                                                placeholder="Your name"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                                Email *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900/50 border border-amber-200 dark:border-amber-700/30 rounded-xl focus:ring-2 focus:ring-amber-500"
                                                placeholder="your.email@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Subject *
                                        </label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900/50 border border-amber-200 dark:border-amber-700/30 rounded-xl"
                                            placeholder="Project inquiry"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Message *
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={6}
                                            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900/50 border border-amber-200 dark:border-amber-700/30 rounded-xl resize-none"
                                            placeholder="Tell me about your project..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-semibold rounded-xl"
                                    >
                                        Send Message
                                    </button>
                                </form>

                                {/* Form footer note */}
                                <p className="mt-6 text-sm text-center text-gray-500 dark:text-gray-400">
                                    I'll get back to you within 24 hours. Your architectural vision is important to me.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[80%] mx-auto">
                    <Footer />
                </div>
            </section>

        </>
    );
};

export default ContactForm;