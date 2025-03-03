import { ChatFlow } from '../components/ChatFlow';
import { getText } from '../utils/dictionary';

const About = () => {
  return (
    <div className="bg-gradient-to-b from-primary to-white">
      <ChatFlow title={getText('pages.about.title')}>
        <div>
          <p className="text-lg mb-6">
            {getText('pages.about.content.intro')}
          </p>
          <p className="text-lg mb-6">
            {getText('pages.about.content.expertise')}
          </p>
        </div>
      </ChatFlow>
    </div>
  );
};

export default About;
