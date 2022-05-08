import React from 'react'
import { imgs } from '../imgs';
import '../style/Hero.scss';

const Hero = () => {
  return (
    <div>
    <div className='hero'>
      <div className='right-top-img'>
        <picture>
          <source media='(max-width:767px)' srcSet={imgs.intro_right_mobile}/>
          <img src={imgs.intro_right} alt='' />
        </picture>
      </div>
      <div className='hreo__wrapper_container'>
        <div className='hero__content'>
          <h1 className='title1'>Humanizing <br/> your insurance</h1>
          <p className='hero__text'>
            Get your life insurance coverage easier and faster. We belond our
            experties and technology to help you find the plan that's right
            for you. Ensure you and your loved ones are prorected.
          </p>
          <button className='btn'>VIEW PLANS</button>
        </div>
        <div className='hero__image'>
          <picture>
            <source media='(max-width:767px)' srcSet={imgs.intro_mobile}/>
            <img src={imgs.intro_desktop} alt='' />
          </picture>
        </div>
      </div>
      <div className='left-bottom-img'>
        <picture>
          <source media='(max-width:767px)' srcSet={imgs.intro_left_mobile}/>
          <img src={imgs.intro_left} alt='' />
        </picture>
      </div>
    </div>
    </div>
  )
}

export default Hero;