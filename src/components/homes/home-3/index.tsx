'use client'
import React from 'react'
import HeaderThree from '@/layouts/headers/HeaderThree'
import HeroAreaHomeThree from './HeroAreaHomeThree'
import ServiceAreaHomeThree from './ServiceAreaHomeThree'
import ProjectAreaHomeThree from './ProjectAreaHomeThree'
import ContactArea from '@/components/contact/ContactArea'
import FooterFour from '@/layouts/footers/FooterFour'
import ProjectDisplay from './ProjectDisplay'

const HomeThree = () => {
  return (
    <>
      <HeaderThree />
      <div id='smooth-wrapper' className='black-bg-3'>
        <div id='smooth-content'>
          <main>
            <HeroAreaHomeThree />
            <ServiceAreaHomeThree />
            <ProjectAreaHomeThree />
            <ProjectDisplay />
            <ContactArea />
          </main>
          <FooterFour />
        </div>
      </div>
    </>
  )
}

export default HomeThree
