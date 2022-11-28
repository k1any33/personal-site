import { IconType } from 'react-icons'
import {
  SiAmazon,
  SiCsharp,
  SiDocker,
  SiDotnet,
  SiJavascript,
  SiMicrosoftsqlserver,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiTypescript,
} from 'react-icons/si'

export type SkillsType = {
  name: string
  icon: IconType
}

export const skills: Record<string, SkillsType> = {
  typescript: {
    name: 'TypeScript',
    icon: SiTypescript,
  },
  javascript: {
    name: 'JavaScript',
    icon: SiJavascript,
  },
  nextjs: {
    name: 'NextJs',
    icon: SiNextdotjs,
  },
  csharp: {
    name: 'C#',
    icon: SiCsharp,
  },
  microsoftsql: {
    name: 'MicrosoftSql',
    icon: SiMicrosoftsqlserver,
  },
  dotnet: {
    name: 'Asp.net',
    icon: SiDotnet,
  },
  aws: {
    name: 'Aws',
    icon: SiAmazon,
  },
  mongodb: {
    name: 'MongoDb',
    icon: SiMongodb,
  },
  docker: {
    name: 'Docker',
    icon: SiDocker,
  },
  nestjs: {
    name: 'NestJs',
    icon: SiNestjs,
  },
}
