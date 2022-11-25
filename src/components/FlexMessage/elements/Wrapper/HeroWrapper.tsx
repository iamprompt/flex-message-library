import { FlexBlockStyle, FlexBubble, FlexMessage } from '@line/bot-sdk'
import { FC } from 'react'
import ExtractComponent from '../ExtractComponent'
import BaseWrapper from './BaseWrapper'

interface HeroWrapperProps {
  payload: FlexBubble['hero']
  styles?: FlexBlockStyle
}

const HeroWrapper: FC<HeroWrapperProps> = ({ payload, styles }) => {
  if (!payload) return null

  return (
    <BaseWrapper type="Hero" styles={styles}>
      {ExtractComponent(payload)}
    </BaseWrapper>
  )
}

export default HeroWrapper
