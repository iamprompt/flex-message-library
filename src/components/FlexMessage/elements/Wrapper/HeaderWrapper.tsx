import { FlexBlockStyle, FlexBubble } from '@line/bot-sdk'
import { FC } from 'react'
import ExtractComponent from '../ExtractComponent'
import BaseWrapper from './BaseWrapper'

interface HeaderWrapperProps {
  payload: FlexBubble['header']
  styles?: FlexBlockStyle
}

const HeaderWrapper: FC<HeaderWrapperProps> = ({ payload, styles }) => {
  if (!payload) return null

  return (
    <BaseWrapper type="Header" styles={styles}>
      {ExtractComponent(payload)}
    </BaseWrapper>
  )
}

export default HeaderWrapper
