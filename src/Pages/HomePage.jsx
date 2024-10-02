import React, { useRef } from 'react'
import NavBar from '../Components/NavBar'
import HomeBanner from '../Components/HomeBanner'
import ServiceSection from '../Components/ServiceSection'
import AboutMe from '../Components/AboutMe'
import ProjectSection from '../Components/ProjectSection'
import Experience from '../Components/Experience'
import SkillsSection from '../Components/SkillsSection'
import ContactSection from '../Components/ContactSection'

const HomePage = () => {
  return (
    <div className=' p-0 m-0 ' >
      <NavBar />
      <HomeBanner />
      <ServiceSection />
      <AboutMe />
      <div className='h-[20px] ' >

      </div>
      <ProjectSection />
      <Experience />
      <SkillsSection />
      <ContactSection />
    </div>
  )
}

export default HomePage