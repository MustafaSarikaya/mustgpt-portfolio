import React from 'react';

const TestimonialThree = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-white p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6">"Is Mustafa suitable for enterprise-scale projects?"</h1>
        <div className="space-y-6">
          <p className="text-lg text-gray-700">
            "As a Fortune 500 company, we needed an AI solution that could scale with our enterprise needs. MustGPT not only met but exceeded our expectations with their enterprise-grade implementation."
          </p>
          <div className="border-l-4 border-primary pl-4">
            <p className="text-gray-600 italic">
              "Their expertise in handling large-scale deployments and ability to integrate with our existing systems made the transition seamless. The ROI we've seen is remarkable."
            </p>
          </div>
          <div className="mt-8">
            <p className="font-semibold">James Wilson</p>
            <p className="text-gray-500">Enterprise Architect, Global Tech Industries</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialThree;
