import React from 'react'
import ServiceHeroSection from '../components/ServiceHero'
import TrustedBrands from '../components/marquee'
import PainPointsSection from '../components/PainPointsSection'
import WhyCROMattersSection from '../components/WhyCROMattersSection'
import ServiceTabSection from '../components/ServiceTabSection'
import OutcomesSection from '../components/Outcomessection'
import CTASection from '../components/Ctasection'
 import TestimonialsSection from '../components/Testimonia'
import KinsebMarketingFAQ from '../components/FAQ'
 import RallyingCallSection from '../components/Rallyingcallsection'
 import CROProcessSection from '../components/Servicespredicttable'
 import ServiceCTA from '../components/ServiceCTA'
 import LandingPage from '../components/ContactForm'
import ServicesWhyChooseUs from '../components/ServicesCroAdvantage'
import WhyChooseUsSection from '../components/OneConversion'
const ServicePage = () => {
  return (
    <div>

        <ServiceHeroSection />
        <TrustedBrands />
        <RallyingCallSection />
        <WhyChooseUsSection />
         <ServiceTabSection />
        <PainPointsSection />
        <WhyCROMattersSection />
             <OutcomesSection />
       
        <CTASection />
        <ServicesWhyChooseUs />
        <CROProcessSection />
        <TestimonialsSection />
        <KinsebMarketingFAQ />
<ServiceCTA />
<LandingPage />
   
    </div>
  )
}

export default ServicePage