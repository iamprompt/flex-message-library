import { FlexSpacer } from '@line/bot-sdk'
import clsx from 'clsx'
import { CSSProperties, FC } from 'react'
import { SizeMapping } from '../../utils'

type SpacerObjectProps = {
  payload: FlexSpacer
}

const SpacerObject: FC<SpacerObjectProps> = ({ payload }) => {
  const { size } = payload

  const cssStyles: CSSProperties = {}
  let cssClasses = clsx('mdBxSpacer', 'fl0')

  // Size
  if (size?.includes('px')) {
    cssStyles['fontSize'] = size
  } else {
    cssClasses = clsx(cssClasses, `Ex${SizeMapping(size ?? 'md')}`)
  }

  return <div className={cssClasses} style={cssStyles} />
}

export default SpacerObject
