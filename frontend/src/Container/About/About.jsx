
import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../../Constants';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
const AboutTest = [
    { title: 'Software Developer', description: 'Welcome to my blog', imgUrl: images.about01 },
    { title: 'iOS Developer', description: 'Welcome to my blog', imgUrl: images.about02 },
    { title: 'Software Engineer', description: 'Welcome to my blog', imgUrl: images.about03 }
  ]

const About = () => {
  return (
    <>
    <p className="head-text">Get to Know Me <span>Simpple</span> <br/>Organized<span> And friendly</span></p>

    <div className="app__profiles">
      {AboutTest.map((about, index) => (
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: 'tween' }}
          className="app__profile-item"
          key={about.title + index} >
          <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
          <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
        </motion.div>
      ))}
    </div>
    {/* Separator */}
    <hr className="separator" />
  </>
  )
}

export default AppWrap(
    MotionWrap(About, 'app__about'),
    'about',
    'app__whitebg',
  );