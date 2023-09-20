import { FlexMessage } from '@line/bot-sdk'
import { FC } from 'react'
import BubbleWrapper from './elements/Wrapper/BubbleWrapper'
import CarouselWrapper from './elements/Wrapper/CarouselWrapper'

interface FlexMessageProps {
  payload: FlexMessage
}

const FlexMessageObject: FC<FlexMessageProps> = ({ payload }) => {
  if (payload.type !== 'flex') {
    return null
  }

  if (payload.contents.type === 'carousel') {
    return (
      <CarouselWrapper>
        {payload.contents.contents.map((bubble, index) => (
          <BubbleWrapper key={index} payload={bubble} />
        ))}
      </CarouselWrapper>
    )
  } else if (payload.contents.type === 'bubble') {
    return (
      // <CarouselWrapper>
      <BubbleWrapper payload={payload.contents} />
      // </CarouselWrapper>
    )
  }

  return null
}

export default FlexMessageObject
