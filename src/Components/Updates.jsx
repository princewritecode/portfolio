import React, { useState } from "react";

const UPDATES_DATA = [
    {
        id: "update-1",
        date: "August 2026",
        category: "Research & AI",
        title: "Achieved 180ms Latency Benchmark in Adaptive AI Tutor Engine",
        description: "Optimized the real-time inference loop for personalized student feedback. Integrated WebSockets streaming with lightweight intent classification, reducing dynamic feedback response time from 1.2s down to 180ms.",
        tags: ["AI Assistant", "Real-Time Systems", "Latency Optimization"],
        link: "https://github.com",
        linkText: "View Architecture Repo"
    },
    {
        id: "update-2",
        date: "July 2026",
        category: "Extracurricular",
        title: "Completed Pin Parvati Pass Expedition (5,319m)",
        dateDetailed: "July 14–22, 2026",
        description: "Successfully led a high-altitude alpine trek across the Pin Parvati Pass in Himachal Pradesh, reaching 5,319 meters elevation. Navigated glacier traverses, river crossings, and technical mountain terrain.",
        tags: ["Trekking", "High Altitude", "Leadership"],
        linkText: "Photos in Art Gallery",
        isInternalArtLink: true
    },
    {
        id: "update-3",
        date: "June 2026",
        category: "Research & AI",
        title: "Preprint Published: Dynamic Student Engagement Modeling",
        description: "Authored a technical research draft analyzing how prompt-stream pacing and cognitive load detection improve learning retention in digital learning platforms.",
        tags: ["Research Paper", "EdTech", "Human-AI Interaction"],
        link: "https://medium.com/@princepateldevs",
        linkText: "Read Summary on Medium"
    },
    {
        id: "update-4",
        date: "May 2026",
        category: "Projects & Code",
        title: "Released Open-Source React Portfolio & UI Boilerplate",
        description: "Published a zero-config, highly accessible developer portfolio template optimized for Vite and Tailwind CSS v4, receiving community appreciation for clean design systems.",
        tags: ["React", "Open Source", "Tailwind CSS"],
        link: "https://github.com",
        linkText: "GitHub Repository"
    },
    {
        id: "update-5",
        date: "March 2026",
        category: "Extracurricular",
        title: "Deep Sky Observation: Astrophotography Series Completed",
        description: "Captured and processed deep-space exposures of the Orion Nebula (M42) and Andromeda Galaxy (M31) using long-exposure stacked imagery.",
        tags: ["Astronomy", "Astrophotography", "Optics"],
        linkText: "View Astrophotography in Art Section",
        isInternalArtLink: true
    }
];

const Updates = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = ["All", "Research & AI", "Extracurricular", "Projects & Code"];

    const filteredUpdates = selectedCategory === "All"
        ? UPDATES_DATA
        : UPDATES_DATA.filter(item => item.category === selectedCategory);

    return (
        <main className="max-w-[1280px] mx-auto px-6 pt-28 md:pt-36 pb-16 font-sans min-h-[85vh]">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 border-b border-[#f2f3f3] pb-8">
                <div>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-[#22252a] tracking-tight mb-2">
                        Updates & Milestones
                    </h1>
                    <p className="text-base text-[#495057] max-w-2xl">
                        A running record of research developments, software releases, expedition achievements, and extracurricular highlights.
                    </p>
                </div>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none border-b border-[#f2f3f3]">
                {categories.map((cat, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedCategory(cat)}
                        className={`text-xs font-semibold px-4 py-2 rounded-lg transition-all duration-200 ${
                            selectedCategory === cat
                                ? "bg-[#22252a] text-white shadow-xs"
                                : "bg-gray-100 text-[#495057] hover:bg-gray-200"
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Timeline View */}
            <div className="relative border-l-2 border-gray-200 ml-3 md:ml-6 space-y-10 pl-6 md:pl-10">
                {filteredUpdates.map((item) => (
                    <div key={item.id} className="relative group">
                        {/* Timeline Bullet Point */}
                        <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-[#22252a] group-hover:scale-125 transition-transform duration-200"></div>

                        {/* Update Card */}
                        <div className="bg-white border border-[#e5e7eb] rounded-xl p-6 shadow-xs hover:shadow-md transition-shadow duration-300">
                            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                                <div className="flex items-center gap-3">
                                    <span className="text-xs font-bold text-gray-500 tracking-wide uppercase bg-gray-100 px-2.5 py-1 rounded">
                                        {item.date}
                                    </span>
                                    <span className="text-xs font-semibold text-[#22252a] border border-[#22252a]/20 px-2.5 py-1 rounded-full">
                                        {item.category}
                                    </span>
                                </div>

                                {item.dateDetailed && (
                                    <span className="text-xs text-gray-400 font-medium">
                                        {item.dateDetailed}
                                    </span>
                                )}
                            </div>

                            <h2 className="text-xl font-bold text-[#22252a] mb-2">
                                {item.title}
                            </h2>

                            <p className="text-base text-[#495057] leading-relaxed mb-4">
                                {item.description}
                            </p>

                            {/* Tags & Action Link */}
                            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#f2f3f3]">
                                <div className="flex flex-wrap gap-2">
                                    {item.tags.map((tag, idx) => (
                                        <span key={idx} className="text-xs text-gray-600 bg-gray-50 px-2.5 py-0.5 rounded border border-gray-200">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>

                                {item.link && (
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#22252a] hover:text-black transition-colors"
                                    >
                                        <span>{item.linkText}</span>
                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Updates;
