import { IconType } from 'react-icons'

type Props = {
  Icon: IconType
  skill: string
}

const SkillsCard = ({ Icon, skill }: Props) => {
  return (
    <div className="m-1 flex h-6 flex-row items-center rounded-md bg-base-300 px-3 py-4">
      <Icon />
      <p className="pl-2">{skill}</p>
    </div>
  )
}

export default SkillsCard
