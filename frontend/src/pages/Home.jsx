import React from 'react'
import Hero from './Hero'
import WhatWeDoSection from '@/pages/WhatWeDoSection'
import BlockchainServicesSection from './BlockchainServicesSection'
import IndustriesWeServe from './IndustriesWeServe'
import CaseStudiesSection from './CaseStudiesSection'
import CommunityContactSection from './CommunityContactSection'
import FooterWithNewsletter from './FooterWithNewsletter'
import Popup from '@/components/PopUp'

const App = () => {
  return (
    <div className='w-full'>
      <Popup/>
      <Hero />
      <WhatWeDoSection />
      <BlockchainServicesSection />
      <IndustriesWeServe />
      <CaseStudiesSection />
      <CommunityContactSection />
      <FooterWithNewsletter/>
    </div>
  )
}

export default App