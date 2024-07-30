import React from 'react';

const HistoryComponent = ({ bannerImageUrl, name, title, imageUrl, biography }) => {
  return (
    <div>
      {/* Banner image - increased height */}
      <div className="w-full h-[45rem] bg-cover bg-center mb-50" style={{ backgroundImage: `url(${bannerImageUrl})` }}>
      </div>
      
      <div className="max-w-6xl mx-auto p-6 bg-gray-100">
        <div className="flex flex-col md:flex-row">
          {/* Increased size of person's image */}
          <div className="md:w-1/2 lg:w-1/3 mb-6 md:mb-0 md:mr-8">
            <img src={imageUrl} alt={name} className="w-full h-auto rounded-lg shadow-lg" />
            <p className="mt-4 text-center text-lg text-gray-600">{title}</p>
          </div>
          <div className="md:w-1/2 lg:w-2/3">
            <h1 className="text-3xl font-bold mb-6">{name}</h1>
            <div className="space-y-6">
              {biography.map((paragraph, index) => (
                <p key={index} className="text-gray-800 text-lg">{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const History = () => {
  const personInfo = {
    bannerImageUrl: "/images/main.jpg",
    name: "Govinda Poudel",
    title: "Martyr Govinda Poudel",
    imageUrl: "/images/main.jpg",
    biography: [
      "The Pratiman Neema Memorial Foundation (PNMF) was established in the memory of Late Governor Pratiman Chand Bohara in 2003 by his admires, well-wishers and family members. It was in his honor for his contribution to this country's democratic movement of 2007 BS, and his belief in self reliance, education, and the grass root mobilization for development work.",
      "Born in a small village called Aglung, in the neighboring district of Gulmi, Pratiman Chand Bohara had a remarkable career. He began his career in the military as an ordinary solider, and eventually became an officer. During the 1950 democratic liberation movement that overthrew Nepal's autocratic Rana dynasty, he led a group of soldiers turned freedom fighters to free and successfully defend the district of Palpa in western Nepal, a former stronghold of the Rana regime. Following the successful revolution, Pratiman Chand Bohara became governor of Pyuthan.",
      "Throughout his life Governor Bohara was passionate about socio-economic causes and local development. He believed in decentralization, self-reliance, and community development through local resources and volunteerism. He saw fundamental flaws in Nepal's then overly centralized administrative systems and regional neglect, especially of those who were poor and powerless. Bohara lived his beliefs, and engaged in many forms of grass-root driven development work during his lifetime including constructing roads and establishing the first high school in the Pyuthan region.",
    ]
  };

  return <HistoryComponent {...personInfo} />;
};

export default History;