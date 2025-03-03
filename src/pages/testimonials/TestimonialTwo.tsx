import React from 'react';
import { SafeArea } from '../../components/SafeArea';
import { ChatFlow } from '../../components/ChatFlow';
import { getText } from '../../utils/dictionary';

const TestimonialTwo = () => {
  return (
    <SafeArea className="bg-gradient-to-b from-primary to-white">
      <ChatFlow title={getText('pages.testimonials.two.title')}>
        <div className="space-y-6">
          <p className="text-lg text-gray-700">
            {getText('pages.testimonials.two.mainQuote')}
          </p>
          <div className="border-l-4 border-accent pl-4">
            <p className="text-gray-600 italic">
              {getText('pages.testimonials.two.highlightedQuote')}
            </p>
          </div>
          <div className="mt-8">
            <p className="font-semibold">{getText('pages.testimonials.two.author.name')}</p>
            <p className="text-gray-500">{getText('pages.testimonials.two.author.title')}</p>
          </div>
        </div>
      </ChatFlow>
    </SafeArea>
  );
};

export default TestimonialTwo;
