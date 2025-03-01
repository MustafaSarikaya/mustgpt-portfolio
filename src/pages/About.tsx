import { ChatFlow } from '../components/ChatFlow';
import { SafeArea } from '../components/SafeArea';

const About = () => {
  return (
    <SafeArea className="bg-gradient-to-b from-primary to-white">
      <ChatFlow title="About Me">
        <div >
          <p className="text-lg mb-6">
            Hi, I'm John Doe, a passionate software engineer with expertise in web development
            and a love for creating intuitive user experiences.
          </p>
          <p className="text-lg mb-6">
            I specialize in React, TypeScript, and modern web technologies, always striving
            to build performant and accessible applications.
          </p>
        </div>
      </ChatFlow>
    </SafeArea>
  );
};

export default About;
