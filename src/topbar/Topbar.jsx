import React from 'react';
import './Topbar.scss';

export default function about() {
  const topbarNav = (
    <div>
      <h2 class="Title">KnowMe</h2>

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
