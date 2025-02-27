import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { SafeArea } from '../components/SafeArea';

const Events = () => {
  const events = [
    {
      title: "Tech Conference 2024",
      date: "March 15, 2024",
      description: "Speaking about Modern React Development Patterns",
      location: "San Francisco, CA",
    },
    {
      title: "Web Development Workshop",
      date: "April 20, 2024",
      description: "Hosting a workshop on TypeScript and React",
      location: "Online",
    },
  ];

  return (
    <SafeArea className="bg-gradient-to-b from-primary to-white">
      <div className="p-8">
        <h1 className="text-4xl font-bold text-black mb-8">Events & Talks</h1>
        <div className="grid gap-6">
          {events.map((event, index) => (
            <div key={index} className="glass p-6 hover-scale">
              <div className="flex items-start gap-4">
                <Calendar className="w-6 h-6 text-accent" />
                <div>
                  <h2 className="text-2xl font-semibold text-black mb-2">{event.title}</h2>
                  <p className="text-accent mb-2">{event.date}</p>
                  <p className="text-secondary mb-2">{event.description}</p>
                  <p className="text-secondary/80">{event.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SafeArea>
  );
};

export default Events;
