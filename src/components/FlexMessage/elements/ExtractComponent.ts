import type { FlexComponent } from '@line/bot-sdk'
import BoxObject from './Object/BoxObject'
import ButtonObject from './Object/ButtonObject'
import FillerObject from './Object/FillerObject'
import IconObject from './Object/IconObject'
import ImageObject from './Object/ImageObject'
import SeparatorObject from './Object/SeparatorObject'
import SpacerObject from './Object/SpacerObject'
import SpanObject from './Object/SpanObject'
import TextObject from './Object/TextObject'

const ExtractComponent = (component: FlexComponent) => {
  const { type } = component

  const ExtComponent =
    type === 'box'
      ? BoxObject({ payload: component })
      : type === 'button'
      ? ButtonObject({ payload: component })
      : type === 'filler'
      ? FillerObject({ payload: component })
      : type === 'icon'
      ? IconObject({ payload: component })
      : type === 'image'
      ? ImageObject({ payload: component })
      : type === 'separator'
      ? SeparatorObject({ payload: component })
      : type === 'spacer'
      ? SpacerObject({ payload: component })
      : type === 'text'
      ? TextObject({ payload: component })
      : type === 'span'
      ? SpanObject({ payload: component })
      : null

  return ExtComponent
}

export default ExtractComponent
