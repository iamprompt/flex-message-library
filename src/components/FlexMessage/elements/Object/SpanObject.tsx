import { FlexSpan } from '@line/bot-sdk'
import clsx from 'clsx'
import { CSSProperties, FC } from 'react'
import { SizeMapping } from '../../utils'

type SpanObjectProps = {
  payload: FlexSpan
}

const SpanObject: FC<SpanObjectProps> = ({ payload }) => {
  const { text, size, color, weight, style, decoration } = payload

  const cssStyles: CSSProperties = {}
  let cssClasses = clsx('MdSpn')

  // Size
  if (size?.includes('px')) {
    cssStyles['fontSize'] = size
  } else {
    cssClasses = clsx(cssClasses, size && `Ex${SizeMapping(size)}`)
  }

  // Color
  if (color) {
    cssStyles['color'] = color
  }

  // Weight
  if (weight) {
    cssClasses = clsx(cssClasses, weight === 'bold' && 'ExWB')
  }

  // Style
  if (style) {
    cssClasses = clsx(cssClasses, style === 'normal' && 'ExFntStyNml', style === 'italic' && 'ExFntStyIt')
  }

  // Decoration
  if (decoration) {
    cssClasses = clsx(
      cssClasses,
      decoration === 'none' && 'ExTxtDecNone',
      decoration === 'underline' && 'ExTxtDecUl',
      decoration === 'line-through' && 'ExTxtDecLt'
    )
  }

  return (
    <span className={cssClasses} style={cssStyles}>
      {text}
    </span>
  )
}

export default SpanObject
