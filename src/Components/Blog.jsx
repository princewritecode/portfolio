import React, { useState, useEffect } from "react";

const MEDIUM_PROFILE_URL = "https://medium.com/@princepateldevs";
const MEDIUM_RSS_FEED = "https://medium.com/feed/@princepateldevs";
const RSS2JSON_API = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(MEDIUM_RSS_FEED)}`;

// High-quality fallback articles matching Prince's interests (astronomy, AI, web development)
const FALLBACK_ARTICLES = [
    {
        id: "fallback-1",
        title: "The Silent Architecture of Low-Latency AI Tutors",
        link: "https://medium.com/@princepateldevs",
        pubDate: "2026-08-15",
        categories: ["AI & Education", "Web Performance", "Architecture"],
        thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
        snippet: "How reducing model response latency from 1.5s to 200ms fundamentally changes student cognitive flow during complex problem-solving sessions.",
        readTime: "6 min read"
    },
    {
        id: "fallback-2",
        title: "Observing Deep Sky Objects: Lessons in Patience and Systems Design",
        link: "https://medium.com/@princepateldevs",
        pubDate: "2026-07-28",
        categories: ["Astronomy & Space", "Exploration"],
        thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
        snippet: "Reflections on astrophotography, long exposures, and how managing noise ratio in optics parallels data pipeline optimization.",
        readTime: "8 min read"
    },
    {
        id: "fallback-3",
        title: "Modern React & Tailwind V4: Crafting Zero-Distraction User Interfaces",
        link: "https://medium.com/@princepateldevs",
        pubDate: "2026-06-12",
        categories: ["Frontend Dev", "React", "Design"],
        thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
        snippet: "A deep dive into CSS container queries, subgrid alignment, and minimal design tokens for technical portfolios.",
        readTime: "5 min read"
    },
    {
        id: "fallback-4",
        title: "Extragalactic Surveying: Decoding Celestial Signals",
        link: "https://medium.com/@princepateldevs",
        pubDate: "2026-05-04",
        categories: ["Astronomy & Space", "Data Analysis"],
        thumbnail: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=800&auto=format&fit=crop",
        snippet: "Exploring how space telescopes filter cosmic background radiation and how developers can utilize open celestial API datasets.",
        readTime: "7 min read"
    }
];

const Blog = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedTopic, setSelectedTopic] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [isLiveFeed, setIsLiveFeed] = useState(false);

    useEffect(() => {
        const fetchMediumBlogs = async () => {
            setLoading(true);
            try {
                const response = await fetch(RSS2JSON_API);
                const data = await response.json();

                if (data.status === "ok" && data.items && data.items.length > 0) {
                    const formattedArticles = data.items.map((item, idx) => {
                        // Extract thumbnail from content if not present
                        let thumb = item.thumbnail;
                        if (!thumb || thumb === "") {
                            const imgMatch = item.content ? item.content.match(/<img[^>]+src="([^">]+)"/) : null;
                            thumb = imgMatch ? imgMatch[1] : "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800&auto=format&fit=crop";
                        }

                        // Clean snippet text
                        const cleanText = item.description
                            ? item.description.replace(/<[^>]+>/g, "").slice(0, 140) + "..."
                            : "Click to read full article on Medium.";

                        // Calculate reading time
                        const words = item.content ? item.content.replace(/<[^>]+>/g, "").split(" ").length : 300;
                        const readMins = Math.max(3, Math.ceil(words / 200));

                        return {
                            id: item.guid || `medium-${idx}`,
                            title: item.title,
                            link: item.link,
                            pubDate: item.pubDate ? item.pubDate.split(" ")[0] : new Date().toISOString().split("T")[0],
                            categories: item.categories && item.categories.length > 0 ? item.categories : ["Technology"],
                            thumbnail: thumb,
                            snippet: cleanText,
                            readTime: `${readMins} min read`
                        };
                    });
                    setArticles(formattedArticles);
                    setIsLiveFeed(true);
                } else {
                    setArticles(FALLBACK_ARTICLES);
                }
            } catch (err) {
                console.warn("Could not fetch Medium RSS feed directly, using fallback topics", err);
                setArticles(FALLBACK_ARTICLES);
            } finally {
                setLoading(false);
            }
        };

        fetchMediumBlogs();
    }, []);

    // Collect all topics
    const allTopics = ["All", ...Array.from(new Set(articles.flatMap(a => a.categories)))];

    // Filter articles based on selected topic and search query
    const filteredArticles = articles.filter(article => {
        const matchesTopic = selectedTopic === "All" || article.categories.includes(selectedTopic);
        const matchesSearch = searchQuery === "" ||
            article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.snippet.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.categories.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesTopic && matchesSearch;
    });

    return (
        <main className="max-w-[1280px] mx-auto px-6 pt-28 md:pt-36 pb-16 font-sans min-h-[85vh]">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 border-b border-[#f2f3f3] pb-8">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <span className="bg-[#22252a] text-white text-xs font-semibold px-2.5 py-1 rounded">
                            Medium
                        </span>
                        <span className="text-sm text-gray-500 font-medium">
                            @princepateldevs
                        </span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-[#22252a] tracking-tight mb-2">
                        Articles & Reflections
                    </h1>
                    <p className="text-base text-[#495057] max-w-2xl">
                        Thoughts on astronomy, AI architectures, web software engineering, and scientific exploration.
                    </p>
                </div>

                <a
                    href={MEDIUM_PROFILE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-[#22252a] hover:bg-black px-5 py-2.5 rounded-lg transition-colors shadow-sm self-start md:self-auto"
                >
                    <span>Follow on Medium</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </a>
            </div>

            {/* Filter Bar & Search */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
                {/* Topic Badges Filter */}
                <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
                    {allTopics.slice(0, 6).map((topic, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedTopic(topic)}
                            className={`text-xs font-semibold px-3.5 py-2 rounded-full whitespace-nowrap transition-all duration-200 ${
                                selectedTopic === topic
                                    ? "bg-[#22252a] text-white shadow-sm"
                                    : "bg-gray-100 text-[#495057] hover:bg-gray-200"
                            }`}
                        >
                            {topic}
                        </button>
                    ))}
                </div>

                {/* Search Box */}
                <div className="relative min-w-[240px]">
                    <input
                        type="text"
                        placeholder="Search by topic or keyword..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full text-sm bg-gray-50 border border-gray-200 rounded-lg pl-9 pr-4 py-2 text-[#22252a] focus:outline-none focus:border-[#22252a] transition-colors"
                    />
                    <svg className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
            </div>

            {/* Content Loading / Cards Grid */}
            {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3].map((n) => (
                        <div key={n} className="bg-white border border-[#f2f3f3] rounded-xl p-5 animate-pulse">
                            <div className="w-full h-44 bg-gray-100 rounded-lg mb-4"></div>
                            <div className="h-4 bg-gray-100 rounded w-1/4 mb-3"></div>
                            <div className="h-6 bg-gray-100 rounded w-3/4 mb-2"></div>
                            <div className="h-4 bg-gray-100 rounded w-full mb-1"></div>
                            <div className="h-4 bg-gray-100 rounded w-2/3"></div>
                        </div>
                    ))}
                </div>
            ) : filteredArticles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredArticles.map((article) => (
                        <article
                            key={article.id}
                            className="group bg-white border border-[#e5e7eb] rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                        >
                            <div>
                                {/* Article Image */}
                                <a
                                    href={article.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block relative h-48 overflow-hidden bg-gray-100"
                                >
                                    <img
                                        src={article.thumbnail}
                                        alt={article.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                                        {article.categories.slice(0, 2).map((cat, i) => (
                                            <span key={i} className="bg-black/70 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                                                {cat}
                                            </span>
                                        ))}
                                    </div>
                                </a>

                                {/* Article Body */}
                                <div className="p-6">
                                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                                        <span>{article.pubDate}</span>
                                        <span>•</span>
                                        <span>{article.readTime}</span>
                                    </div>

                                    <h2 className="text-xl font-bold text-[#22252a] group-hover:text-black transition-colors mb-3 line-clamp-2">
                                        <a href={article.link} target="_blank" rel="noopener noreferrer">
                                            {article.title}
                                        </a>
                                    </h2>

                                    <p className="text-sm text-[#495057] line-clamp-3 leading-relaxed mb-4">
                                        {article.snippet}
                                    </p>
                                </div>
                            </div>

                            {/* Read More Card Footer */}
                            <div className="px-6 pb-6 pt-0">
                                <a
                                    href={article.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#22252a] hover:text-black group-hover:translate-x-1 transition-all duration-200"
                                >
                                    <span>Read on Medium</span>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            ) : (
                <div className="text-center py-16 bg-gray-50 rounded-xl border border-[#f2f3f3]">
                    <p className="text-base text-gray-600 font-medium">No articles found matching "{searchQuery}"</p>
                    <button
                        onClick={() => { setSearchQuery(""); setSelectedTopic("All"); }}
                        className="mt-3 text-sm text-[#22252a] font-semibold underline hover:text-black"
                    >
                        Reset filters
                    </button>
                </div>
            )}

            {/* Profile CTA Box */}
            <div className="mt-16 bg-gray-50 border border-[#e5e7eb] rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <h3 className="text-lg font-bold text-[#22252a] mb-1">
                        Read more from Prince Patel on Medium
                    </h3>
                    <p className="text-sm text-[#495057]">
                        Subscribe to get notified whenever new articles on astronomy, computer science, and AI are published.
                    </p>
                </div>
                <a
                    href={MEDIUM_PROFILE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whitespace-nowrap px-6 py-3 bg-[#22252a] text-white text-sm font-semibold rounded-lg hover:bg-black transition-colors"
                >
                    Visit Medium Profile
                </a>
            </div>
        </main>
    );
};

export default Blog;
