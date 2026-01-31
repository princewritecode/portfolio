import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

const Contact = () => {
    return (
        <section className="py-20 px-4 max-w-4xl mx-auto relative z-10" id="contact">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-surface/30 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 text-center"
            >
                <h2 className="text-4xl font-bold mb-6 text-white">Let's Work Together</h2>
                <p className="text-secondary mb-10 text-lg">
                    Have a project in mind or just want to say hi? I'm always open to discussing new ideas and opportunities.
                </p>

                <a
                    href="mailto:princepatelpp@example.com"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-accent-purple text-white rounded-lg font-bold hover:bg-accent-purple/80 transition-all shadow-[0_0_20px_rgba(181,55,242,0.3)] hover:shadow-[0_0_30px_rgba(181,55,242,0.5)] mb-12"
                >
                    <Mail size={20} />
                    Say Hello
                </a>

                <div className="flex justify-center gap-8">
                    <a href="#" className="text-secondary hover:text-accent-cyan transition-colors transform hover:scale-110">
                        <Github size={24} />
                    </a>
                    <a href="#" className="text-secondary hover:text-accent-cyan transition-colors transform hover:scale-110">
                        <Linkedin size={24} />
                    </a>
                    <a href="#" className="text-secondary hover:text-accent-cyan transition-colors transform hover:scale-110">
                        <Twitter size={24} />
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
