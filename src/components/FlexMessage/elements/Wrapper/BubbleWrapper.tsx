import { FlexBubble } from '@line/bot-sdk'
import { FC } from 'react'
import { CapitalizeString } from '../../utils'
import BodyWrapper from './BodyWrapper'
import FooterWrapper from './FooterWrapper'
import HeaderWrapper from './HeaderWrapper'
import HeroWrapper from './HeroWrapper'

interface BubbleWrapperProps {
  payload: FlexBubble
}

const BubbleWrapper: FC<BubbleWrapperProps> = ({ payload }) => {
  const { size = 'mega', direction = 'ltr' } = payload
  return (
    <div className={`lyItem Ly${CapitalizeString(size, 2)}`}>
      <div className={`T1 fx${direction.toUpperCase()}`} dir={`${direction}`}>
        <HeroWrapper payload={payload.hero} styles={payload.styles?.hero} />
        <HeaderWrapper payload={payload.header} styles={payload.styles?.header} />
        <BodyWrapper payload={payload.body} styles={payload.styles?.body} />
        <FooterWrapper payload={payload.footer} styles={payload.styles?.footer} />
      </div>
    </div>
  )
}

export default BubbleWrapper
