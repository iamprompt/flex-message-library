import { FlexBlockStyle, FlexBubble } from '@line/bot-sdk'
import { FC } from 'react'
import ExtractComponent from '../ExtractComponent'
import BaseWrapper from './BaseWrapper'

interface FooterWrapperProps {
  payload: FlexBubble['footer']
  styles?: FlexBlockStyle
}

const FooterWrapper: FC<FooterWrapperProps> = ({ payload, styles }) => {
  if (!payload) return null

  return (
    <BaseWrapper type="Footer" styles={styles}>
      {ExtractComponent(payload)}
    </BaseWrapper>
  )
}

export default FooterWrapper
