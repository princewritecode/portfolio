import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import BrickWall from './components/Three/BrickWall';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="relative w-full text-primary bg-background selection:bg-accent-cyan/30">
      {/* 3D Background */}
      <div className="fixed inset-0 z-0 h-screen w-full">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }} gl={{ antialias: true, alpha: true }}>
          <Suspense fallback={null}>
            <BrickWall />
          </Suspense>
        </Canvas>
      </div>

      {/* Main Content */}
      <main className="relative z-10 w-full overflow-hidden">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />

        {/* Footer spacer */}
        <section className="py-10 text-center text-sm text-secondary">
          <p>Built with React + Vite + Three.js</p>
        </section>
      </main>
    </div>
  );
}

export default App;
