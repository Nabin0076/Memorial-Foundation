import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const FullScreenModal = ({ media, onClose, onPrev, onNext }) => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-200 z-10"
      >
        <X size={24} />
      </button>
      <button
        onClick={onPrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200 z-10"
      >
        <ChevronLeft size={36} />
      </button>
      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200 z-10"
      >
        <ChevronRight size={36} />
      </button>
      {media.type === 'image' ? (
        <img src={media.url} alt={media.caption} className="w-full h-full object-contain" />
      ) : (
        <video controls className="w-full h-full object-contain">
          <source src={media.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg font-semibold z-10">
        {media.caption}
      </p>
    </div>
  );
};

const Gallery = () => {
  const [media] = useState([
    { type: 'image', url: '/images/board.jpg', caption: 'Image 1' },
    { type: 'image', url: '/images/japan.jpg', caption: 'Image 2' },
    { type: 'image', url: '/images/dashain.jpg', caption: 'Image 3' },
    { type: 'image', url: '/images/president.jpg', caption: 'Image 4' },
    { type: 'image', url: '/images/main.jpg', caption: 'Image 5' },
    { type: 'image', url: '/images/house.jpg', caption: 'Image 6' },
    { type: 'video', url: '/videos/first.mp4', caption: 'Video 1' },
  ]);

  const [selectedIndex, setSelectedIndex] = useState(null);

  const openFullScreen = (index) => {
    setSelectedIndex(index);
  };

  const closeFullScreen = () => {
    setSelectedIndex(null);
  };

  const showPrev = () => {
    setSelectedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : media.length - 1));
  };

  const showNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex < media.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-12 text-center text-indigo-800">Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {media.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div 
                className="aspect-w-16 aspect-h-9 cursor-pointer" 
                onClick={() => openFullScreen(index)}
              >
                {item.type === 'image' ? (
                  <img src={item.url} alt={item.caption} className="w-full h-full object-cover" />
                ) : (
                  <video className="w-full h-full object-cover">
                    <source src={item.url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
              <div className="p-4">
                <p className="text-lg font-semibold text-gray-800">{item.caption}</p>
                <p className="text-sm text-gray-600 mt-1">{item.type === 'image' ? 'Image' : 'Video'}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedIndex !== null && (
        <FullScreenModal 
          media={media[selectedIndex]} 
          onClose={closeFullScreen}
          onPrev={showPrev}
          onNext={showNext}
        />
      )}
    </div>
  );
};

export default Gallery;