import { FlexImage } from '@line/bot-sdk'
import clsx from 'clsx'
import { CSSProperties, FC } from 'react'
import { CapitalizeString, SizeMapping } from '../../utils'

type ImageObjectProps = {
  payload: FlexImage
}

const ImageObject: FC<ImageObjectProps> = ({ payload }) => {
  const {
    aspectMode = 'fit',
    size = 'md',
    aspectRatio,
    url,
    position,
    flex,
    margin,
    align,
    gravity,
    backgroundColor,
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
  const imageWrapperStyles: CSSProperties = {}
  const imageStyles: CSSProperties = {}
  let cssClasses = clsx('MdImg')

  // Background Image
  if (url) {
    imageStyles['backgroundImage'] = `url(${url})`
  }
  if (backgroundColor) {
    imageStyles['backgroundColor'] = `${backgroundColor}`
  }

  // Aspect Mode
  cssClasses = clsx(cssClasses, `Ex${CapitalizeString(aspectMode)}`)

  // Size
  if (size) {
    if (size.indexOf('px') > -1 || size.indexOf('%') > -1) {
      innerCssStyles['width'] = size
    } else {
      cssClasses = clsx(cssClasses, `Ex${SizeMapping(size)}`)
    }
  }

  // Aspect Ratio
  // Aspect Ratio
  let imagePadding = 100
  if (aspectRatio) {
    const ratioArray = aspectRatio.split(':')
    imagePadding =
      (parseFloat(ratioArray[1] ?? '0') * 100) /
      parseFloat(ratioArray[0] ?? '0')
  }
  imageWrapperStyles['paddingBottom'] = `${imagePadding}%`

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

  // Margin
  if (margin) {
    if (margin.indexOf('px') > -1) {
      outerCssStyles['marginTop'] = margin
    } else {
      cssClasses = clsx(cssClasses, `ExMgnT${SizeMapping(margin)}`)
    }
  }

  // Align
  if (align) {
    cssClasses = clsx(cssClasses, `alg${CapitalizeString(align, 1)}`)
  }

  // Gravity
  if (gravity) {
    cssClasses = clsx(
      cssClasses,
      ['bottom', 'center'].includes(gravity) &&
        `grv${CapitalizeString(gravity, 1)}`,
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
        <div style={innerCssStyles}>
          <a href={action.uri} target="_blank" style={imageWrapperStyles}>
            <span style={imageStyles} />
          </a>
        </div>
      ) : action.type === 'message' ? (
        <div style={innerCssStyles}>
          <a
            onClick={(e) => {
              e.preventDefault()
              console.log(`Message: ${action.text}`)
            }}
            style={imageWrapperStyles}
          >
            <span style={imageStyles} />
          </a>
        </div>
      ) : action.type === 'postback' ? (
        <div style={innerCssStyles}>
          <a
            onClick={(e) => {
              e.preventDefault()
              console.log(`Postback: ${action.data}`)
            }}
            style={imageWrapperStyles}
          >
            <span style={imageStyles} />
          </a>
        </div>
      ) : (
        <div style={innerCssStyles}>
          <a style={imageWrapperStyles}>
            <span style={imageStyles} />
          </a>
        </div>
      )}
    </div>
  )
}

export default ImageObject
