
import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../../Constants';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';

const about = [
  { title: 'iOS Development,', description: 'I am passionate about developing innovative mobile apps, especially for the Apple OS ecosystem.', icon: images.about_ios}
  ,
  { title: 'Backend Development', description: 'Driven by a passion for building scalable software infrastructure, I enjoy transforming unstructured business logic into a streamlined, end-to-end system that provides specific value to end users.', icon:  images.backend},
  { title: 'Machine Learning', description: 'I chose engineering to develop intelligent systems that enhance decision-making. My limited work in various AI projects has reinforced my admiration for how AI can bolster our decision-making processes.', icon: images.machinelearning},
  { title: 'Innovation and Creativity', description: 'As a first-generation engineer from rural Africa, known of alienation from the global technology infrastructure, I have always dreamt of creating technology that is inclusive.', icon: images.brain},
]

const About = () => {
  return (
    <>
    
      <h2 className="about-text">With <span>3+ years </span> <br /> of <span>internship experiences</span>, <span> coursework</span> and  <span> personal projects </span> I have grown my interests in the following areas;</h2>

      <div className="app__profiles">
        {about.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}>
            <img src={about.icon} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>

      <h2 className='head-text'> Technical <span> Skills </span></h2>
      <div className="app__profiles">
        {[images.about_ios, images.python, images.git, images.api, images.react].map((icon, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}>
            <img src={icon} alt={"icon"} />
          </motion.div>
        ))}
    </div>
    </>
  );
};

export default AppWrap(
    MotionWrap(About, 'app__about'),
    'about',
    'app__whitebg',
  );