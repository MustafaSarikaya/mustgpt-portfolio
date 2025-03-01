import React from 'react';
import { SafeArea } from '../../components/SafeArea';
import { ChatFlow } from '../../components/ChatFlow';

const TestimonialOne = () => {
  return (
    <SafeArea className="bg-gradient-to-b from-primary to-white">
    <ChatFlow title="How did Mustafa help transform our startup?">
    <div className="space-y-6">
          <p className="text-lg text-gray-700">
            "Working with MustGPT was a game-changer for our AI startup. Their deep understanding of both technical and business aspects helped us navigate complex challenges and implement cutting-edge solutions."
          </p>
          <div className="border-l-4 border-accent pl-4">
            <p className="text-gray-600 italic">
              "The most impressive aspect was their ability to translate complex technical concepts into practical, implementable solutions. They weren't just a service provider; they became a true partner in our success."
            </p>
          </div>
          <div className="mt-8">
            <p className="font-semibold">Sarah Chen</p>
            <p className="text-gray-500">CTO, AI Innovations Inc.</p>
          </div>
        </div>
    </ChatFlow>
    </SafeArea>
  );
};

export default TestimonialOne;
