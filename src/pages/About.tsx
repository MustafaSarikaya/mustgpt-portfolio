import { Link } from 'react-router-dom';
import { SafeArea } from '../components/SafeArea';

const About = () => {
  return (
    <SafeArea className="bg-gradient-to-b from-primary to-white">
      <div className="p-8">
        

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
    </SafeArea>
  );
};

export default About;
