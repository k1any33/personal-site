import { IconType } from 'react-icons'
import {
  SiAmazon,
  SiCplusplus,
  SiCsharp,
  SiDocker,
  SiDotnet,
  SiExpress,
  SiJavascript,
  SiMicrosoftsqlserver,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiPython,
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
    name: 'Sql',
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
    name: 'Mongo',
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
  cpp: {
    name: 'C++',
    icon: SiCplusplus,
  },
  python: {
    name: 'Python',
    icon: SiPython,
  },
  express: {
    name: 'Express',
    icon: SiExpress,
  },
}
