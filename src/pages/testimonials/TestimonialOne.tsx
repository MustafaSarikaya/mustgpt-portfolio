import React from 'react';

const TestimonialOne = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-white p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6">"How did Mustafa help transform our startup?"</h1>
        <div className="space-y-6">
          <p className="text-lg text-gray-700">
            "Working with MustGPT was a game-changer for our AI startup. Their deep understanding of both technical and business aspects helped us navigate complex challenges and implement cutting-edge solutions."
          </p>
          <div className="border-l-4 border-primary pl-4">
            <p className="text-gray-600 italic">
              "The most impressive aspect was their ability to translate complex technical concepts into practical, implementable solutions. They weren't just a service provider; they became a true partner in our success."
            </p>
          </div>
          <div className="mt-8">
            <p className="font-semibold">Sarah Chen</p>
            <p className="text-gray-500">CTO, AI Innovations Inc.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialOne;
