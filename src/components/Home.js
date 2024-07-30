import React from 'react';
import { Link } from 'react-router-dom';

const GlimpseGallery = () => {
  const images = [
    { src: "/images/glimpse1.jpg", alt: "Students planting trees" },
    { src: "/images/glimpse2.jpg", alt: "Close-up of a grasshopper" },
    { src: "/images/glimpse3.jpg", alt: "Event banner" },
    { src: "/images/glimpse4.jpg", alt: "River landscape" },
    { src: "/images/glimpse5.jpg", alt: "Community project" },
    { src: "/images/glimpse6.jpg", alt: "Women's Health Camp" },
  ];

  return (
    <div className="py-16 px-8 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-4">OUR GLIMPSE</h2>
      <p className="text-center text-gray-600 mb-8">Latest gallery and images of PNMF</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md">
            <img src={image.src} alt={image.alt} className="w-full h-48 object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};



const DonateSection = () => {
  return (
    <div className="relative bg-cover bg-center h-screen" style={{backgroundImage: "url('/images/group.jpg')"}}>
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="bg-white bg-opacity-90 max-w-2xl mx-auto text-center p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4 text-black">Support For Women4Women Hygiene Feminine Project In Nepal</h2>
          <p className="mb-6 text-gray-700 text-sm">
            PNMF engages in valuable experiential learning opportunities through mutually beneficial campus-community partnerships. In the global context, students work with the local partners in Nepal to understand (e.g., through focus group discussion & data gathering) the impediments in gender hygiene and health conditions and provide solutions (e.g., hygiene kits as intervention tool) to improve, educate, and offer effective awareness mechanism in areas of health, sanitation, menstrual hygiene, and adolescent emotional stress.
          </p>
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full transition duration-300"
          >
            DONATE US
          </button>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="relative">
      {/* Hero Section with Full Image and Text Overlay */}
      <div className="relative w-full">
        <img
          src="/images/main.jpg"
          alt="Martyr Govinda Poudel"
          className="w-full h-auto"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 text-center">
            Martyr Govinda Poudel
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mb-2 sm:mb-4 text-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
            Honoring the legacy of a true patriot who sacrificed everything for our nation's freedom
          </p>
          <Link 
            to="/about/how-it-started" 
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-3 sm:py-2 sm:px-4 text-xs sm:text-sm rounded-full transition duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-stretch p-8 md:p-40">
        <div className="md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-8 flex flex-col justify-center items-center text-center">
          <h2 className="text-3xl font-bold mb-2">We have started our Journey since 2003</h2>
        </div>
        {/* Vertical line */}
        <div className="hidden md:block w-px bg-gray-300 mx-8"></div>
        <div className="md:w-1/2 pl-0 md:pl-8">
          <p className="text-base md:text-lg text-justify sm:text-xs">
            Pratiman-Neema Memorial Foundation (PNMF), a non-profit organization established in 2003 and a founding trustee of
             a polytechnic institute, Pratiman-Neema College (PNC), uses three platforms—academics, research, and community engagement,
              to bring together people and institutions locally, nationally and internationally, to work on ideas that are creative,
               long-lasting and sustainable. Using the interdisciplinary approach that combines natural sciences, social sciences, and 
               humanities, PNMF aims to use these platforms to produce skilled manpower, conduct problem-driven research, and engage in
                evidence-based solutions that help improve the well-being of the communities.
          </p>
        </div>
      </div>
      <div className="py-16 px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Our Focus Areas</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <FocusArea
            icon={<CommunityDevelopmentIcon />}
            title="COMMUNITY DEVELOPMENT"
          />
          <FocusArea
            icon={<HumanRightsIcon />}
            title="HUMAN RIGHTS ADVOCACY"
          />
        </div>
      </div>
      <GlimpseGallery />
      <DonateSection />
    </div>
  );
};

const FocusArea = ({ icon, title }) => {
  return (
    <div className={`flex flex-col items-center justify-center p-6 
    transition-all duration-300 
    hover:scale-105 hover:shadow-xl cursor-pointer w-full md:w-1/2 
    h-64 md:h-80 lg:h-96 text-center rounded-lg`}>
      <div className="text-6xl mb-6 text-green-500">{icon}</div>
      <h3 className="text-2xl font-bold">{title}</h3>
    </div>
  );
};

const CommunityDevelopmentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const HumanRightsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

export default Home;