import React from 'react';
import { SafeArea } from '../../components/SafeArea';
import { ChatFlow } from '../../components/ChatFlow';

const TestimonialThree = () => {
  return (
    <SafeArea className="bg-gradient-to-b from-primary to-white">
      <ChatFlow title="Is Mustafa suitable for enterprise-scale projects?">
        <div className="space-y-6">
          <p className="text-lg text-gray-700">
            "As a Fortune 500 company, we needed an AI solution that could scale with our enterprise needs. MustGPT not only met but exceeded our expectations with their enterprise-grade implementation."
          </p>
          <div className="border-l-4 border-accent pl-4">
            <p className="text-gray-600 italic">
              "Their expertise in handling large-scale deployments and ability to integrate with our existing systems made the transition seamless. The ROI we've seen is remarkable."
            </p>
          </div>
          <div className="mt-8">
            <p className="font-semibold">James Wilson</p>
            <p className="text-gray-500">Enterprise Architect, Global Tech Industries</p>
          </div>
        </div>
      </ChatFlow>
    </SafeArea>
  );
};

export default TestimonialThree;
