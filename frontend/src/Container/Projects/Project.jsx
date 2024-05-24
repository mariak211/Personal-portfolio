
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Project.scss';
import { images } from '../../Constants';

const dummyProjects = [
  {
    title: 'SoulScribe AI',
    description: 'SoulScribeAi is an AI-powered app that offers therapist-like guidance during journaling. I led the design and UI implementation, integrating it seamlessly with backend services via Restful API. Our project received unanimous praise at the Winter 2024 University of Waterloo symposium for its user-friendly and innovative interface.',
    imgUrl: images.journaldetail,
    projectLink: '#',
    codeLink: 'https://github.com/SoulScribe-AI/mobile',
    tags: ['Mobile App', 'ML', 'Backend'],
  },
  {
    title: 'NileRemit',
    description: 'NileRemit is a platform that bridges the global remittance gap for South Sudanese in diaspora  through providing infrastructure for sending and receiving money to South Sudan.Being the founder of this simple but noble idea, my goal is  to give value to South Sudanese in diaspora and their relatives back home whose needs have often been ignored by major financial institutions.',
    imgUrl: images.nilemobile,
    projectLink: '#',
    codeLink: 'https://github.com/NileRemit/NileRemit-mobile-ios',
    tags: ['Mobile App', 'Backend'],
  },
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