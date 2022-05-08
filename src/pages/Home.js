import React from 'react'
import Hero from '../components/Hero';
import Info from '../components/Info';
import Banner from '../components/Banner';

const Home = () => {
  return (
    <div>
        <Hero />
      <section className='section3'>
         <Info />
      </section>
      <section className='section2'>
        <Banner />
      </section>
        
       
        
    </div>
  )
}

export default Home;