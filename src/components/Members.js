import React from 'react';

const MemberCard = ({ name, role, location, phoneNumber, imageUrl }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden m-4">
    <img className="w-full h-56 object-cover object-center" src={imageUrl} alt="" />
    <div className="p-4">
      <h3 className="font-bold text-xl mb-2">{name}</h3>
      <p className="text-gray-700 text-base mb-2">{role}</p>
      <p className="text-gray-600 text-sm">Location: {location}</p>
      <p className="text-gray-600 text-sm">Phone Number: {phoneNumber}</p>
    </div>
  </div>
);

const Members = () => {
  const members = [
    {
      name: "John Doe",
      role: "Founder & CEO",
      phoneNumber: "938384743",
      location: "banepa",
      imageUrl: "/api/placeholder/150/150"
    },
    {
      name: "Jane Smith",
      role: "Program Director",
      phoneNumber: "938384743",
      location: "banepa",
      imageUrl: "/api/placeholder/150/150"
    },
    {
      name: "Mike Johnson",
      role: "Outreach Coordinator",
      phoneNumber: "938384743",
      location: "banepa",
      imageUrl: "/api/placeholder/150/150"
    },
    // Add more members as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member, index) => (
          <MemberCard key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default Members;