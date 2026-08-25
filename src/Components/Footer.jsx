import React from "react";

const Footer = () => {
    return (
        <footer className="w-full border-t border-[#f2f3f3] bg-white py-8 mt-16 font-sans">
            <div className="max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-[#6c757d]">
                    © {new Date().getFullYear()} Prince Patel. All rights reserved.
                </p>
                <div className="flex items-center gap-6 text-sm text-[#495057]">
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-black transition-colors"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/princepatelbuild"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-black transition-colors"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://medium.com/@princepateldevs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-black transition-colors"
                    >
                        Medium
                    </a>
                    <a
                        href="mailto:princeppatel.work@gmail.com"
                        className="hover:text-black transition-colors"
                    >
                        Email
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
