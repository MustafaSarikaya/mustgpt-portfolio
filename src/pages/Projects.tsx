
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      title: "Project One",
      description: "A React-based web application for task management",
      tech: ["React", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Project Two",
      description: "Real-time chat application with WebSocket integration",
      tech: ["Next.js", "Socket.io", "PostgreSQL"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-white p-8">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="text-accent hover:text-accent-light mb-8 inline-block">
          ← Back to Search
        </Link>
        <h1 className="text-4xl font-bold text-black mb-8">Projects</h1>
        <div className="grid gap-6">
          {projects.map((project, index) => (
            <div key={index} className="glass p-6 hover-scale">
              <h2 className="text-2xl font-semibold text-black mb-2">{project.title}</h2>
              <p className="text-secondary mb-4">{project.description}</p>
              <div className="flex gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
