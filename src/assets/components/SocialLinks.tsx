import React from 'react';
import { Link } from 'react-router-dom';

const SocialLinks: React.FC = () => {
  return (
    <ul className="social">
      <li><Link to="/contact"><img src="images/at-solid.svg" alt="Contact Icon"/>Contact</Link></li>
      <li><a href="https://codepen.io/LukeDwam" target="_blank" rel="noopener noreferrer"><img src="./images/codepen-brands.svg" alt="CodePen Icon"/>CodePen</a></li>
      <li><a href="https://github.com/LucasDWWM" target="_blank" rel="noopener noreferrer"><img src="./images/github-brands.svg" alt="GitHub Icon"/>GitHub</a></li>
    </ul>
  );
};
export default SocialLinks;