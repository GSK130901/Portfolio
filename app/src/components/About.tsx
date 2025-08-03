import React from 'react';
import { Code, Palette, Server, Smartphone } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            About Me
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate M.Tech graduate Looking for a challenging career which will demand the 
            best of my professional ability in terms of technical and analytical skills 
            and helps me in enhancing my current skills and knowledge.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;