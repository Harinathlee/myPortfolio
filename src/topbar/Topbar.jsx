import React from 'react';
import './Topbar.scss';

export default function about() {
  const topbarNav = (
    <div>
      <img
        src="https://cdn.jsdelivr.net/gh/Harinathlee/myPortfolio@master/src/topbar/Know_Me-removebg-preview.png"
        alt=""
      />

      <nav class="navMenu">
        <a href="#">Home</a>
        <a href="#">AboutMe</a>
        <a href="#">Work</a>
        <a href="#">ContactMe</a>
        <div class="dot"></div>
      </nav>
    </div>
  );

  return topbarNav;
}
