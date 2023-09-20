import { IMetadata } from './types'

const modules = import.meta.glob(
  ['./*.ts', './**/*.ts', '!./index.ts', '!./types.ts'],
  { eager: true },
)

export const allFlexMessages = Object.entries(modules).map(([path, module]) => {
  const { default: metadata } = module as { default: IMetadata }
  return metadata
})
