import React from 'react'
import Hero from './Hero'
import WhatWeDoSection from '@/pages/WhatWeDoSection'
import BlockchainServicesSection from './BlockchainServicesSection'
import IndustriesWeServe from './IndustriesWeServe'
import CaseStudiesSection from './CaseStudiesSection'
import CommunityContactSection from './CommunityContactSection'
import FooterWithNewsletter from './FooterWithNewsletter'

const App = () => {
  return (
    <div className='w-full'>
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