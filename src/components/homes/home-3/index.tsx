'use client'
import React from 'react'
import HeaderThree from '@/layouts/headers/HeaderThree'
import HeroAreaHomeThree from './HeroAreaHomeThree'
import ServiceAreaHomeThree from './ServiceAreaHomeThree'
import TestimonialAreaHomeTwo from '../home-2/TestimonialAreaHomeTwo'
import ContactArea from '@/components/contact/ContactArea'

const HomeThree = () => {
  return (
    <>
      <HeaderThree />
      <div id='smooth-wrapper' className='black-bg-3'>
        <div id='smooth-content'>
          <main>
            <HeroAreaHomeThree />
            <ServiceAreaHomeThree />
            <TestimonialAreaHomeTwo />
            <ContactArea />
          </main>
        </div>
      </div>
    </>
  )
}

export default HomeThree
