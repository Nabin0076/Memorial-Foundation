import React from 'react';
import { BookOpen, Users, Heart, Shield, Archive } from 'lucide-react';

const GoalItem = ({ icon: Icon, text }) => (
  <li className="flex items-center space-x-3 mb-3">
    <Icon className="w-6 h-6 text-teal-600" />
    <span>{text}</span>
  </li>
);

const HowItStarted = () => {
  return (
    <div className="container mx-auto mt-12 px-4">
      <h1 className="text-5xl font-bold mb-8 text-center text-gray-800">About Martyr Govinda Poudel</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            Govinda Poudel was a visionary leader who dedicated his life to the cause of social justice and equality.
            Born in [birthplace], he grew up witnessing the struggles of marginalized communities, which fueled his
            passion for change.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Throughout his life, Govinda worked tirelessly to improve access to education, promote human rights,
            and advocate for democratic values. His unwavering commitment to these ideals ultimately led to his
            martyrdom on [date].
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            The Martyr Govinda Poudel Memorial Foundation was established to honor his memory and continue his
            important work. We strive to embody the principles he lived by and to create lasting positive change
            in our communities.
          </p>
          <div className="mt-8">
            <a href="#" className="inline-block bg-teal-600 text-white py-2 px-6 rounded-full hover:bg-teal-700 transition duration-300">
              Learn More About Our Work
            </a>
          </div>
        </div>
        
        <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Foundation Goals</h2>
          <ul className="space-y-4">
            <GoalItem icon={BookOpen} text="Provide educational opportunities for underprivileged youth" />
            <GoalItem icon={Users} text="Promote social awareness and civic engagement" />
            <GoalItem icon={Heart} text="Support community development initiatives" />
            <GoalItem icon={Shield} text="Advocate for human rights and democratic values" />
            <GoalItem icon={Archive} text="Preserve and share Govinda Poudel's legacy" />
          </ul>
        </div>
      </div>
      
      <div className="mt-16 bg-teal-50 p-8 rounded-lg shadow-inner">
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-teal-600">10,000+</p>
            <p className="text-xl text-gray-700">Lives Impacted</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-teal-600">50+</p>
            <p className="text-xl text-gray-700">Community Projects</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-teal-600">20+</p>
            <p className="text-xl text-gray-700">Years of Service</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItStarted;