import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Database, Globe } from 'lucide-react';
import { useGitHub } from '../../hooks/useGitHub';

const StatCard = ({ icon: Icon, value, label, delay }) => (
    <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay, type: "spring" }}
        className="bg-surface/30 p-4 rounded-lg border border-white/5 flex flex-col items-center gap-2 hover:bg-surface/50 transition-colors"
    >
        <Icon className="text-accent-cyan" size={24} />
        <span className="text-2xl font-bold font-mono text-white">{value}</span>
        <span className="text-xs text-secondary uppercase tracking-wider">{label}</span>
    </motion.div>
);

const About = () => {
    const { profile } = useGitHub('princewritecode'); // Ensure consistent username usage

    return (
        <section className="py-20 px-4 max-w-7xl mx-auto relative z-10" id="about">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="relative group w-64 h-64 mx-auto md:mx-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity animate-pulse"></div>
                        <div className="relative h-full w-full bg-surface rounded-2xl overflow-hidden border-2 border-white/10">
                            {profile?.avatar_url ? (
                                <img src={profile.avatar_url} alt="Profile" className="w-full h-full object-cover" />
                            ) : (
                                <div className="flex items-center justify-center h-full text-secondary">
                                    <User size={48} />
                                </div>
                            )}
                        </div>
                    </div>
                </motion.div>

                <div className="space-y-6">
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold mb-4 flex items-center gap-4">
                            <span className="text-accent-green font-mono text-2xl">01.</span>
                            About Me
                        </h2>
                        <p className="text-secondary leading-relaxed">
                            {profile?.bio || "A passionate and enthusiastic programmer, having an appetite to learn and explore new things. Interested in full-time opportunities as a Software Engineer."}
                        </p>
                        <p className="text-secondary leading-relaxed mt-4">
                            Based in Indore, India, I specialize in building exceptional digital experiences with modern web technologies. My journey includes working with companies like Brightchamps, Codingal, and Infosys, where I honed my skills in creating accessible, human-centered products.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-3 gap-4">
                        <StatCard icon={Code} value={profile?.public_repos} label="Repos" delay={0.2} />
                        <StatCard icon={Globe} value={profile?.followers} label="Followers" delay={0.3} />
                        <StatCard icon={Database} value="3+" label="Years" delay={0.4} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
