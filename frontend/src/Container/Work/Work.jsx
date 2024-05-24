
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
    
      "achievements": "OPENLANE, Inc., a leading digital marketplace for wholesale used vehicles, offers exclusive off-lease inventory not found anywhere else. It brings together all sellers, buyers, and vehicles in one platform, providing a distinct selection of inventory. As an iOS engineering intern, I actively contributed to the modernization of their codebase. I developed a watchlist feature for the iOS app, which allows users to bid and monitor vehicles of interest. This enhancement improved the shopping experience for over 15,000 customers."
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
    
      "achievements": "Carta is a renowned Unicorn startup known for its leading Cap Table management software. I had the privilege of interning at this company as a Software Engineering Intern for four months. During my tenure, I was part of the platform team, working as a mobile iOS engineer. My primary focus was to redefine the mobile UI testing workflow. My responsibilities ranged from creating the roadmap to implementing the UI testing automation pipeline. I pioneered and documented UI testing strategies which reduced manual testing efforts by 25%. Additionally, I created a nightly smoke tests pipeline that utilized idle continuous integration (CI) resources at night. This optimized the utilization of overstretched CI resources."
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
    
      "achievements": "TheScore is an award-winning sportsbook app that provides real-time news, stats, and scores. It offers pregame and in-play markets, quick cashouts, secure transactions, and engaging promotions. During my 4-month internship as an iOS Engineer, I played a pivotal role in rewriting the betting features of theScore app and augmented the props and future feature implementation. This improved design provided millions of sports fans with enriched experiences as they effortlessly followed their favourite sports while betting on the same platform."
    
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