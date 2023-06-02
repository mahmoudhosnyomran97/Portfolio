import React from 'react';
import { BsLinkedin, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <a href='https://www.linkedin.com/in/mahmoud-hosny-imran-098280218/' target={'_blank'} rel="noopener noreferrer">
      <BsLinkedin />
    </a>
    <a href='https://www.facebook.com/profile.php?id=100073919314160&mibextid=ZbWKwL' target={'_blank'} rel="noopener noreferrer">
      <FaFacebookF />
    </a>
    <a href='https://instagram.com/fearless2559?igshid=ZDdkNTZiNTM=' target={'_blank'} rel="noopener noreferrer">
      <BsInstagram />
    </a>
  </div>
);

export default SocialMedia;
