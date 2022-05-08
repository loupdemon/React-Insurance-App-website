import React, {useState} from 'react';
import '../style/Header.scss';
import { imgs } from '../imgs';

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setOpen(!open);
  }
  return (
    <div>
      <header>
        <nav className='navbar container'>
          <div className='logo'>
            <img src={imgs.logo} alt='' />
          </div>
          <ul className={open ? `nav-items active` : `nav-items`}>
            <li>About</li>
            <li>Contact</li>
            <li>Portfolio</li>
            <li className='btn btn--nav-btn'>View Plans</li>
          </ul>
          <div className='hamburger'>
            <img src={imgs.hamburger} alt='' onClick={handleClick}/>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Header;