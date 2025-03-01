import { ChatFlow } from './../components/ChatFlow';
import { Card } from './../components/Card';
import { Link } from 'react-router-dom';
import { SafeArea } from '../components/SafeArea';
import { CardItems } from '../types/CardItems';

const Projects = () => {
  const projects : CardItems[]  = [
    {
      title: "Project One",
      description: "A React-based web application for task management",
      tag: ["React", "TypeScript", "Tailwind CSS"],
      image: "https://via.placeholder.com/150x150"
    },
    {
      title: "Project The Second",
      description: "Real-time chat application with WebSocket integration",
      tag: ["Next.js", "Socket.io", "PostgreSQL"],
      image: "https://via.placeholder.com/150x150"
    },
  ];

  return (
    <SafeArea className="bg-gradient-to-b from-primary to-white">
      <ChatFlow title = "What projects Mustafa worked on recently?"> 
        <Card items={projects}  />
      </ChatFlow>
    </SafeArea>
  );
};

export default Projects;
