import React, { useState, useEffect } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const navLinks = [
        { name: "Updates", url: "#" },
        { name: "Blog", url: "#" },
        { name: "My Art", url: "#" },
        { name: "CV", url: "#" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Keep header visible near the top of the page
            if (currentScrollY < 10) {
                setIsVisible(true);
            }
            // Hide on scroll down, show on scroll up (unless mobile menu is open)
            else if (!isMenuOpen) {
                if (currentScrollY > lastScrollY) {
                    setIsVisible(false); // Scrolling down
                } else {
                    setIsVisible(true);  // Scrolling up
                }
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY, isMenuOpen]);

    return (
        <header
            className={`fixed top-0 left-0 z-50 w-full bg-white border-b border-[#f2f3f3] font-sans transition-transform duration-300 ease-in-out ${
                isVisible ? "translate-y-0" : "-translate-y-full"
            }`}
        >
            <div className="max-w-[1280px] mx-auto px-6 py-6">
                <nav className="flex items-center justify-between" aria-label="Main Navigation">

                    {/* Left Section: Brand Title + Desktop Links */}
                    <div className="flex items-center gap-8">
                        {/* Site Title / Brand with Animated Underline */}
                        <a
                            href="#"
                            className="relative text-[1.125rem] font-bold text-[#22252a] py-1 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-[#22252a] after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100"
                        >
                            Prince Patel
                        </a>

                        {/* Desktop Navigation Links with Animated Underline */}
                        <ul className="hidden md:flex items-center gap-6 list-none m-0 p-0">
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.url}
                                        className="relative text-base font-semibold text-[#495057] hover:text-black py-1 transition-colors duration-200 decoration-0 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-black after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Mobile Hamburger Button */}
                    <button
                        type="button"
                        className="md:hidden text-[#22252a] text-2xl focus:outline-none"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-expanded={isMenuOpen}
                        aria-label="Toggle navigation menu"
                    >
                        &#9776;
                    </button>
                </nav>

                {/* Mobile Dropdown Menu */}
                {isMenuOpen && (
                    <ul className="md:hidden flex flex-col gap-3 mt-3 pt-3 border-t border-[#f2f3f3] list-none p-0 m-0">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.url}
                                    className="block text-base font-semibold text-[#495057] hover:text-black transition-colors duration-200"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </header>
    );
};

export default Header;