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
    <div className="bg-primary w-full">
      <ChatFlow title={getText('pages.events.title')}> 
        <Card items={events} />
      </ChatFlow>
    </div>
  );
};

export default Events;
