import Image from 'next/image'
import React from 'react'
import { WorkExperienceDataType } from '../../utils/work.data'
import { AiFillStar } from 'react-icons/ai'
import SkillsCard from './SkillsCard'

type Props = {
  workExperience: WorkExperienceDataType
}

const WorkCard = ({ workExperience }: Props) => {
  const { companyLogo, companyName, role, date, descriptions, skills } =
    workExperience

  return (
    <div className="flex w-full flex-row px-8 py-4">
      <div className="relative h-16 w-16 px-3">
        <Image src={companyLogo} alt="affinidi" layout="fill" />
      </div>
      <div className="flex flex-col px-8">
        <h2 className="text-2xl font-bold">{companyName}</h2>
        <p className="italic">{role}</p>
        <p>{date}</p>
        <ul className="py-6">
          {descriptions.map((description) => {
            return (
              <li key={description} className="flex items-start py-0.5">
                <div className="mt-1 mr-2 min-h-[1rem] min-w-[1rem]">
                  <AiFillStar />
                </div>
                {description}
              </li>
            )
          })}
        </ul>
        <div className="flex flex-row flex-wrap items-center">
          <p className="pr-2 font-bold">Skills:</p>
          {skills.map(({ name, icon }) => {
            return <SkillsCard key={name} Icon={icon} skill={name} />
          })}
        </div>
      </div>
    </div>
  )
}

export default WorkCard
