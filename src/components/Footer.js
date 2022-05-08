import React from 'react'
import { imgs } from '../imgs';
import '../style/Footer.scss';

const Footer = () => {
  return (
    <div>
      <footer>
        <div className='footer-art'>
          <picture>
            <source media='(max-width: 767px)' srcSet={imgs.footer_mob} />
            <img src={imgs.footer} alt='' />
          </picture>
        </div>
        <div className='container'>
          <div className='footer'>
            <div className='footer-header'>
              <div className='logo'>
                <img src={imgs.logo} alt='' />
              </div>
              <div className='social-media-icons'>
                <img src={imgs.fb} alt='' />
                <img src={imgs.twitter} alt='' />
                <img src={imgs.insta} alt='' />
                <img src={imgs.pinterest} alt='' />
              </div>
              </div>
              <div className='footer-menu'>
                <div className='our-company'>
                  <h4>Our Company</h4>
                  <ul>
                    <li>How we work</li>
                    <li>Why insure</li>
                    <li>View Plans</li>
                    <li>Reviews</li>
                  </ul>
                </div>
                <div className='our-company'>
                  <h4>Help</h4>
                  <ul>
                    <li>FAQ</li>
                    <li>Terms of use</li>
                    <li>Privacy Policy</li>
                    <li>Cookies</li>
                  </ul>
                </div>
                <div className='our-company'>
                  <h4>Contact</h4>
                  <ul>
                    <li>Sales</li>
                    <li>Support</li>
                    <li>Live Chat</li>
                  </ul>
                </div>
                <div className='our-company'>
                  <h4>Others</h4>
                  <ul>
                    <li>Careers</li>
                    <li>Press</li>
                    <li>License</li>
                  </ul>
                </div>
              </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;