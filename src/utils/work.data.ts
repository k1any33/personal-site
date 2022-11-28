import { StaticImageData } from 'next/image'
import AffinidiLogo from '../../public/images/affinidi-logo.png'
import AnacleLogo from '../../public/images/anacle-logo.png'
import { skills, SkillsType } from './skills.data'

export type WorkExperienceDataType = {
  companyName: string
  companyLogo: StaticImageData
  role: string
  date: string
  descriptions: string[]
  skills: SkillsType[]
}

export const WorkExperienceData: WorkExperienceDataType[] = [
  {
    companyName: 'Affinidi',
    companyLogo: AffinidiLogo,
    role: 'Software Engineer - Full Stack',
    date: 'May 2022 - Present',
    descriptions: [
      'Developing self-sovereign identity (SSI) solutions with verifiable credentials with NestJs, NextJs & MongoDb',
      'Adopted Agile project management methodology using Jira with weekly sprints',
    ],
    skills: [
      skills['typescript'],
      skills['nextjs'],
      skills['nestjs'],
      skills['mongodb'],
      skills['aws'],
    ],
  },
  {
    companyName: 'Anacle Systems',
    companyLogo: AnacleLogo,
    role: 'Software Engineer Intern',
    date: 'Jan 2022 - May 2022',
    descriptions: [
      'Implemented Multi-Factor Authentication and OIDC in existing solution for multiple business ventures such as HDB and NEA',
      'Architected existing application using Next JS with Typescript',
    ],
    skills: [
      skills['typescript'],
      skills['nextjs'],
      skills['csharp'],
      skills['dotnet'],
      skills['microsoftsql'],
    ],
  },
]
