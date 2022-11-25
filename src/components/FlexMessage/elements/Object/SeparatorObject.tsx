import { FlexSeparator } from '@line/bot-sdk'
import clsx from 'clsx'
import { CSSProperties, FC } from 'react'
import { SizeMapping } from '../../utils'

type SeparatorObjectProps = {
  payload: FlexSeparator
}

const SeparatorObject: FC<SeparatorObjectProps> = ({ payload }) => {
  const { margin, color } = payload

  const cssStyles: CSSProperties = {}
  let cssClasses = clsx('MdSep', 'fl0')

  // Color
  if (color) {
    cssStyles['borderColor'] = `${color}`
  }

  // Margin
  if (margin) {
    if (margin.indexOf('px') > -1) {
      cssStyles['marginTop'] = margin
    } else {
      cssClasses = clsx(cssClasses, `ExMgnT${SizeMapping(margin)}`)
    }
  }

  return <div className={cssClasses} style={cssStyles} />
}

export default SeparatorObject
