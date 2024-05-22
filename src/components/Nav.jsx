import React, { useEffect } from 'react';
import { logo } from '../assets';

function Nav() {
  useEffect(() => {
    const navLinks = document.querySelectorAll('.navlink');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.forEach(link => link.classList.remove('navlink-active'));
        link.classList.add('navlink-active');
      });
    });
  }, []);

  return (
    <div>
      <nav className='flex bg-black gap-3 items-center py-6 px-20 text-white justify-between'>
        <img src={logo} alt='logo' className='w-100 h-10' />
        <ul className='flex gap-12 justify-between items-center px-6'>
          <li className='navlink navlink-active'>Home</li>
          <li className='navlink'>Explore</li>
          <li className='navlink'>Genre</li>
          <li className='navlink'>News</li>
          <li className='navlink'>Movies</li>
          <li className='navlink'>TV Shows</li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
