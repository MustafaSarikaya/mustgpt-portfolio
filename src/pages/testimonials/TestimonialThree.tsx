import { ChatFlow } from '../../components/ChatFlow';
import { getText } from '../../utils/dictionary';

const TestimonialThree = () => {
  return (
    <div className="bg-gradient-to-b from-primary to-white">
      <ChatFlow title={getText('pages.testimonials.three.title')}>
        <div className="space-y-6">
          <p className="text-lg text-gray-700">
            {getText('pages.testimonials.three.mainQuote')}
          </p>
          <div className="border-l-4 border-accent pl-4">
            <p className="text-gray-600 italic">
              {getText('pages.testimonials.three.highlightedQuote')}
            </p>
          </div>
          <div className="mt-8">
            <p className="font-semibold">{getText('pages.testimonials.three.author.name')}</p>
            <p className="text-gray-500">{getText('pages.testimonials.three.author.title')}</p>
          </div>
        </div>
      </ChatFlow>
    </div>
  );
};

export default TestimonialThree;
