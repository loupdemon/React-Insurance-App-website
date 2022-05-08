import React from 'react'
import { imgs } from '../imgs';
import '../style/Banner.scss';

const Banner = () => {
  return (
    <div className='banner container'>
      <picture>
        <source media='(max-width: 767px)' srcSet={imgs.works_mobile} />
        <img src={imgs.works_desktop} alt='' />
      </picture>
      <div className='banner__wrapper'>
        <div className='title'>
          <h2 className='title1'>Find Out More<br/>About How We Work</h2>
        </div>
        <div className='button'>
          <button className='btn'>How We Work</button>
        </div>
      </div>
    </div>
  )
}

export default Banner;