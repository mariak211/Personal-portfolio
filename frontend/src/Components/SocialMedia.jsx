import React from 'react';
import { AiFillFilePdf } from 'react-icons/ai';
import {FaGithub, FaLinkedin } from 'react-icons/fa';

// const SocialMedia = () => (
  
//   <div className="app__social">
//     <div>
//       <AiFillFilePdf/>
//     </div>
//     <div>
//       <FaGithub />
//     </div>
//     <div>
//       <FaLinkedin/>
//     </div>
//   </div>
// );

// export default SocialMedia;

const SocialMedia = () => {
  const currentUrl = window.location.href;

  const handleIconClick = (url) => {
    window.open(url, '_blank');
    window.location.href = currentUrl;
  };

  return (
    <div className="app__social">
      <div onClick={() => handleIconClick('https://example.com/your-resume.pdf')}>
        <AiFillFilePdf />
      </div>
      <div onClick={() => handleIconClick('https://github.com/mariak211')}>
        <FaGithub />
      </div>
      <div onClick={() => handleIconClick('https://www.linkedin.com/in/mariakachuoth')}>
        <FaLinkedin />
      </div>
    </div>
  );
};

export default SocialMedia;
