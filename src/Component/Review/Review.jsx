import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ReviewClient = () => {
  const [reviews, setReviews] = useState([
    {
      name: 'John Doe',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac iaculis metus, in faucibus odio. Nulla porttitor accumsan tincidunt.'
    },
    {
      name: 'Jane Smith',
      review: 'Sed ac iaculis metus, in faucibus odio.',
      description: 'Nulla porttitor accumsan tincidunt. Sed ac iaculis metus, in faucibus odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    // add more reviews here
  ]);

  useEffect(() => {
    reviews.forEach((review, index) => {
      setTimeout(() => {
        setReviews(prevReviews => {
          const newReviews = [...prevReviews];
          newReviews[index] = { ...newReviews[index], show: true };
          return newReviews;
        });
      }, index * 2000); // add a delay of 2 seconds between each review
    });
  }, []);
  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000 // slide every 3 seconds
  };
  

  return (
    <div className="bg-gradient-to-r bg-left from-purple-400 via-pink-500 to-red-500 bg-right min-h-screen flex justify-center items-center mb-10">

      <div className="w-3/4">
        <h2 className="text-4xl font-bold text-white text-center mb-8">Reviews</h2>
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index}>
              <p className="text-white text-xl mb-4">{review.review}</p>
              <h5 className="text-white font-bold mb-2">{review.name}</h5>
              <p className="text-white text-lg">{review.description}</p>
            </div>
          ))}
        </Slider>
      </div>
      
    </div>
  );
};

export default ReviewClient;