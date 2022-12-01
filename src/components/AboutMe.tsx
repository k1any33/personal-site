import React from 'react'
import { ScrollLinkId } from '../utils/scrollLinkId.enum'
import { skills, SkillsType } from '../utils/skills.data'
import SkillCard from './Card/SkillCard'
import Container from './container'
import Header from './header'

const AboutMe = () => {
  const languages: SkillsType[] = [
    skills['typescript'],
    skills['javascript'],
    skills['python'],
    skills['cpp'],
    skills['csharp'],
  ]

  const technologies: SkillsType[] = [
    skills['nextjs'],
    skills['express'],
    skills['mongodb'],
    skills['docker'],
    skills['aws'],
  ]

  return (
    <Container scrollLinkId={ScrollLinkId.AboutMe}>
      <Header title="About Me" description="Discover my interests and skills" />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="min-h-16 w-full px-6 pb-1 md:px-20">
          <div className="my-6 text-center">
            <h2 className="text-3xl font-semibold leading-7">About Me</h2>
          </div>
          <p>
            I am currently a final year student at Nanyang Technological
            University (NTU), perusing a degree in Electrical & Electronic
            Engineering
          </p>
          <br />
          <p>
            Throughout my previous internships, I have accumulated experiences
            in full stack development with ReactJs, ExpressJs and MongoDb while
            working in an agile environment
          </p>
          <br />
          <p>
            I am also a motivated indiviudal who is passionate in learning new
            skills and technologies through various avenues. I am currently
            exploring low latency C++
          </p>
        </div>
        <div className="card my-10 mx-2 flex flex-col bg-base-200 p-8 shadow-xl md:mx-10">
          <h2 className="mb-6 text-3xl font-semibold leading-7">Key Skills</h2>
          <h3 className="text-xl">Languages</h3>
          <div className="flex flex-wrap gap-2 py-4">
            {languages.map(({ name, icon }) => {
              return <SkillCard key={name} Icon={icon} skill={name} />
            })}
          </div>
          <h3 className="text-xl">Technologies</h3>
          <div className="flex flex-wrap gap-2 py-4">
            {technologies.map(({ name, icon }) => {
              return <SkillCard key={name} Icon={icon} skill={name} />
            })}
          </div>
        </div>
      </div>
    </Container>
  )
}

export default AboutMe
