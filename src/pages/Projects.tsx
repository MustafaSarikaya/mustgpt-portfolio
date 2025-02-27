import { Link } from 'react-router-dom';
import { SafeArea } from '../components/SafeArea';

const Projects = () => {
  const projects = [
    {
      title: "Project One",
      description: "A React-based web application for task management",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      image: "https://via.placeholder.com/150x150"
    },
    {
      title: "Project The Second",
      description: "Real-time chat application with WebSocket integration",
      tech: ["Next.js", "Socket.io", "PostgreSQL"],
      image: "https://via.placeholder.com/150x150"
    },
  ];

  return (
    <SafeArea className="bg-gradient-to-b from-primary to-white">
      
      <div className="p-8 space-y-6">
        {/* User Message */}
        <div className="flex justify-end">
          <div className="bg-primary-dark rounded-lg p-4 max-w-[80%] shadow-md">
            <h1 className="text-2xl font-semibold text-secondary">Projects</h1>
          </div>
        </div>

        {/* AI Response */}
        <div className="flex justify-end">
          <div className="bg-secondary-light p-8 rounded-lg shadow-md max-w-[80%]">
            <div className="space-y-8">
              {projects.map((project, index) => (
                <div key={index}>
                  {index > 0 && <hr className="border-primary-dark my-8" />}
                  <div className="flex gap-6 items-start">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-32 h-32 rounded-lg object-cover shadow-md"
                    />
                    <div className="flex-1">
                      <h2 className="text-2xl font-semibold text-secondary mb-2">{project.title}</h2>
                      <p className="text-secondary mb-4">{project.description}</p>
                      <div className="flex gap-2 flex-wrap">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-primary-dark text-secondary px-3 py-1 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SafeArea>
  );
};

export default Projects;
