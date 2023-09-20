import { FlexButton } from '@line/bot-sdk'
import clsx from 'clsx'
import { CSSProperties, FC } from 'react'
import { SizeMapping, CapitalizeString } from '../../utils'

type ButtonObjectProps = {
  payload: FlexButton
}

const ButtonObject: FC<ButtonObjectProps> = ({ payload }) => {
  const {
    flex,
    margin,
    position,
    height,
    style,
    color,
    gravity,
    adjustMode: _adjustMode, // Do not support
    offsetTop,
    offsetBottom,
    offsetStart,
    offsetEnd,
    action = {
      type: 'none',
      label: '',
    },
  } = payload

  const outerCssStyles: CSSProperties = {}
  const innerCssStyles: CSSProperties = {}
  let cssClasses = clsx('MdBtn')

  // Flex
  if (flex !== undefined) {
    if (flex > 3) {
      outerCssStyles['WebkitBoxFlex'] = flex
      outerCssStyles['flexGrow'] = flex
    } else if (flex >= 0) {
      cssClasses = clsx(cssClasses, `fl${flex}`)
    }
  }

  // Position
  if (position) {
    cssClasses = clsx(cssClasses, position === 'absolute' && 'ExAbs')
  }

  // Height
  if (height) {
    if (height !== 'md') {
      cssClasses = clsx(cssClasses, `Ex${SizeMapping(height)}`)
    }
  }

  // Margin
  if (margin) {
    if (margin.indexOf('px') > -1) {
      outerCssStyles['marginTop'] = margin
    } else {
      cssClasses = clsx(cssClasses, `ExMgnT${SizeMapping(margin)}`)
    }
  }

  // Gravity
  if (gravity) {
    cssClasses = clsx(
      cssClasses,
      ['bottom', 'center'].includes(gravity) &&
        `grv${CapitalizeString(gravity, 1)}`,
    )
  }

  // Color
  if (color) {
    innerCssStyles['backgroundColor'] = color
  }

  // Style
  if (style) {
    cssClasses = clsx(
      cssClasses,
      style === 'primary'
        ? 'ExBtn1'
        : style === 'secondary'
        ? 'ExBtn2'
        : style === 'link'
        ? 'ExBtnL'
        : 'ExBtnL',
    )
  }

  // Offset Top
  if (offsetTop) {
    if (offsetTop.indexOf('px') > -1) {
      outerCssStyles['top'] = offsetTop
    } else {
      cssClasses = clsx(cssClasses, `ExT${SizeMapping(offsetTop)}`)
    }
  }

  // Offset Bottom
  if (offsetBottom) {
    if (offsetBottom.indexOf('px') > -1) {
      outerCssStyles['bottom'] = offsetBottom
    } else {
      cssClasses = clsx(cssClasses, `ExB${SizeMapping(offsetBottom)}`)
    }
  }

  // Offset Start
  if (offsetStart) {
    if (offsetStart.indexOf('px') > -1) {
      outerCssStyles['left'] = offsetStart
    } else {
      cssClasses = clsx(cssClasses, `ExL${SizeMapping(offsetStart)}`)
    }
  }

  // Offset End
  if (offsetEnd) {
    if (offsetEnd.indexOf('px') > -1) {
      outerCssStyles['right'] = offsetEnd
    } else {
      cssClasses = clsx(cssClasses, `ExR${SizeMapping(offsetEnd)}`)
    }
  }

  return (
    <div className={cssClasses} style={outerCssStyles}>
      {action.type === 'uri' ? (
        <a href={action.uri} target="_blank" style={innerCssStyles}>
          <div>{action.label}</div>
        </a>
      ) : action.type === 'message' ? (
        <a
          onClick={(e) => {
            e.preventDefault()
            console.log(`Message: ${action.text}`)
          }}
          style={innerCssStyles}
        >
          <div>{action.label}</div>
        </a>
      ) : action.type === 'postback' ? (
        <a
          onClick={(e) => {
            e.preventDefault()
            console.log(`Postback: ${action.data}`)
          }}
          style={innerCssStyles}
        >
          <div>{action.label}</div>
        </a>
      ) : (
        <a style={innerCssStyles}>
          <div>{action.label}</div>
        </a>
      )}
    </div>
  )
}

export default ButtonObject
