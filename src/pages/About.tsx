
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-white p-8">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="text-accent hover:text-accent-light mb-8 inline-block">
          ← Back to Search
        </Link>
        <h1 className="text-4xl font-bold text-black mb-8">About Me</h1>
        <div className="glass p-8">
          <p className="text-lg mb-6">
            Hi, I'm John Doe, a passionate software engineer with expertise in web development
            and a love for creating intuitive user experiences.
          </p>
          <p className="text-lg mb-6">
            I specialize in React, TypeScript, and modern web technologies, always striving
            to build performant and accessible applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
