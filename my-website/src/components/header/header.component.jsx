import React from 'react';

import './header.styles.scss';

const Header = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href='/'>Main</a>
          </li>
          <li>
            <a href='/education'>Education</a>
          </li>
          <li>
            <a href='/experience'>Experience</a>
          </li>
          <li>
            <a href='/projects'>Projects</a>
          </li>
          <li>
            <a href='/about'>More About Me</a>
          </li>
          <li>
            <a href='/contact'>Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
