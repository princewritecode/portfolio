import React, { useRef, useState } from 'react';
import { useGitHub } from '../../hooks/useGitHub';
import { mockProjects } from '../../data/mockProjects';
import { motion } from 'framer-motion';
import { Star, GitFork, Github, ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ repo, index }) => {
    const divRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        if (!divRef.current) return;
        const div = divRef.current;
        const rect = div.getBoundingClientRect();

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    // Click handler to open Vercel link (homepage) or falls back to Repo
    const handleClick = (e) => {
        // Prevent navigation if clicking specific inner buttons like the GitHub icon
        if (e.target.closest('.github-link')) return;

        const targetUrl = repo.homepage || repo.html_url;
        if (targetUrl) {
            window.open(targetUrl, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <motion.div
            ref={divRef}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onMouseMove={handleMouseMove}
            onClick={handleClick}
            className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-xl border border-white/10 bg-surface/50 shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-accent-cyan/20"
        >
            {/* Spotlight Gradient */}
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(0, 247, 255, 0.15), transparent 40%)`,
                }}
            />

            {/* Content Container */}
            <div className="relative flex flex-col h-full p-8 z-10 w-full">
                <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="p-3 bg-white/5 rounded-lg border border-white/10 group-hover:border-accent-cyan/30 transition-colors">
                        <ArrowUpRight className="text-accent-cyan" size={24} />
                    </div>

                    <div className="flex gap-3">
                        <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="github-link p-2 text-secondary hover:text-white hover:bg-white/10 rounded-full transition-all"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Github size={20} />
                        </a>
                    </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent-cyan transition-colors">
                    {repo.name.split('-').join(' ')}
                </h3>

                <p className="text-secondary mb-8 flex-grow leading-relaxed">
                    {repo.description || "A cutting-edge project built with modern technologies."}
                </p>

                <div className="flex items-center justify-between text-sm mt-auto border-t border-white/5 pt-6">
                    <div className="flex gap-3 flex-wrap">
                        {repo.topics?.slice(0, 3).map(topic => (
                            <span key={topic} className="text-accent-purple/80 font-mono text-xs uppercase tracking-wide">
                                #{topic}
                            </span>
                        )) || <span className="text-accent-purple/80 font-mono text-xs uppercase tracking-wide">#{repo.language}</span>}
                    </div>

                    <div className="flex gap-4 text-secondary/60 font-mono text-xs">
                        <span className="flex items-center gap-1.5">
                            <Star size={14} className="text-yellow-500/80" />
                            {repo.stargazers_count}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <GitFork size={14} className="text-blue-500/80" />
                            {repo.forks_count}
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const { repos, loading } = useGitHub('princewritecode');

    // Use mock data if repos is empty or nil
    // We assume if 0 repos are returned, we fallback to mock
    const displayRepos = (repos && repos.length > 0) ? repos : mockProjects;

    // We still filter mocks same way to ensure consistency, though mocks are already clean
    // Check for exact matches or normalized variations
    const allowedProjects = ['movieapp', 'safar', 'product'];
    // User requested "product find app" and "movieapp". "safar" was a previous verified one, but they said "rest delete".
    // "product find" likely maps to "product-find" or similar.

    // Strict filtering based on user request:
    const featuredRepos = displayRepos
        .filter(repo => {
            const name = repo.name.toLowerCase().replace(/[-_]/g, ' ');
            return name.includes('movieapp') || name.includes('product find');
        })
        .sort((a, b) => b.stargazers_count - a.stargazers_count);

    if (loading && displayRepos === mockProjects) {
        // If authentic loading is happening but we have mock data, we could show loading
        // But typically we just want to show something. 
        // Let's show loading only if we really have NOTHING.
        // Actually useGitHub initializes with empty array, so checks below handle it.
    }

    return (
        <section className="py-24 px-4 max-w-7xl mx-auto relative z-10" id="projects">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="mb-20 text-center"
            >
                <h2 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-purple inline-block">
                    Selected Work
                </h2>
                <p className="text-secondary text-lg max-w-2xl mx-auto">
                    A showcase of my recent technical endeavors and experiments.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredRepos.map((repo, i) => (
                    <ProjectCard key={repo.id || i} repo={repo} index={i} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
