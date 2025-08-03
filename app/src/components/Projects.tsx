import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform built with React.js. Features include  filtering, shopping cart functionality user accounts, wishlist.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React.js"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Deepfake Video Detection",
      description: "A Django web application to provide an easy-to-use interface to detect manipulated videos through a deep learning algorithm trained on labeled video datasets.",
      image: "https://www.fraunhofer.sg/en/about/solutions/deepfakes-/jcr:content/stage/stageParsys/stage_slide/image.img.jpg/1649333798000/bluish-deepfakes.jpg",
      technologies: ["Django", "python", "Pytorch"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Motion Detection Alarm",
      description: "A motion detection software using Python and OpenCV for real-time object tracking and detection through camera feeds in Visual Studio Code.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgiwvfFQyR7VvYiw_kIrovqUhqzIy0wtBLcw&s",
      technologies: ["OpenCV", "Python"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Detecting audio attention using EEG",
      description: " a machine learning model with Python, TensorFlow and Keras to precisely decode listener attention from EEG signals in noisy conditions..",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp5IN-LIk1dlBP_zUVwWye-E3nAjp9XqmX8w&s",
      technologies: ["python", "EEG"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Here are some of my recent projects that showcase my skills.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={project.liveUrl}
                    className="bg-white/90 hover:bg-white p-2 rounded-lg transition-colors duration-200"
                  >
                    <ExternalLink size={18} className="text-slate-700" />
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="bg-white/90 hover:bg-white p-2 rounded-lg transition-colors duration-200"
                  >
                    <Github size={18} className="text-slate-700" />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-md text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;