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
    <div className="my-2 flex w-full flex-row py-4 md:px-10">
      <div className="relative mt-2 h-12 w-12 min-w-[3rem] px-1">
        <Image src={companyLogo} alt={companyName} layout="fill" />
      </div>
      <div className="flex flex-col pl-3 md:pl-8">
        <h2 className="text-2xl font-bold">{companyName}</h2>
        <p className="italic">{role}</p>
        <p>{date}</p>
        <ul className="py-6">
          {descriptions.map((description) => {
            return (
              <li key={description} className="flex items-start py-0.5">
                <div className="mt-1 mr-1 min-h-[1rem] min-w-[1rem]">
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
