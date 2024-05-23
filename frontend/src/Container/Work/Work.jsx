
import React from 'react';
import { images } from '../../Constants';
import { motion } from 'framer-motion';
import { Tooltip as ReactTooltip } from 'react-tooltip'

import { AppWrap, MotionWrap } from '../../wrapper';
import './Work.scss'

const Work = () => {
  const experiences = [
    {
      "companyName": "Openlane",
      "companyLogo": images.openlane,
      "periodOfExperience": {
        "start": "Jan 2023",
        "end": "Apr 2023"
      },
      
      "individualRole": "Software Engineering Intern",
      "imageAssets": images.mobile,
    
      "toolsStack": [
        "SwiftUI",
        "UIKit",
        "XCTEST",
        "MVVM",
        "Swift",
        "CircleCI",
        "Fastlane",
        "Github"
      ],
    
      "achievements": "Improved Docker container runtimes by 60% via VirtioFS"
    
    },
    {
      "companyName": "Carta",
      "companyLogo": images.carta,
      "periodOfExperience": {
        "start": "May 2022",
        "end": "Aug 2022"
      },
      
      "individualRole": "Software Engineering Intern",
      "imageAssets": images.mobile,
    
      "toolsStack": [
        "SwiftUI",
        "UIKit",
        "XCTEST",
        "MVVM",
        "Swift",
        "CircleCI",
        "Fastlane",
        "Git"
      ],
    
      "achievements": "Carta is a Unicorn startup that has made a name for itself as the world's leading Cap Table management software. I have had the opportunity to spend 2 of my internships at this company as a Software Engineering Intern. Here I have been able to be part of 2 teams. First, I was on the Employee Platform team where I was able to overhaul the onboarding process for employees signing up for Carta to manage stocks issued to them from their companies. The second time, I worked on the Total Compensation team, where we used the equity and salary info provided by the 30,000+ corporations that are currently within the Carta ecosystem to develop data driven models that benchmark what compensation a new or existing hire should be receiving. Specifically during my time here, I played a large role in expanding their international outreach by providing an in-house currency conversion solution to convert any foreign currencies to USD."
    
    },
    {
      "companyName": "Wonolo",
      "companyLogo": images.wonolo,
      "periodOfExperience": {
        "start": "Aug 2021",
        "end": " Dec 2021"
      },
      
      "individualRole": "Software Engineering Intern",
      "imageAssets": images.mobile,
    
      "toolsStack": [
        "SwiftUI",
        "UIKit",
        "XCTEST",
        "MVVM",
        "Swift",
        "CircleCI",
        "Fastlane",
        "Github"
      ],
    
      "achievements": "Improved Docker container runtimes by 60% via VirtioFS"
    
    },
    {
      "companyName": "Innovapost",
      "companyLogo": images.innovapost,
      "periodOfExperience": {
        "start": "Jan 2021",
        "end": "Apr 2021"
      },
      
      "individualRole": "Software Engineering Intern",
      "imageAssets": images.mobile,
    
      "toolsStack": [
        "SwiftUI",
        "UIKit",
        "XCTEST",
        "MVVM",
        "Swift",
        "CircleCI",
        "Fastlane",
        "Github"
      ],
    
      "achievements": "Improved Docker container runtimes by 60% via VirtioFS"
    
    },
    {
      "companyName": "theScore",
      "companyLogo": images.thescore,
      "periodOfExperience": {
        "start": "May 2020",
        "end": "Aug 2020"
      },
      
      "individualRole": "Software Engineering Intern",
      "imageAssets": images.mobile,
    
      "toolsStack": [
        "SwiftUI",
        "UIKit",
        "XCTEST",
        "MVVM",
        "Swift",
        "CircleCI",
        "Fastlane",
        "Github"
      ],
    
      "achievements": "Improved Docker container runtimes by 60% via VirtioFS"
    
    },
    {
      "companyName": "Guestlogix Inc",
      "companyLogo": images.guestlogix,
      "periodOfExperience": {
        "start": "Jan 2019",
        "end": "Aug 2019"
      },
      
      "individualRole": "Software Engineering Intern",
      "imageAssets": images.mobile,
    
      "toolsStack": [
        "SwiftUI",
        "UIKit",
        "XCTEST",
        "MVVM",
        "Swift",
        "CircleCI",
        "Fastlane",
        "Github"
      ],
    
      "achievements": "Improved Docker container runtimes by 60% via VirtioFS"
    
    }
];
  return (
    <>
    <h2 className="head-text">Professional <span>Experiences</span></h2>
    <div className="app__skills-container">
  <div className="app__skills-exp">
  {experiences.map((exp) => (
    <motion.div
      className="app__skills-exp-item"
      key={exp.companyName}
    >
      <div className="app__skills-exp-year">
      <img src= {exp.companyLogo} alt="icons" />
      </div>
      
      <motion.div className="app__skills-exp-works">
          <motion.div
            key={exp.individualRole} 
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-exp-month"
          >
            <div className='company-period'>
            <h2>{exp.companyName}</h2>
            <h4 className="bold-text">{exp.periodOfExperience.start} - {exp.periodOfExperience.end}</h4>
            </div>
      
            <div key={exp.companyName} className="app__skills-exp-work">
                <h4 className="bold-text">{exp.individualRole}</h4>
                <div className='description-image-container'>
                  <p className="p-text">{exp.achievements}</p>
                </div>
              </div>

          </motion.div>
    
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