import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel CSS
import HomeLayout from '../layout/HomeLayout';

const AboutUs = () => {
  const personalities = [
    {
      name: 'Albert Einstein',
      quote: 'Life is like riding a bicycle. To keep your balance, you must keep moving.',
      image: 'path/to/einstein.jpg', // Replace with your image path
    },
    {
      name: 'Marie Curie',
      quote: 'Nothing in life is to be feared; it is only to be understood.',
      image: 'path/to/curie.jpg', // Replace with your image path
    },
    {
      name: 'Mahatma Gandhi',
      quote: 'Be the change that you wish to see in the world.',
      image: 'path/to/gandhi.jpg', // Replace with your image path
    },
    {
      name: 'Nelson Mandela',
      quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
      image: 'path/to/mandela.jpg', // Replace with your image path
    },
    {
      name: 'Mother Teresa',
      quote: 'Spread love everywhere you go. Let no one ever come to you without leaving happier.',
      image: 'path/to/teresa.jpg', // Replace with your image path
    },
    {
      name: 'Steve Jobs',
      quote: 'The only way to do great work is to love what you do.',
      image: 'path/to/jobs.jpg', // Replace with your image path
    },
  ];

  return (
    
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
        <div className="text-center mb-8">
          <p className="text-xl mb-4">
            Welcome to our application! We are dedicated to providing you with the best experience possible. Our mission is to inspire and empower individuals through the wisdom and legacy of renowned personalities.
          </p>
        </div>
        <Carousel
          showArrows={true}
          autoPlay={true}
          infiniteLoop={true}
          interval={3000}
          showThumbs={false}
          showStatus={false}
        >
          {personalities.map((person, index) => (
            <div key={index} className="flex flex-col items-center p-4">
              <div className="w-24 h-24 mb-4 rounded-full overflow-hidden">
                {person.image ? (
                  <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">No Image</span>
                  </div>
                )}
              </div>
              <h2 className="text-2xl font-bold">{person.name}</h2>
              <p className="text-lg italic mt-2">"{person.quote}"</p>
            </div>
          ))}
        </Carousel>
      </div>
    
  );
};

export default AboutUs;
