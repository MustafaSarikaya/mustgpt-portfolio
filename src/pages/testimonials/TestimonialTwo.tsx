import React from 'react';

const TestimonialTwo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-white p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6">"Can Mustafa really understand my business needs?"</h1>
        <div className="space-y-6">
          <p className="text-lg text-gray-700">
            "I was skeptical about AI solutions at first, but MustGPT completely changed my perspective. Their approach to understanding our unique business challenges and providing tailored solutions was exceptional."
          </p>
          <div className="border-l-4 border-primary pl-4">
            <p className="text-gray-600 italic">
              "What stood out was their commitment to delivering not just a technical solution, but one that actually solved our business problems. The results speak for themselves - 40% increase in efficiency!"
            </p>
          </div>
          <div className="mt-8">
            <p className="font-semibold">Michael Rodriguez</p>
            <p className="text-gray-500">Operations Director, TechFlow Solutions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialTwo;
