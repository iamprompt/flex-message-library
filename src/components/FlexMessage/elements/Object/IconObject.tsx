import { FlexIcon } from '@line/bot-sdk'
import clsx from 'clsx'
import { CSSProperties, FC } from 'react'
import { CapitalizeString } from '../../utils'

type IconObjectProps = {
  payload: FlexIcon
}

const IconObject: FC<IconObjectProps> = ({ payload }) => {
  const {
    margin,
    size,
    position,
    aspectRatio,
    url,
    offsetTop,
    offsetBottom,
    offsetStart,
    offsetEnd,
  } = payload

  const cssStyles: CSSProperties = {}
  const iconCssStyles: CSSProperties = {}
  let cssClasses = clsx('MdIco', 'fl0')

  // Icon Url
  if (url) {
    iconCssStyles['backgroundImage'] = `url(${url})`
  }

  // Aspect Ratio
  if (aspectRatio) {
    const ratioArray = aspectRatio.split(':')
    const ratio =
      parseFloat(ratioArray[0] ?? '0') / parseFloat(ratioArray[1] ?? '0')

    iconCssStyles['width'] = `${ratio}em`
  } else {
    iconCssStyles['width'] = '1em'
  }

  // Position
  if (position) {
    cssClasses = clsx(cssClasses, position === 'absolute' && 'ExAbs')
  }

  // Margin
  if (margin) {
    if (margin.indexOf('px') > -1) {
      cssStyles['marginTop'] = margin
    } else {
      cssClasses = clsx(cssClasses, `ExMgnT${CapitalizeString(margin)}`)
    }
  }

  // Size
  if (size?.includes('px')) {
    cssStyles['fontSize'] = size
  } else {
    cssClasses = clsx(cssClasses, `Ex${CapitalizeString(size ?? 'md')}`)
  }

  // Offset Top
  if (offsetTop) {
    if (offsetTop.indexOf('px') > -1) {
      cssStyles['top'] = offsetTop
    } else {
      cssClasses = clsx(cssClasses, `ExT${CapitalizeString(offsetTop)}`)
    }
  }

  // Offset Bottom
  if (offsetBottom) {
    if (offsetBottom.indexOf('px') > -1) {
      cssStyles['bottom'] = offsetBottom
    } else {
      cssClasses = clsx(cssClasses, `ExB${CapitalizeString(offsetBottom)}`)
    }
  }

  // Offset Start
  if (offsetStart) {
    if (offsetStart.indexOf('px') > -1) {
      cssStyles['left'] = offsetStart
    } else {
      cssClasses = clsx(cssClasses, `ExL${CapitalizeString(offsetStart)}`)
    }
  }

  // Offset End
  if (offsetEnd) {
    if (offsetEnd.indexOf('px') > -1) {
      cssStyles['right'] = offsetEnd
    } else {
      cssClasses = clsx(cssClasses, `ExR${CapitalizeString(offsetEnd)}`)
    }
  }

  return (
    <div className={cssClasses} style={cssStyles}>
      <div>
        <span style={iconCssStyles} />
      </div>
    </div>
  )
}

export default IconObject
