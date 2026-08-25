import React from "react";

const Body = () =>
{
    const socialLinks = [

        { name: "GitHub", url: "https://github.com", icon: "github" },
        { name: "YouTube", url: "https://youtube.com", icon: "youtube" },

        { name: "LinkedIn", url: "https://www.linkedin.com/in/princepatelbuild", icon: "linkedin" },
        { name: "Email", url: "mailto:princeppatel.work@gmail.com", icon: "email" },
    ];

    return (
        <main className="max-w-[1280px] mx-auto px-6 pt-28 md:pt-36 pb-12 font-sans">
            <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-start">

                {/* LEFT SIDEBAR: Made sticky with `md:sticky md:top-36` */}
                <aside className="w-full md:w-64 flex-shrink-0 flex flex-col items-center md:items-start md:sticky md:top-36 self-start">
                    {/* Profile Picture */}
                    <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border border-gray-200 shadow-sm mb-5">
                        <img
                            src="https://media.licdn.com/dms/image/v2/D4E03AQHt2qOfsVzYag/profile-displayphoto-scale_400_400/B4EZ_c98dXHoAg-/0/1786118656224?e=1788998400&v=beta&t=HDz272UlJfApm8kKvYHOPW2lBgo1oMFKvQ1NFPI3-mA"
                            alt="Prince Patel"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Name & Location */}
                    <h1 className="text-2xl font-bold text-[#22252a] mb-1 text-center md:text-left">
                        Prince Patel
                    </h1>
                    <p className="text-sm text-[#495057] mb-6 text-center md:text-left">
                        Frontend Developer / Researcher
                        <br />
                        <span className="text-gray-500">India</span>
                    </p>

                    {/* Social Links List */}
                    <div className="w-full border-t border-[#f2f3f3] pt-4">
                        <ul className="flex flex-col gap-2.5 list-none p-0 m-0 w-full">
                            {socialLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 text-sm font-medium text-[#495057] hover:text-black transition-colors"
                                    >
                                        <SocialIcon type={link.icon} />
                                        <span>{link.name}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>

                {/* RIGHT COLUMN: Scrolls naturally alongside sticky sidebar */}
                <section className="flex-1 text-[#333333] leading-relaxed">
                    <div className="space-y-4 mb-8">
                        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#22252a] tracking-tight mb-6">
                            Bio
                        </h1>
                        <p className="text-lg text-[#22252a] font-normal">
                            I am a Frontend Developer currently expanding my expertise into Backend Technologies, actively seeking exciting opportunities to build, learn, and collaborate.
                        </p>
                        <p className="text-base text-[#495057]">
                            <strong>Current Focus.</strong> I am independently researching and developing adaptive AI teaching assistants designed to personalize learning based on real-time student behavior while dramatically reducing response latency.
                        </p>
                        <p className="text-base text-[#495057]">
                            <strong>Academic Background.</strong> I hold a Bachelor of Engineering (B.E.) in Computer Science. My background in building responsive web systems serves as the foundation for my work in full-stack architecture and real-time AI integration.
                        </p>
                        <p className="text-base text-[#495057]">
                            <strong>Exploration & Writing.</strong> Beyond software, I am an avid high-altitude trekker and have completed 5+ treks above 5,000 meters. I am also deeply passionate about astronomy and space technology, regularly writing blogs to share my perspectives on celestial discoveries and space exploration.
                        </p>
                    </div>

                    <hr className="border-[#f2f3f3] my-8" />

                    {/* Research Interest Section */}
                    <div className="mb-10">
                        <h2 className="text-xl font-bold text-[#22252a] mb-4">Research Interest</h2>
                        <p className="text-base text-[#495057] mb-4">
                            What drives my research is the vision of making personalized education universally accessible through intelligent, zero-latency digital tutors. Traditional educational tools often fail to adapt to individual student learning curves and emotional engagement.
                        </p>
                        <p className="text-base text-[#495057]">
                            My approach focuses on rethinking — (1) real-time behavioral modeling to adapt pedagogical strategies dynamically, and (2) low-latency system architecture to make interaction seamlessly responsive. By combining full-stack development with adaptive AI models, I aim to create teaching assistants that feel as intuitive and responsive as a human mentor.
                        </p>
                    </div>

                    <hr className="border-[#f2f3f3] my-8" />

                    {/* Selected Work / Projects Section */}
                    <div>
                        <h2 className="text-xl font-bold text-[#22252a] mb-6">
                            Selected Projects
                        </h2>

                        <div className="space-y-8">
                            <article className="group p-5 -mx-5 rounded-lg hover:bg-gray-50/80 transition-all border border-transparent hover:border-gray-100">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1.5">
                                    <h3 className="text-lg font-semibold text-[#22252a] group-hover:text-blue-600 transition-colors">
                                        <a href="#" className="hover:underline">
                                            Interactive Learning Platform & Code Visualizer
                                        </a>
                                    </h3>

                                    {/* Links / Action Badges */}
                                    <div className="flex items-center gap-3 text-xs font-semibold">
                                        <a
                                            href="#"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                                        >
                                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                            Live Demo
                                        </a>
                                        <a
                                            href="https://github.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                                        >
                                            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                            </svg>
                                            GitHub
                                        </a>
                                    </div>
                                </div>

                                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                                    EdTech Platform • Full Stack / JavaScript Engine
                                </p>
                                <p className="text-sm text-[#495057] leading-relaxed">
                                    An end-to-end learning suite featuring interactive developer roadmaps, real-time topic tracking, and remaining progress analytics. Integrated an in-browser JavaScript execution visualizer to help students intuitively understand call stacks, memory allocation, and line-by-line execution logic.
                                </p>
                            </article>

                            {/* Project 2: MovieLux */}
                            <article className="group p-5 -mx-5 rounded-lg hover:bg-gray-50/80 transition-all border border-transparent hover:border-gray-100">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1.5">
                                    <h3 className="text-lg font-semibold text-[#22252a] group-hover:text-blue-600 transition-colors">
                                        <a href="#" className="hover:underline">
                                            MovieLux
                                        </a>
                                    </h3>

                                    {/* Links / Action Badges */}
                                    <div className="flex items-center gap-3 text-xs font-semibold">
                                        <a target={'new'}
                                            href="https://movielux-beta.vercel.app/"
                                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                                        >
                                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                            Live Demo
                                        </a>
                                        <a
                                            href="https://github.com/princewritecode/movielux"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                                        >
                                            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                            </svg>
                                            GitHub
                                        </a>
                                    </div>
                                </div>

                                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                                    Movie & Entertainment Discovery Web App • Frontend
                                </p>
                                <p className="text-sm text-[#495057] leading-relaxed">
                                    A high-performance media discovery portal with rich visual UI, real-time query filtering, and interactive movie trailers driven by RESTful API integration.
                                </p>
                            </article>
                        </div>
                    </div>
                </section>

            </div>
        </main>
    );
};

/* SVG Icons helper component */
const SocialIcon = ({ type }) =>
{
    const iconClass = "w-4 h-4 fill-current text-gray-600";

    switch (type)
    {

        case "github":
            return (
                <svg className={iconClass} viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
            );
        case "youtube":
            return (
                <svg className={iconClass} viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
            );

        case "linkedin":
            return (
                <svg className={iconClass} viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            );
        case "email":
            return (
                <svg className={iconClass} viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
            );
        default:
            return null;
    }
};

export default Body;