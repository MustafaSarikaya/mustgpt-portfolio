import { ChatFlow } from './../components/ChatFlow';
import { Card } from './../components/Card';
import { Link } from 'react-router-dom';
import { SafeArea } from '../components/SafeArea';
import { CardItems } from '../types/CardItems';
import { getText } from '../utils/dictionary';

const Projects = () => {
  const projects : CardItems[] = getText('pages.projects.items').map(item => ({
    ...item,
    image: "https://via.placeholder.com/150x150"
  }));

  return (
    <SafeArea className="bg-gradient-to-b from-primary to-white">
      <ChatFlow title={getText('pages.projects.title')}> 
        <Card items={projects} />
      </ChatFlow>
    </SafeArea>
  );
};

export default Projects;
