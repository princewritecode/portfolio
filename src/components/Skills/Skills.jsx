import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Three.js", "Framer Motion"] },
    { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "GraphQL", "Redis"] },
    { category: "Tools", items: ["Git", "Docker", "AWS", "Figma", "Vite"] },
];

const Skills = () => {
    return (
        <section className="py-20 px-4 max-w-7xl mx-auto relative z-10" id="skills">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="mb-12 text-center"
            >
                <h2 className="text-4xl font-bold mb-4">
                    <span className="text-accent-green font-mono text-2xl mr-2">03.</span>
                    Tech Stack
                </h2>
                <div className="h-1 w-20 bg-accent-purple mx-auto rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {skills.map((group, groupIndex) => (
                    <motion.div
                        key={group.category}
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: groupIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-surface/20 border border-white/5 p-6 rounded-xl hover:border-accent-cyan/30 transition-all"
                    >
                        <h3 className="text-xl font-bold mb-6 text-accent-cyan border-b border-white/10 pb-2">{group.category}</h3>
                        <div className="flex flex-wrap gap-3">
                            {group.items.map((tech, i) => (
                                <motion.span
                                    key={tech}
                                    whileHover={{ scale: 1.05 }}
                                    className="px-3 py-1 bg-white/5 rounded-full text-sm font-mono text-secondary hover:text-white hover:bg-accent-purple/20 transition-colors cursor-default"
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
