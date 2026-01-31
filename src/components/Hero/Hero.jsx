import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center relative z-10 px-4">
            <div className="text-center">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-accent-cyan font-mono text-lg mb-4"
                >
                    Hello, I am
                </motion.p>

                <motion.h1
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-6xl md:text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-white to-accent-purple"
                >
                    Prince Patel
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-xl md:text-2xl text-secondary max-w-2xl mx-auto"
                >
                    <span className="font-mono text-accent-green">&lt;Code&gt;</span>
                    Building  digital experiences with precision and passion.
                    <span className="font-mono text-accent-green">&lt;/Code&gt;</span>
                </motion.div>


                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="mt-12 flex gap-6 justify-center"
                >
                    <Link to="projects" smooth={true} duration={500} offset={-50}>
                        <button className="px-8 py-3 bg-transparent border border-accent-cyan text-accent-cyan hover:bg-accent-cyan/10 transition-all rounded-sm font-mono uppercase tracking-widest text-sm relative group overflow-hidden cursor-pointer">
                            <span className="relative z-10">View Work</span>
                            <div className="absolute inset-0 h-full w-full bg-accent-cyan/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                        </button>
                    </Link>

                    <Link to="contact" smooth={true} duration={500}>
                        <button className="px-8 py-3 bg-accent-purple text-white hover:bg-accent-purple/90 transition-all rounded-sm font-mono uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(181,55,242,0.5)] cursor-pointer">
                            Contact Me
                        </button>
                    </Link>
                </motion.div>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-secondary"
            >
                <span className="text-sm font-mono">Scroll Down</span>
            </motion.div>
        </section>
    );
};

export default Hero;
