'use client';

import { useState } from 'react';

const DynamicContent = () => {
  const [active, setActive] = useState('one'); // State to track active button
  const [content, setContent] = useState({
    heading: 'Try the App',
    paragraph:
      'Have meals delivered to you within minutes from a wide variety of restaurants ranging from African to Continental cuisines to satisfy your cravings.',
    image: '/mobile.png',
  });

  const handleClick = (type) => {
    setActive(type); // Update active button state

    if (type === 'one') {
      setContent({
        heading: 'Try the App',
        paragraph:
          'Have meals delivered to you within minutes from a wide variety of restaurants ranging from African to Continental cuisines to satisfy your cravings.',
        image: '/mobile.png',
      });
    } else {
      setContent({
        heading: 'Try the Web',
        paragraph:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        image: '/web-ss-2.webp',
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {/* Toggle Button Container */}
      <div className="bg-[#fd853a] rounded-[20px] p-1 w-[215px] flex justify-between">
        <button
          className={`p-2 w-[100px] rounded-[20px] transition-all duration-300 ${
            active === 'one' ? 'bg-white text-black' : 'bg-transparent text-white'
          }`}
          onClick={() => handleClick('one')}
        >
          Application
        </button>
        <button
          className={`p-2 w-[100px] rounded-[20px] transition-all duration-300 ${
            active === 'two' ? 'bg-white text-black' : 'bg-transparent text-white'
          }`}
          onClick={() => handleClick('two')}
        >
          Website
        </button>
      </div>

      {/* Dynamic Content */}
      <h1 className="text-2xl font-bold">{content.heading}</h1>
      <p className="text-lg">{content.paragraph}</p>
      <img src={content.image} alt="Dynamic" className="w-auto h-[645px] rounded-lg" />
    </div>
  );
};

export default DynamicContent;
