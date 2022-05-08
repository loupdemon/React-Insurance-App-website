import React from 'react'
import { imgs } from '../imgs';
import '../style/Info.scss';

const Info = () => {
  return (
    <div className='we-are-different'>
      <div className='container'>
        <h2 className='title title1--mod'>We are different</h2>
        <div className='we-are-different__content'>
          <div className='snappy'>
            <img src={imgs.snappy_process} alt='' />
            <h3>Snappy Process</h3>
            <p>
              Our application process can be completed in mints, not hours.
              Don't get stuck filling in tedious forms.
            </p>
          </div>
          <div className='affordable'>
            <img src={imgs.affordable_prices} alt='' />
            <h3>Affordable Prices</h3>
            <p>
              Our application process can be completed in mints, not hours.
              Don't get stuck filling in tedious forms.
            </p>
          </div>
          <div className='people'>
            <img src={imgs.people_first} alt='' />
            <h3>People First</h3>
            <p>
              Our application process can be completed in mints, not hours.
              Don't get stuck filling in tedious forms.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info;