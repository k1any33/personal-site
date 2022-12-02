import { IconType } from 'react-icons'
import {
  SiAmazon,
  SiCplusplus,
  SiCsharp,
  SiDocker,
  SiDotnet,
  SiExpress,
  SiFirebase,
  SiGithub,
  SiGitlab,
  SiJava,
  SiJavascript,
  SiJest,
  SiMicrosoftsqlserver,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
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
  cpp: {
    name: 'C++',
    icon: SiCplusplus,
  },
  python: {
    name: 'Python',
    icon: SiPython,
  },
  java: {
    name: 'Java',
    icon: SiJava,
  },
  csharp: {
    name: 'C#',
    icon: SiCsharp,
  },
  reactjs: {
    name: 'ReactJs',
    icon: SiReact,
  },
  nextjs: {
    name: 'NextJs',
    icon: SiNextdotjs,
  },
  nodejs: {
    name: 'NodeJs',
    icon: SiNodedotjs,
  },
  nestjs: {
    name: 'NestJs',
    icon: SiNestjs,
  },
  express: {
    name: 'Express',
    icon: SiExpress,
  },
  dotnet: {
    name: 'Asp.net',
    icon: SiDotnet,
  },
  mongodb: {
    name: 'Mongo',
    icon: SiMongodb,
  },
  microsoftsql: {
    name: 'Sql',
    icon: SiMicrosoftsqlserver,
  },
  sql: {
    name: 'SQL',
    icon: SiPostgresql,
  },
  firebase: {
    name: 'Firebase',
    icon: SiFirebase,
  },
  gitlab: {
    name: 'Gitlab',
    icon: SiGitlab,
  },
  github: {
    name: 'Github',
    icon: SiGithub,
  },
  docker: {
    name: 'Docker',
    icon: SiDocker,
  },
  aws: {
    name: 'Aws',
    icon: SiAmazon,
  },
  jest: {
    name: 'Jest',
    icon: SiJest,
  },
}
