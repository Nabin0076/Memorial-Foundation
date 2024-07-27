import React from 'react';
import { BookOpen, Home, Users, Shield } from 'lucide-react';

const programIcons = [BookOpen, Home, Users, Shield];

const ProgramCard = ({ title, description, icon: Icon }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 transition-all duration-300 hover:shadow-xl hover:scale-105">
    <div className="flex items-center mb-4">
      <Icon className="w-10 h-10 text-teal-600 mr-4" />
      <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
    </div>
    <p className="text-gray-600">{description}</p>
    <button className="mt-4 bg-teal-100 text-teal-700 py-2 px-4 rounded-full hover:bg-teal-200 transition duration-300">
      Learn More
    </button>
  </div>
);

const Programs = () => {
  const programs = [
    {
      title: "Educational Scholarships",
      description: "Providing financial support to promising students from underprivileged backgrounds.",
    },
    {
      title: "Community Development",
      description: "Implementing projects to improve infrastructure and services in rural areas.",
    },
    {
      title: "Youth Leadership Training",
      description: "Empowering young individuals with skills to become future community leaders.",
    },
    {
      title: "Human Rights Advocacy",
      description: "Raising awareness and advocating for human rights issues at local and national levels.",
    },
  ];

  return (
    <div className="container mx-auto mt-12 px-4">
      <h1 className="text-5xl font-bold mb-4 text-center text-gray-800">Our Programs</h1>
      <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
        Discover how we're making a difference through our diverse range of initiatives.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {programs.map((program, index) => (
          <ProgramCard key={index} {...program} icon={programIcons[index]} />
        ))}
      </div>
      <div className="mt-16 bg-teal-50 p-8 rounded-lg shadow-inner text-center">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Get Involved</h2>
        <p className="text-xl text-gray-600 mb-8">
          Join us in our mission to create positive change. Your support can make a real difference.
        </p>
        <button className="bg-teal-600 text-white py-3 px-8 rounded-full text-lg hover:bg-teal-700 transition duration-300">
          Volunteer Now
        </button>
      </div>
    </div>
  );
};

export default Programs;