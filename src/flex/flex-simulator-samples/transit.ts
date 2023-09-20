import { FlexContainer } from '@line/bot-sdk'
import { IMetadata } from '../types'

const TransitFlexMessage: FlexContainer = {
  type: 'bubble',
  size: 'mega',
  header: {
    type: 'box',
    layout: 'vertical',
    contents: [
      {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'text',
            text: 'FROM',
            color: '#ffffff66',
            size: 'sm',
          },
          {
            type: 'text',
            text: 'Akihabara',
            color: '#ffffff',
            size: 'xl',
            flex: 4,
            weight: 'bold',
          },
        ],
      },
      {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'text',
            text: 'TO',
            color: '#ffffff66',
            size: 'sm',
          },
          {
            type: 'text',
            text: 'Shinjuku',
            color: '#ffffff',
            size: 'xl',
            flex: 4,
            weight: 'bold',
          },
        ],
      },
    ],
    paddingAll: '20px',
    backgroundColor: '#0367D3',
    spacing: 'md',
    height: '154px',
    paddingTop: '22px',
  },
  body: {
    type: 'box',
    layout: 'vertical',
    contents: [
      {
        type: 'text',
        text: 'Total: 1 hour',
        color: '#b7b7b7',
        size: 'xs',
      },
      {
        type: 'box',
        layout: 'horizontal',
        contents: [
          {
            type: 'text',
            text: '20:30',
            size: 'sm',
            gravity: 'center',
          },
          {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'filler',
              },
              {
                type: 'box',
                layout: 'vertical',
                contents: [],
                cornerRadius: '30px',
                height: '12px',
                width: '12px',
                borderColor: '#EF454D',
                borderWidth: '2px',
              },
              {
                type: 'filler',
              },
            ],
            flex: 0,
          },
          {
            type: 'text',
            text: 'Akihabara',
            gravity: 'center',
            flex: 4,
            size: 'sm',
          },
        ],
        spacing: 'lg',
        cornerRadius: '30px',
        margin: 'xl',
      },
      {
        type: 'box',
        layout: 'horizontal',
        contents: [
          {
            type: 'box',
            layout: 'baseline',
            contents: [
              {
                type: 'filler',
              },
            ],
            flex: 1,
          },
          {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'box',
                layout: 'horizontal',
                contents: [
                  {
                    type: 'filler',
                  },
                  {
                    type: 'box',
                    layout: 'vertical',
                    contents: [],
                    width: '2px',
                    backgroundColor: '#B7B7B7',
                  },
                  {
                    type: 'filler',
                  },
                ],
                flex: 1,
              },
            ],
            width: '12px',
          },
          {
            type: 'text',
            text: 'Walk 4min',
            gravity: 'center',
            flex: 4,
            size: 'xs',
            color: '#8c8c8c',
          },
        ],
        spacing: 'lg',
        height: '64px',
      },
      {
        type: 'box',
        layout: 'horizontal',
        contents: [
          {
            type: 'box',
            layout: 'horizontal',
            contents: [
              {
                type: 'text',
                text: '20:34',
                gravity: 'center',
                size: 'sm',
              },
            ],
            flex: 1,
          },
          {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'filler',
              },
              {
                type: 'box',
                layout: 'vertical',
                contents: [],
                cornerRadius: '30px',
                width: '12px',
                height: '12px',
                borderWidth: '2px',
                borderColor: '#6486E3',
              },
              {
                type: 'filler',
              },
            ],
            flex: 0,
          },
          {
            type: 'text',
            text: 'Ochanomizu',
            gravity: 'center',
            flex: 4,
            size: 'sm',
          },
        ],
        spacing: 'lg',
        cornerRadius: '30px',
      },
      {
        type: 'box',
        layout: 'horizontal',
        contents: [
          {
            type: 'box',
            layout: 'baseline',
            contents: [
              {
                type: 'filler',
              },
            ],
            flex: 1,
          },
          {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'box',
                layout: 'horizontal',
                contents: [
                  {
                    type: 'filler',
                  },
                  {
                    type: 'box',
                    layout: 'vertical',
                    contents: [],
                    width: '2px',
                    backgroundColor: '#6486E3',
                  },
                  {
                    type: 'filler',
                  },
                ],
                flex: 1,
              },
            ],
            width: '12px',
          },
          {
            type: 'text',
            text: 'Metro 1hr',
            gravity: 'center',
            flex: 4,
            size: 'xs',
            color: '#8c8c8c',
          },
        ],
        spacing: 'lg',
        height: '64px',
      },
      {
        type: 'box',
        layout: 'horizontal',
        contents: [
          {
            type: 'text',
            text: '20:40',
            gravity: 'center',
            size: 'sm',
          },
          {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'filler',
              },
              {
                type: 'box',
                layout: 'vertical',
                contents: [],
                cornerRadius: '30px',
                width: '12px',
                height: '12px',
                borderColor: '#6486E3',
                borderWidth: '2px',
              },
              {
                type: 'filler',
              },
            ],
            flex: 0,
          },
          {
            type: 'text',
            text: 'Shinjuku',
            gravity: 'center',
            flex: 4,
            size: 'sm',
          },
        ],
        spacing: 'lg',
        cornerRadius: '30px',
      },
    ],
  },
}

const Metadata: IMetadata = {
  name: 'Transit',
  description: 'Flex Message',
  flexMessage: TransitFlexMessage,
  source: {
    type: 'link',
    label: 'Flex Message Simulator',
    link: 'https://developers.line.biz/flex-simulator/',
  },
}

export default Metadata
