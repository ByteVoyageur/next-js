'use client'
import React from 'react'
import HeaderThree from '@/layouts/headers/HeaderThree'
import HeroAreaHomeThree from './HeroAreaHomeThree'
import ServiceAreaHomeThree from './ServiceAreaHomeThree'
import ProjectAreaHomeThree from './ProjectAreaHomeThree'
import CommentForm from '@/components/forms/CommentForm'
import TestimonialAreaHomeTwo from '../home-2/TestimonialAreaHomeTwo'

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
            <CommentForm />
          </main>
        </div>
      </div>
    </>
  )
}

export default HomeThree
