import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { SafeArea } from '../components/SafeArea';
import { ChatFlow } from './../components/ChatFlow';
import { Card } from './../components/Card';
import { CardItems } from './../types/CardItems';

const Events = () => {
  const events : CardItems[] = [
    {
      title: "Tech Conference 2024",
      description: "Speaking about Modern React Development Patterns",
      tag: ["March 15, 2024", "San Francisco, CA"],
      image: "https://via.placeholder.com/150x150"
    },
    {
      title: "Web Development Workshop",
      description: "Hosting a workshop on TypeScript and React",
      tag: ["April 20, 2024", "San Francisco, CA"],
      image: "https://via.placeholder.com/150x150"
    },
  ];

  return (
    <SafeArea className="bg-gradient-to-b from-primary to-white">
      <ChatFlow title = "What events and activities Mustafa joined recently?"> 
        <Card items={events}  />
      </ChatFlow>
    </SafeArea>
  );
};

export default Events;
