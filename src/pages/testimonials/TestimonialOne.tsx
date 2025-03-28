import { ChatFlow } from '../../components/ChatFlow';
import { getText } from '../../utils/dictionary';

const TestimonialOne = () => {
  return (
    <ChatFlow title={getText('pages.testimonials.one.title')}>
      <div>
        <p className="text-lg text-gray-700">
          {getText('pages.testimonials.one.mainQuote')}
        </p>
        <div className="border-l-4 border-accent pl-4">
          <p className="text-gray-600 italic">
            {getText('pages.testimonials.one.highlightedQuote')}
          </p>
        </div>
        <div className="mt-8">
          <p className="font-semibold">{getText('pages.testimonials.one.author.name')}</p>
          <p className="text-gray-500">{getText('pages.testimonials.one.author.title')}</p>
        </div>
      </div>
    </ChatFlow>
  );
};

export default TestimonialOne;
