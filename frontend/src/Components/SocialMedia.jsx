import React from 'react';
import { AiFillFilePdf } from 'react-icons/ai';
import {FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <AiFillFilePdf/>
    </div>
    <div>
      <FaGithub />
    </div>
    <div>
      <FaLinkedin/>
    </div>
  </div>
);

export default SocialMedia;