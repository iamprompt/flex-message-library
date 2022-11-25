import { FlexBlockStyle } from '@line/bot-sdk'
import clsx from 'clsx'
import { CSSProperties, FC } from 'react'

type BaseWrapperProps = {
  type: 'Header' | 'Hero' | 'Body' | 'Footer'
  hasFooter?: boolean
  children?: React.ReactNode
  styles?: FlexBlockStyle
}

const BaseWrapper: FC<BaseWrapperProps> = ({ type, hasFooter = false, styles, children }) => {
  return (
    <div
      className={clsx(`t1${type}`, hasFooter && 'ExHasFooter')}
      style={{
        backgroundColor: styles?.backgroundColor ?? undefined,
      }}
    >
      {children}
    </div>
  )
}

export default BaseWrapper
