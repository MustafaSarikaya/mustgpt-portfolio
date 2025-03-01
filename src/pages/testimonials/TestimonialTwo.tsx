import React from 'react';
import { SafeArea } from '../../components/SafeArea';
import { ChatFlow } from '../../components/ChatFlow';

const TestimonialTwo = () => {
  return (
    <SafeArea className="bg-gradient-to-b from-primary to-white">
      <ChatFlow title="Can Mustafa really understand my business needs?">
        <div className="space-y-6">
          <p className="text-lg text-gray-700">
            "I was skeptical about AI solutions at first, but MustGPT completely changed my perspective. Their approach to understanding our unique business challenges and providing tailored solutions was exceptional."
          </p>
          <div className="border-l-4 border-accent pl-4">
            <p className="text-gray-600 italic">
              "What stood out was their commitment to delivering not just a technical solution, but one that actually solved our business problems. The results speak for themselves - 40% increase in efficiency!"
            </p>
          </div>
          <div className="mt-8">
            <p className="font-semibold">Michael Rodriguez</p>
            <p className="text-gray-500">Operations Director, TechFlow Solutions</p>
          </div>
        </div>
      </ChatFlow>
    </SafeArea>
  );
};

export default TestimonialTwo;
