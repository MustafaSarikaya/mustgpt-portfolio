import { ChatFlow } from '../components/ChatFlow';
import { getText } from '../utils/dictionary';

const About = () => {
  return (
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
  );
};

export default About;
