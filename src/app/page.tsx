import HomeOne from '@/components/homes/home'
import HomeThree from '@/components/homes/home-3'
import Wrapper from '@/layouts/Wrapper'
import React from 'react'

export const metadata = {
  title: 'Diego - Personal Creative Portfolio & Resume Next js Template',
}

const MainHome = () => {
  return (
    <Wrapper>
      <HomeThree />
    </Wrapper>
  )
}

export default MainHome
