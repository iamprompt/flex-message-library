import { FlexText } from '@line/bot-sdk'
import clsx from 'clsx'
import { CSSProperties, FC } from 'react'
import { SizeMapping, CapitalizeString } from '../../utils'
import ExtractComponent from '../ExtractComponent'

type TextObjectProps = {
  payload: FlexText
}

const TextObject: FC<TextObjectProps> = ({ payload }) => {
  const {
    flex,
    margin,
    size,
    position,
    align,
    gravity,
    text,
    color,
    weight,
    style,
    decoration,
    wrap,
    maxLines: _maxLines, // Do not support
    adjustMode: _adjustMode, // Do not support
    offsetTop,
    offsetBottom,
    offsetStart,
    offsetEnd,
    lineSpacing,
  } = payload

  const cssStyles: CSSProperties = {}
  let cssClasses = clsx('MdTxt')

  console.log(flex, text)

  // Flex
  if (flex !== undefined) {
    if (flex > 3) {
      cssStyles['WebkitBoxFlex'] = flex
      cssStyles['flexGrow'] = flex
    } else if (flex >= 0) {
      cssClasses = clsx(cssClasses, `fl${flex}`)
    }
  }

  // Position
  if (position) {
    cssClasses = clsx(cssClasses, position && 'ExAbs')
  }

  // Margin
  if (margin) {
    if (margin.indexOf('px') > -1) {
      cssStyles['marginTop'] = margin
    } else {
      cssClasses = clsx(cssClasses, `ExMgnT${SizeMapping(margin)}`)
    }
  }

  // Align
  if (align) {
    cssClasses = clsx(cssClasses, `ExAlg${CapitalizeString(align, 1)}`)
  }

  // Gravity
  if (gravity) {
    cssClasses = clsx(cssClasses, ['bottom', 'center'].includes(gravity) && `grv${CapitalizeString(gravity, 1)}`)
  }

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

  // Wrap
  cssClasses = clsx(cssClasses, wrap && 'ExWrap')

  // Offset Top
  if (offsetTop) {
    if (offsetTop.indexOf('px') > -1) {
      cssStyles['top'] = offsetTop
    } else {
      cssClasses = clsx(cssClasses, `ExT${SizeMapping(offsetTop)}`)
    }
  }

  // Offset Bottom
  if (offsetBottom) {
    if (offsetBottom.indexOf('px') > -1) {
      cssStyles['bottom'] = offsetBottom
    } else {
      cssClasses = clsx(cssClasses, `ExB${SizeMapping(offsetBottom)}`)
    }
  }

  // Offset Start
  if (offsetStart) {
    if (offsetStart.indexOf('px') > -1) {
      cssStyles['left'] = offsetStart
    } else {
      cssClasses = clsx(cssClasses, `ExL${SizeMapping(offsetStart)}`)
    }
  }

  // Offset End
  if (offsetEnd) {
    if (offsetEnd.indexOf('px') > -1) {
      cssStyles['right'] = offsetEnd
    } else {
      cssClasses = clsx(cssClasses, `ExR${SizeMapping(offsetEnd)}`)
    }
  }

  // Line Spacing
  if (lineSpacing) {
    if (lineSpacing.indexOf('px') > -1) {
      cssStyles['lineHeight'] = `${parseInt(lineSpacing.replace('px', '')) + 15}px`
    }
  }

  return (
    <div className={cssClasses} style={cssStyles}>
      <p>
        {text}
        {payload.contents?.map((content) => ExtractComponent(content))}
      </p>
    </div>
  )
}

export default TextObject
