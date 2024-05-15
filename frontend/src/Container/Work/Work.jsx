
import React from 'react';
import { images } from '../../Constants';
import { motion } from 'framer-motion';
import { Tooltip as ReactTooltip } from 'react-tooltip'

import { AppWrap, MotionWrap } from '../../wrapper';
import './Work.scss'

const Work = () => {
  const experiences = [
  {
      year: '2020',
      months: [
          { month: 'January-April', works: [
              { title: 'Software Developer', description: 'Worked on a mobile app project, implemented new features, and fixed bugs.' },
              { title: 'Collaboration', description: 'Collaborated with designers and testers to ensure product quality.' }
          ]}
      ]
  },
  {
      year: '2018',
      months: [
          { month: 'September-December', works: [
              { title: 'Project Manager', description: 'Managed a web development team, handled timelines and client communication.' },
              { title: 'Project Delivery', description: 'Successfully delivered multiple projects within budget and schedule.' }
          ]}
      ]
  },
  {
      year: '2017',
      months: [
          { month: 'May-August', works: [
              { title: 'Internship', description: 'Started as an intern and gained hands-on experience in software development.' },
              { title: 'Development', description: 'Contributed to the development of a new feature for the company\'s main product.' }
          ]}
      ]
  },
  {
      year: '2019',
      months: [
          { month: 'June-September', works: [
              { title: 'Data Analyst', description: 'Analyzed customer data to identify trends and provide insights for marketing strategies.' },
              { title: 'Reporting', description: 'Generated monthly reports on key performance metrics for management review.' }
          ]}
      ]
  },
  {
      year: '2016',
      months: [
          { month: 'March-June', works: [
              { title: 'Cybersecurity Intern', description: 'Assisted in cybersecurity audits and vulnerability assessments for client systems.' },
              { title: 'Research', description: 'Conducted research on emerging cybersecurity threats and mitigation strategies.' }
          ]}
      ]
  }
];


  const skills =[
  {
      name: 'JavaScript',
      bgColor: '#f0db4f',
      icon: images.javascript
  },
  {
      name: 'React.js',
      bgColor: '#61dafb',
      icon:  images.react
  },
  {
      name: 'Node.js',
      bgColor: '#68a063',
      icon: images.node
  },
  {
      name: 'Python',
      bgColor: '#3776ab',
      icon: images.python
  },
  {
      name: 'HTML/CSS',
      bgColor: '#e34c26',
      icon: images.html
  }
];

  return (
    <>
    <h2 className="head-text">Professional <span>Experiences</span></h2>
    <div className="app__skills-container">
       <motion.div className="app__skills-list">
        {skills.map((skill) => (
        <motion.div
        key={skill.name} // Unique key for each skill
        className="app__skills-item app__flex"
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        >
        <div className="app__flex" style={{ backgroundColor: skill.bgColor }}>
          <img src={skill.icon} alt={skill.name} /> {/* Render image with src attribute */}
        </div>
        <p className="p-text">{skill.name}</p>
      </motion.div>
    ))}
  </motion.div>

  <div className="app__skills-exp">
  {experiences.map((experience) => (
    <motion.div
      className="app__skills-exp-item"
      key={experience.year}
    >
      <div className="app__skills-exp-year">
        <p className="bold-text">{experience.year}</p>
      </div>
      
      <motion.div className="app__skills-exp-works">
        {experience.months.map((month) => (
          <motion.div
            key={month.month} // Unique key for each month
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-exp-month"
          >
            <h4 className="bold-text">{month.month}</h4>
            {month.works.map((work) => (
              <div key={work.title} className="app__skills-exp-work" data-tip data-for={work.title}>
                <h4 className="bold-text">{work.title}</h4>
                <p className="p-text">{work.description}</p>
                <ReactTooltip id={work.title} effect="solid" arrowColor="#fff" className="skills-tooltip">
                  {work.description}
                </ReactTooltip>
              </div>
            ))}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  ))}
</div>
</div>
</>
);
};

export default AppWrap(
  MotionWrap(Work, 'app__skills'),
  'work',
  'app__whitebg',
);