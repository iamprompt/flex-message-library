import { FlexBlockStyle, FlexBubble } from '@line/bot-sdk'
import { FC } from 'react'
import ExtractComponent from '../ExtractComponent'
import BaseWrapper from './BaseWrapper'

interface BodyWrapperProps {
  payload?: FlexBubble['body']
  styles?: FlexBlockStyle
  hasFooter?: boolean
}

const BodyWrapper: FC<BodyWrapperProps> = ({ payload, styles, hasFooter = false }) => {
  if (!payload) return null

  return (
    <BaseWrapper type="Body" hasFooter={hasFooter} styles={styles}>
      {ExtractComponent(payload)}
    </BaseWrapper>
  )
}

export default BodyWrapper
