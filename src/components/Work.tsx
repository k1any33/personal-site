import React from 'react'
import { ScrollLinkId } from '../utils/scrollLinkId.enum'
import { WorkExperienceData } from '../utils/work.data'
import Card from './Card'
import WorkCard from './Card/WorkCard'
import Container from './container'
import Header from './header'

const Work = () => {
  return (
    <Container scrollLinkId={ScrollLinkId.Work}>
      <Header
        title="My Experiences"
        description="Internships and Work Experiences"
      />
      <Card>
        <h2 className="card-title p-2 text-3xl md:px-8">Internships</h2>
        {WorkExperienceData.map((workExperience) => {
          return (
            <WorkCard
              key={workExperience.companyName}
              workExperience={workExperience}
            />
          )
        })}
      </Card>
    </Container>
  )
}

export default Work
