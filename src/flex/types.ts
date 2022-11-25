import { FlexContainer } from '@line/bot-sdk'

export type ISourceLink = {
  label: string
  link: string
}

export type ISourceGithub = {
  githubUsername: string
}

export type IMetadata = {
  name: string
  description: string
  flexMessage: FlexContainer
  source: ISourceLink | ISourceGithub
}
