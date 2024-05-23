
import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';

import './Testimonial.scss';
import { images } from '../../Constants';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const [brands, setBrands] = useState([]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    // Dummy data for testimonials
    const dummyTestimonials = [
      {
        imgurl: images.mobileTeam,
        name: 'Innovapost Mobile team',
        company: 'Innovapost',
        feedback: 'Thank you Mariak for your amazing work and  winning the coop student of the team!'
      },
      {
        imgurl: images.georgedunning,
        name: 'George Dunning',
        company: 'Canada Post/Innovapost',
        feedback: 'You are a Rockstar Mariak!!.'
      },
      {
        imgurl: images.agileTeam,
        name: 'UI/UX team',
        company: 'Innovapost',
        feedback: 'Absolutely love it! Great support team as well.'
      },
    ];

    // Dummy data for brands
    const dummyBrands = [
      {
        _id: '1',
        imgUrl: images.carta,
        name: 'Carta'
      },
      {
        _id: '2',
        imgUrl: images.thescore,
        name: 'theScore'
      },
      {
        _id: '3',
        imgUrl: images.wonolo,
        name: 'Wonolo'
      },
      {
        _id: '4',
        imgUrl: images.innovapost,
        name: 'Innovapost'
      },
      {
        _id: '5',
        imgUrl: images.guestlogix,
        name: 'Guestlogix'
      },
    ];

    setTestimonials(dummyTestimonials);
    setBrands(dummyBrands);
  }, []);

  return (
    <>
      {testimonials.length && (
        <>
        <h2 className="head-text" style={{ marginBottom: 10 }}>What my previous <span>teammates</span> say about <span>me</span></h2>
          <div className="app__testimonial-item app__flex">
            <img src={testimonials[currentIndex].imgurl} alt={testimonials[currentIndex].name} />
            <div className="app__testimonial-content">
              {/* <p className="p-text">{testimonials[currentIndex].feedback}</p> */}
              <div>
                <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                <h5 className="p-text">{testimonials[currentIndex].company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
              <HiChevronLeft />
            </div>

            <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand._id}
          >
            <img src={brand.imgUrl} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonial',
  'app__primarybg',
);
