import { FlexContainer } from '@line/bot-sdk'

export type ISourceLink = {
  type: 'link'
  label: string
  link: string
}

export type ISourceGithub = {
  type: 'github'
  githubUsername: string
}

export type IMetadata = {
  name: string
  description: string
  flexMessage: FlexContainer
  source: ISourceLink | ISourceGithub
}
