import React, { useState } from "react";

const ART_ITEMS = [
    {
        id: "trek-1",
        title: "Pin Parvati Pass Expedition",
        category: "Treks & Expeditions",
        metric: "5,319m Elevation",
        date: "July 2026",
        location: "Himachal Pradesh, India",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop",
        description: "A challenging 110km alpine trek connecting the lush Parvati Valley with the high-altitude desert of Spiti Valley. Navigated glacier ice fields and steep moraine climbs above 5,000m.",
        details: [
            "Maximum altitude reached: 5,319 meters",
            "Duration: 9 Days alpine style",
            "Key challenge: Mantalai glacier river crossing & high wind ridge navigation"
        ]
    },
    {
        id: "cert-1",
        title: "AWS Certified Solutions Architect",
        category: "Certifications",
        metric: "AWS Credential",
        date: "May 2026",
        location: "Amazon Web Services",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
        description: "Demonstrated advanced technical expertise in designing resilient, high-performing, cost-optimized, and secure architectures on AWS cloud infrastructure.",
        details: [
            "Focus: Cloud Architecture, Serverless Microservices & Scalability",
            "Verification ID: AWS-SA-2026-PP",
            "Issuer: Amazon Web Services"
        ]
    },
    {
        id: "astro-1",
        title: "Deep Field: Orion Nebula (M42)",
        category: "Astronomy",
        metric: "Astrophotography",
        date: "February 2026",
        location: "Dark Sky Observatory Site",
        image: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=1000&auto=format&fit=crop",
        description: "Captured using a tracked telescope setup with stacked exposures to reveal the glowing ionized gas clouds and star formation regions in the constellation of Orion.",
        details: [
            "Total Exposure: 3.5 Hours stacked frames",
            "Equipment: 80mm ED Refractor + Equatorial Tracker",
            "Post-Processing: PixInsight & Photoshop signal reduction"
        ]
    },
    {
        id: "trek-2",
        title: "Kedarkantha Winter Peak Summit",
        category: "Treks & Expeditions",
        metric: "3,800m Elevation",
        date: "December 2025",
        location: "Uttarakhand, Himalayas",
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1000&auto=format&fit=crop",
        description: "Night summit push under sub-zero temperatures (-12°C) to reach the peak before sunrise. Features panoramic 360-degree views of Himalayan giants like Swargarohini.",
        details: [
            "Summit Push: Started 2:30 AM in deep snow",
            "Key memories: Crisp stellar view of the Milky Way core before dawn"
        ]
    },
    {
        id: "cert-2",
        title: "Deep Learning & Neural Networks Specialization",
        category: "Certifications",
        metric: "AI & ML Certificate",
        date: "January 2026",
        location: "DeepLearning.AI / Coursera",
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1000&auto=format&fit=crop",
        description: "Comprehensive mastery of neural network architectures, backpropagation mathematics, hyperparameter tuning, and transformer fundamentals.",
        details: [
            "Key topics: CNNs, RNNs, Attention Mechanisms, Transformer Models",
            "Hands-on: PyTorch implementations from scratch"
        ]
    },
    {
        id: "art-1",
        title: "Minimalist Celestial Design System",
        category: "Design & Art",
        metric: "UI & Visual Art",
        date: "March 2026",
        location: "Personal Gallery",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
        description: "Vector art and UI design exploration blending dark mode astronomical color palette with clean typographic grids.",
        details: [
            "Medium: Digital Vector Art & Figma Component Systems",
            "Palette: Deep Void Gray (#121316), Starlight Silver, Neon Cyan accents"
        ]
    }
];

const Art = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [activeModalItem, setActiveModalItem] = useState(null);

    const categories = ["All", "Treks & Expeditions", "Certifications", "Astronomy", "Design & Art"];

    const filteredItems = selectedCategory === "All"
        ? ART_ITEMS
        : ART_ITEMS.filter(item => item.category === selectedCategory);

    return (
        <main className="max-w-[1280px] mx-auto px-6 pt-28 md:pt-36 pb-16 font-sans min-h-[85vh]">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 border-b border-[#f2f3f3] pb-8">
                <div>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-[#22252a] tracking-tight mb-2">
                        Gallery, Treks & Certifications
                    </h1>
                    <p className="text-base text-[#495057] max-w-2xl">
                        A visual collection of high-altitude mountain treks, technical certifications, astrophotography, and creative design work.
                    </p>
                </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none border-b border-[#f2f3f3]">
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

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredItems.map((item) => (
                    <div
                        key={item.id}
                        onClick={() => setActiveModalItem(item)}
                        className="group bg-white border border-[#e5e7eb] rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-between"
                    >
                        <div>
                            {/* Image Container with Hover Zoom */}
                            <div className="relative h-60 overflow-hidden bg-gray-100">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                                    {item.category}
                                </div>
                                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-[#22252a] text-xs font-bold px-2.5 py-1 rounded shadow-xs">
                                    {item.metric}
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="p-6">
                                <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                                    <span>{item.location}</span>
                                    <span>{item.date}</span>
                                </div>
                                <h3 className="text-xl font-bold text-[#22252a] group-hover:text-black transition-colors mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-[#495057] line-clamp-2 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>

                        {/* Card Bottom CTA */}
                        <div className="px-6 pb-6 pt-0 flex items-center justify-between text-xs font-bold text-[#22252a]">
                            <span>Click to view details</span>
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox / Detail Modal */}
            {activeModalItem && (
                <div
                    className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
                    onClick={() => setActiveModalItem(null)}
                >
                    <div
                        className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl transition-all duration-300 max-h-[90vh] flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header Bar */}
                        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between bg-gray-50">
                            <div>
                                <span className="text-xs font-bold uppercase tracking-wider text-gray-500 bg-gray-200 px-2 py-0.5 rounded mr-2">
                                    {activeModalItem.category}
                                </span>
                                <span className="text-xs font-semibold text-[#22252a]">
                                    {activeModalItem.metric}
                                </span>
                            </div>
                            <button
                                onClick={() => setActiveModalItem(null)}
                                className="w-8 h-8 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 flex items-center justify-center font-bold text-lg transition-colors"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Modal Content Scrollable Area */}
                        <div className="overflow-y-auto p-6 space-y-6">
                            {/* Image Preview */}
                            <div className="w-full h-80 sm:h-96 rounded-xl overflow-hidden bg-gray-100 border border-gray-200">
                                <img
                                    src={activeModalItem.image}
                                    alt={activeModalItem.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Details Text */}
                            <div>
                                <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                                    <span className="font-semibold text-gray-700">{activeModalItem.location}</span>
                                    <span>{activeModalItem.date}</span>
                                </div>
                                <h2 className="text-2xl font-extrabold text-[#22252a] mb-3">
                                    {activeModalItem.title}
                                </h2>
                                <p className="text-base text-[#495057] leading-relaxed mb-4">
                                    {activeModalItem.description}
                                </p>

                                {/* Highlights list */}
                                {activeModalItem.details && activeModalItem.details.length > 0 && (
                                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 mt-4">
                                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#22252a] mb-2">
                                            Key Highlights & Specs
                                        </h4>
                                        <ul className="list-disc list-inside space-y-1.5 text-sm text-[#495057]">
                                            {activeModalItem.details.map((detail, idx) => (
                                                <li key={idx}>{detail}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex justify-end">
                            <button
                                onClick={() => setActiveModalItem(null)}
                                className="px-5 py-2 bg-[#22252a] text-white text-sm font-semibold rounded-lg hover:bg-black transition-colors"
                            >
                                Close View
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
};

export default Art;
