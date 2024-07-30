import React from 'react';

const ProgramSection = ({ title, description, image, activities }) => (
  <div className="mb-16 bg-white rounded-lg shadow-lg overflow-hidden">
    <div className="md:flex">
      <div className="md:w-1/3">
        <img src={image} alt={title} className="w-full h-64 object-cover" />
      </div>
      <div className="md:w-2/3 p-6">
        <h2 className="text-3xl font-bold mb-4 text-green-600">{title}</h2>
        <p className="text-gray-600 mb-6">{description}</p>
        <h3 className="text-xl font-semibold mb-2 text-green-500">Key Activities:</h3>
        <ul className="list-disc pl-5 text-gray-600">
          {activities.map((activity, index) => (
            <li key={index} className="mb-1">{activity}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const Programs = () => {
  const programs = [
    {
      title: "Women4Women Hygiene Project",
      description: "Empowering women through health education and hygiene resources, our Women4Women Hygiene Project aims to improve the overall well-being of women in underserved communities.",
      image: "/images/women-hygiene-placeholder.jpg",
      activities: [
        "Distributing feminine hygiene kits",
        "Conducting health education workshops",
        "Training local health advocates",
        "Partnering with schools for adolescent health programs"
      ]
    },
    {
      title: "Community Development Initiative",
      description: "Our Community Development Initiative focuses on sustainable growth and empowerment, working hand-in-hand with local communities to address their unique needs and challenges.",
      image: "/images/community-dev-placeholder.jpg",
      activities: [
        "Implementing sustainable agriculture projects",
        "Providing vocational training programs",
        "Supporting local entrepreneurship",
        "Improving access to clean water and sanitation"
      ]
    },
    {
      title: "Human Rights Advocacy Program",
      description: "Through education, awareness, and direct action, our Human Rights Advocacy Program works tirelessly to promote and protect the fundamental rights of all individuals.",
      image: "/images/human-rights-placeholder.jpg",
      activities: [
        "Organizing human rights awareness campaigns",
        "Providing legal aid to vulnerable populations",
        "Conducting research on human rights issues",
        "Collaborating with international organizations for policy changes"
      ]
    },
    {
      title: "Educational Outreach",
      description: "Our Educational Outreach program is dedicated to breaking down barriers to education and providing quality learning opportunities to underprivileged communities.",
      image: "/images/education-placeholder.jpg",
      activities: [
        "Building and renovating schools in rural areas",
        "Providing scholarships to deserving students",
        "Implementing adult literacy programs",
        "Supplying educational materials and resources"
      ]
    }
  ];

  return (
    <div className="bg-gray-100 py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-4 text-green-700">Our Programs</h1>
        <p className="text-center text-gray-600 mb-12 text-xl">
          Discover the initiatives that drive our mission to improve lives and communities.
        </p>
        {programs.map((program, index) => (
          <ProgramSection key={index} {...program} />
        ))}
      </div>
      <div className="mt-16 text-center">
        <button 
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 text-lg"
        >
          Get Involved
        </button>
      </div>
    </div>
  );
};

export default Programs;