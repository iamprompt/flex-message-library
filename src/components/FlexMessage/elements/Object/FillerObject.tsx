import { FlexFiller } from '@line/bot-sdk'
import clsx from 'clsx'
import { CSSProperties, FC } from 'react'

type FillerObjectProps = {
  payload: FlexFiller
}

const FillerObject: FC<FillerObjectProps> = ({ payload }) => {
  const { flex } = payload

  const cssStyles: CSSProperties = {}
  let cssClasses = clsx('mdBxFiller')

  // Flex
  if (flex !== undefined) {
    if (flex > 3) {
      cssStyles['WebkitBoxFlex'] = flex
      cssStyles['flexGrow'] = flex
    } else if (flex >= 0) {
      cssClasses = clsx(cssClasses, `fl${flex}`)
    }
  }

  return <div className={cssClasses} style={cssStyles} />
}

export default FillerObject
