import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { SafeArea } from '../components/SafeArea';
import { ChatFlow } from './../components/ChatFlow';
import { Card } from './../components/Card';
import { CardItems } from './../types/CardItems';
import { getText } from '../utils/dictionary';

const Events = () => {
  const events : CardItems[] = getText('pages.events.items').map(item => ({
    ...item,
    image: "https://via.placeholder.com/150x150"
  }));

  return (
    <SafeArea className="bg-gradient-to-b from-primary to-white">
      <ChatFlow title={getText('pages.events.title')}> 
        <Card items={events} />
      </ChatFlow>
    </SafeArea>
  );
};

export default Events;
