import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const navLinks = [
        { name: "Updates", url: "/updates" },
        { name: "Blog", url: "/blog" },
        { name: "My Art", url: "/art" },
        { name: "CV", url: "/cv" },
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
            className={`fixed top-0 left-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-[#f2f3f3] font-sans transition-transform duration-300 ease-in-out ${
                isVisible ? "translate-y-0" : "-translate-y-full"
            }`}
        >
            <div className="max-w-[1280px] mx-auto px-6 py-5">
                <nav className="flex items-center justify-between" aria-label="Main Navigation">

                    {/* Left Section: Brand Title + Desktop Links */}
                    <div className="flex items-center gap-8">
                        {/* Site Title / Brand */}
                        <Link
                            to="/"
                            className="relative text-[1.125rem] font-bold text-[#22252a] py-1 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-[#22252a] after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100"
                        >
                            Prince Patel
                        </Link>

                        {/* Desktop Navigation Links */}
                        <ul className="hidden md:flex items-center gap-6 list-none m-0 p-0">
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink
                                        to={link.url}
                                        className={({ isActive }) =>
                                            `relative text-base font-semibold py-1 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-black after:transition-transform after:duration-300 after:ease-out ${
                                                isActive
                                                    ? "text-black after:scale-x-100"
                                                    : "text-[#495057] hover:text-black after:scale-x-0 hover:after:scale-x-100"
                                            }`
                                        }
                                    >
                                        {link.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Mobile Hamburger Button */}
                    <button
                        type="button"
                        className="md:hidden text-[#22252a] text-2xl focus:outline-none p-1"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-expanded={isMenuOpen}
                        aria-label="Toggle navigation menu"
                    >
                        {isMenuOpen ? "✕" : "☰"}
                    </button>
                </nav>

                {/* Mobile Dropdown Menu */}
                {isMenuOpen && (
                    <ul className="md:hidden flex flex-col gap-3 mt-3 pt-3 border-t border-[#f2f3f3] list-none p-0 m-0">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink
                                    to={link.url}
                                    className={({ isActive }) =>
                                        `block text-base font-semibold py-2 px-1 transition-colors duration-200 ${
                                            isActive
                                                ? "text-black font-bold bg-gray-50 rounded"
                                                : "text-[#495057] hover:text-black"
                                        }`
                                    }
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </header>
    );
};

export default Header;