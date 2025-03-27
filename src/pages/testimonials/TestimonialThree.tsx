import { ChatFlow } from '../../components/ChatFlow';
import { getText } from '../../utils/dictionary';

const TestimonialThree = () => {
  return (
    <ChatFlow title={getText('pages.testimonials.three.title')}>
      <div >
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
  );
};

export default TestimonialThree;
