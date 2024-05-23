
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Project.scss';
import { images } from '../../Constants';

const dummyProjects = [
  {
    title: 'SoulScribe AI',
    description: 'An AI-powered iOS app that provides therapist-like support during the journaling process. Architected the design and implementation of the UI as well as integrating with backend service through Restful API. During the Winter 2024 symposium at the University of Waterloo, our project received 100% approval from our consultants for showcasing an exceptionally user-friendly and innovative user interface.',
    imgUrl: images.journaldetail,
    projectLink: '#',
    codeLink: 'https://github.com/SoulScribe-AI/mobile',
    tags: ['Mobile app', 'ML', 'Backend'],
  },
  {
    title: 'NileRemit',
    description: 'NileRemit is a beta version iOS application for remittance, designed to help the South Sudanese community in the diaspora by offering a secure and effective solution for sending financial support to their families back home. In this project, I gained valuable insights into the complete process of remittance fulfillment from the sender’s bank to the recipient account and all the intermediary payment processors involved.',
    imgUrl: images.nilemobile,
    projectLink: '#',
    codeLink: 'https://github.com/NileRemit/NileRemit-mobile-ios',
    tags: ['Mobile App', 'Backend'],
  },
  {
    title: 'NileConnect',
    description: 'A robust backend for an e-commerce platform, providing secure and scalable APIs.',
    imgUrl: images.nileconnect,
    projectLink: '#',
    codeLink: '#',
    tags: ['Backend', 'Mobile App'],
  }
];

const Project = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    setWorks(dummyProjects);
    setFilterWork(dummyProjects);
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">Personal <span>Projects</span></h2>

      <div className="app__work-filter">
        {['ML', 'Backend', 'Mobile App', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={work.imgUrl} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Project, 'app__works'),
  'Projects',
  'app__primarybg',
);