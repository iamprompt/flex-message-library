import { FlexBox } from '@line/bot-sdk'
import clsx from 'clsx'
import { CSSProperties, FC } from 'react'
import { SizeMapping } from '../../utils'
import ExtractComponent from '../ExtractComponent'

type BoxObjectProps = {
  payload: FlexBox
}

const BoxObject: FC<BoxObjectProps> = ({ payload }) => {
  const {
    layout,
    position,
    flex,
    spacing,
    margin,
    width,
    height,
    backgroundColor,
    borderColor,
    borderWidth,
    cornerRadius,
    justifyContent,
    alignItems,
    offsetTop,
    offsetBottom,
    offsetStart,
    offsetEnd,
    paddingAll,
    paddingTop,
    paddingBottom,
    paddingStart,
    paddingEnd,
    background,
    maxWidth,
    maxHeight,
  } = payload

  const cssStyles: CSSProperties = {}
  let cssClasses = clsx('MdBx')

  // Layout
  if (layout) {
    cssClasses = clsx(
      cssClasses,
      layout === 'baseline' && ['hr', 'bl'],
      layout === 'vertical' && ['vr'],
      layout === 'horizontal' && ['hr'],
    )
  }

  // Position
  if (position) {
    cssClasses = clsx(cssClasses, position === 'absolute' && 'ExAbs')
  }

  // Flex
  if (flex !== undefined) {
    if (flex > 3) {
      cssStyles['WebkitBoxFlex'] = flex
      cssStyles['flexGrow'] = flex
    } else if (flex >= 0) {
      cssClasses = clsx(cssClasses, `fl${flex}`)
    }
  }

  if (spacing) {
    if (spacing.indexOf('px') > -1) {
      // Do nothing!
    } else {
      cssClasses = clsx(cssClasses, `spc${SizeMapping(spacing)}`)
    }
  }

  // Margin
  if (margin) {
    if (margin.indexOf('px') > -1) {
      cssStyles['marginTop'] = margin
    } else {
      cssClasses = clsx(cssClasses, `ExMgnT${SizeMapping(margin)}`)
    }
  }

  // Height
  if (height) {
    cssStyles['height'] = height
  }

  // Width
  if (width) {
    cssStyles['width'] = width
    cssStyles['maxWidth'] = width
  }

  // Background Color
  if (backgroundColor) {
    cssStyles['backgroundColor'] = `${backgroundColor}`
  }

  // Border Color

  console.log(borderColor, JSON.stringify(payload, null, 2))

  if (borderColor) {
    cssStyles['borderColor'] = `${borderColor}`
  }

  if (borderWidth) {
    if (borderWidth.indexOf('px') > -1) {
      cssStyles['borderWidth'] = borderWidth
    } else {
      cssClasses = clsx(
        cssClasses,
        borderWidth === 'none' && 'ExBdrWdtNone',
        borderWidth === 'light' && 'ExBdrWdtLgh',
        borderWidth === 'normal' && 'ExBdrWdtNml',
        borderWidth === 'medium' && 'ExBdrWdtMdm',
        borderWidth === 'semi-bold' && 'ExBdrWdtSbd',
        borderWidth === 'bold' && 'ExBdrWdtBld',
      )
    }
  }

  // Corner Radius
  if (cornerRadius) {
    if (cornerRadius.indexOf('px') > -1) {
      cssStyles['borderRadius'] = cornerRadius
    } else {
      cssClasses = clsx(cssClasses, `ExBdrRad${SizeMapping(cornerRadius)}`)
    }
  }

  // Justify Content
  if (justifyContent) {
    cssClasses = clsx(
      cssClasses,
      justifyContent === 'center' && 'itms-jfcC',
      justifyContent === 'flex-start' && 'itms-jfcS',
      justifyContent === 'flex-end' && 'itms-jfcE',
      justifyContent === 'space-between' && 'itms-jfcSB',
      justifyContent === 'space-around' && 'itms-jfcSA',
      justifyContent === 'space-evenly' && 'itms-jfcSE',
    )
  }

  // Align Items
  if (alignItems) {
    cssClasses = clsx(
      cssClasses,
      alignItems === 'center' && 'itms-algC',
      alignItems === 'flex-start' && 'itms-algS',
      alignItems === 'flex-end' && 'itms-algE',
    )
  }

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

  // Padding All
  if (paddingAll) {
    if (paddingAll.indexOf('px') > -1) {
      cssStyles['padding'] = paddingAll
    } else {
      cssClasses = clsx(cssClasses, `ExPadA${SizeMapping(paddingAll)}`)
    }
  }

  // Padding Top
  if (paddingTop) {
    if (paddingTop.indexOf('px') > -1) {
      cssStyles['paddingTop'] = paddingTop
    } else {
      cssClasses = clsx(cssClasses, `ExPadT${SizeMapping(paddingTop)}`)
    }
  }

  // Padding Bottom
  if (paddingBottom) {
    if (paddingBottom.indexOf('px') > -1) {
      cssStyles['paddingBottom'] = paddingBottom
    } else {
      cssClasses = clsx(cssClasses, `ExPadB${SizeMapping(paddingBottom)}`)
    }
  }

  // Padding Start
  if (paddingStart) {
    if (paddingStart.indexOf('px') > -1) {
      cssStyles['paddingLeft'] = paddingStart
    } else {
      cssClasses = clsx(cssClasses, `ExPadL${SizeMapping(paddingStart)}`)
    }
  }

  // Padding End
  if (paddingEnd) {
    if (paddingEnd.indexOf('px') > -1) {
      cssStyles['paddingRight'] = paddingEnd
    } else {
      cssClasses = clsx(cssClasses, `ExPadR${SizeMapping(paddingEnd)}`)
    }
  }

  // Background
  if (background) {
    if (background.type === 'linearGradient') {
      const {
        angle,
        startColor,
        endColor,
        centerColor,
        centerPosition = '50%',
      } = background
      if (centerColor) {
        cssStyles[
          'background'
        ] = `linear-gradient(${angle}, ${startColor} 0%, ${centerColor} ${centerPosition}, ${endColor} 100%)`
      } else {
        cssStyles[
          'background'
        ] = `linear-gradient(${angle}, ${startColor} 0%, ${endColor} 100%)`
      }
    }
  }

  // Max Width
  if (maxWidth) {
    if (maxWidth.indexOf('px') > -1) {
      cssStyles['maxWidth'] = maxWidth
    }
  }

  // Max Height
  if (maxHeight) {
    if (maxHeight.indexOf('px') > -1) {
      cssStyles['maxHeight'] = maxHeight
    }
  }

  return (
    <div className={cssClasses} style={cssStyles}>
      {payload.contents.map((content) => {
        return ExtractComponent(content)
      })}
    </div>
  )
}

export default BoxObject
