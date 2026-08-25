import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header.jsx";
import Body from "./Components/Body.jsx";
import Updates from "./Components/Updates.jsx";
import Blog from "./Components/Blog.jsx";
import Art from "./Components/Art.jsx";
import CV from "./Components/CV.jsx";
import Footer from "./Components/Footer.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <div className="min-h-screen bg-white flex flex-col justify-between selection:bg-[#22252a] selection:text-white font-sans text-[#333333]">
                <Header />
                <div className="flex-1">
                    <Routes>
                        <Route path="/" element={<Body />} />
                        <Route path="/updates" element={<Updates />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/art" element={<Art />} />
                        <Route path="/cv" element={<CV />} />
                        <Route path="*" element={<Body />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;